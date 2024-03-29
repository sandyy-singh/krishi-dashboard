import React from "react";
import { useState } from "react";
import "./SignUp.scss";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { apppp } from "./firebase";
import { useUserContext } from "./UserProvider";
const auth = getAuth(apppp);
const firestore = getFirestore(apppp);

const SignUp = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isValidMobile, setIsValidMobile] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [passwordType, setPasswordType] = useState("password");

  const navigate = useNavigate();

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleMobileChange = (e) => {
    const inputMobile = e.target.value;
    setPhone(inputMobile);
    const mobilePattern = /^[0-9]{10}$/; // Change this pattern according to your needs
    setIsValidMobile(mobilePattern.test(inputMobile));
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(inputEmail));
  };

  const SignUpSubmitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password is not matched")
      setPassword("")
      setConfirmPassword("")
      return;
    }


    if (!isValidMobile) {
      alert("Please enter a valid 10-digit mobile number");
      setPhone("");

      return;
    }
    if (!isValidEmail) {
      alert("Please enter a valid email ");

      setEmail("");

      return;
    }
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        confirmPassword,
        location,
        phone
      ).then((response) => alert("your account is created"));
    } catch (error) {
      if (error) {
        console.log(error);
        alert("somethimg wrong,please try again");
        setName("");
        setLocation("");
        setPhone("");
        setEmail("");
        setPassword("");
        setConfirmPassword("")
        return;
      }
    }
    setName("");
    setLocation("");
    setPhone("");
    setEmail("");
    setConfirmPassword("")
    setPassword("");
    navigate("/Login");
  };

  return (
    <div className="container-fluid register1  ">
      <div className=" row    ">
        <div className="col-12 sibnUpParent ">
          <div className="row rowWidth  ">
            <div className="col-12 border rounded border-secondary bg-light  shadow   ">
              <h3 className="text-center pt-2 ">Signup</h3>
              <form
                autoComplete="off"
                className="form-group"
                onSubmit={SignUpSubmitHandler}
              >
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-11 col-sm-9">
                    <label className="labels" htmlFor="Name">
                      {" "}
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-input"
                      id="Name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="row  d-flex justify-content-center align-items-center">
                  <div className="col-11 col-sm-9">
                    <label className="labels" htmlFor="Location">
                      Location
                    </label>
                    <input
                      type="text"
                      className="form-control form-input"
                      id="Location"
                      placeholder="Enter your Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="row  d-flex justify-content-center align-items-center">
                  <div className="col-11 col-sm-9">
                    <label className="labels" htmlFor="Phone">
                      Phone No.
                    </label>
                    <input
                      type="number"
                      className="form-control form-input"
                      id="Phone"
                      placeholder="Enter your Phone No."
                      value={phone}
                      onChange={handleMobileChange}
                      required
                    />
                  </div>
                </div>
                <div className="row  d-flex justify-content-center align-items-center ">
                  <div className="col-11 col-sm-9">
                    <label className="labels" htmlFor="Email">
                      Email
                    </label>
                    <input
                      type="emai"
                      className="form-control form-input"
                      id="Email"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
                </div>
                {/*   <div className="row  d-flex justify-content-center align-items-center">
                  <div className="col-11 col-sm-9 ">
                    <label className="labels" htmlFor="Password">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-input"
                      id="Password"
                      placeholder="Enter your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div> */}

                <div className="row  d-flex justify-content-center align-items-center">
                  <div className="col-11 col-sm-9 ">
                    <label htmlFor="password">Password</label>
                    <div className="input-group ">
                      <input
                        type={passwordType}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        name="password"
                        className="form-control  form-input"
                        placeholder="Password"
                      />
                      <div className="">
                        <div
                          className=" btn-outline-primary eyeBtn form-input"
                          onClick={togglePassword}
                        >
                          {passwordType === "password" ? (
                            <AiOutlineEyeInvisible />
                          ) : (
                            <AiOutlineEye />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="row  d-flex justify-content-center align-items-center">
                  <div className="col-11 col-sm-9 ">
                    <label htmlFor="password">Confirm Password</label>
                    <div className="input-group ">
                      <input
                        type={passwordType}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        name="password"
                        className="form-control  form-input"
                        placeholder="Password"
                      />
                      <div className="">
                        <div
                          className=" btn-outline-primary eyeBtn form-input"
                          onClick={togglePassword}
                        >
                          {passwordType === "password" ? (
                            <AiOutlineEyeInvisible />
                          ) : (
                            <AiOutlineEye />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>















                <div className="row  d-flex justify-content-center align-items-center mt-2   ">
                  <div className="col-11 col-sm-9  submitSignUp  ">
                    <button type="submit" className="btn-primary ">
                      SignUp
                    </button>
                  </div>
                </div>

                <div className="row  d-flex justify-content-center align-items-center">
                  <div className="col-11   ">
                    <p className="login-para text-center">
                      Already have an account?
                      <a className="login-link" href="/login">
                        LogIn!
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
