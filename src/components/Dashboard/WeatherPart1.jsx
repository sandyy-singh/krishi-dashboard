import React, { useState, useEffect } from 'react';
import "./Styles/Weather.scss";
import axios from "axios";
const WeatherPart1 = () => {

    const [location, setLocation] = useState({ latitude: null, longitude: null });

    const [error, setError] = useState(null);
    const [city, setCity] = useState(null);

    const [todayTemp, setTodayTemp] = useState(null)



    const [todayHum, setTodayHum] = useState(null)
    const [secondDayHum, setSecondDayHum] = useState(null)
    const [thirdDayHum, setThirdDayHum] = useState(null)
    const [fourthDayHum, setFourthDayHum] = useState(null)
    const [fifthDayHum, setFifthDayHum] = useState(null)
    const [sixDayHum, setSixDayHum] = useState(null)

    const [todayMinTemp, setTodayMinTemp] = useState(null)
    const [secondDayMinTemp, setSecondDayMinTemp] = useState(null)
    const [thirdDayMinTemp, setThirdDayMinTemp] = useState(null)
    const [fourthDayMinTemp, setFourthDayMinTemp] = useState(null)
    const [fifthDayMinTemp, setFifthDayMinTemp] = useState(null)
    const [sixDayMinTemp, setSixDayMinTemp] = useState(null)



    const [todayMaxTemp, setTodayMaxTemp] = useState(null)
    const [secondDayMaxTemp, setSecondDayMaxTemp] = useState(null)
    const [thirdDayMaxTemp, setThirdDayMaxTemp] = useState(null)
    const [fourthDayMaxTemp, setFourthDayMaxTemp] = useState(null)
    const [fifthDayMaxTemp, setFifthDayMaxTemp] = useState(null)
    const [sixDayMaxTemp, setSixDayMaxTemp] = useState(null)


    const [todayEpoch, setTodayEpoch] = useState(null)
    const [secondDayEpoch, setSecondDayEpoch] = useState(null)
    const [thirdDayEpoch, setThirdDayEpoch] = useState(null)
    const [fourthDayEpoch, setFourthDayEpoch] = useState(null)
    const [fifthDayEpoch, setFifthDayEpoch] = useState(null)
    const [sixEpoch, setSixDayEpoch] = useState(null)


    const getDayName = (epoch) => {
        const date = new Date(epoch * 1000); // Convert to milliseconds
        const options = { weekday: 'long' };
        const day = Intl.DateTimeFormat('en-US', options).format(date);
        const dayyyy = day.slice(0, 3);
        console.log(day, "day")
        return dayyyy;

    };

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setLocation({ latitude, longitude });
                        setError(null);
                        getWeather(latitude, longitude);
                    },
                    (err) => {
                        setError(err.message);
                    }
                );
            } else {
                setError('Geolocation is not supported by this browser.');
            }
        };




        const getWeather = async (latitude, longitude) => {
            console.log("test", latitude, longitude)
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=bc3604a1220f361a6bce82516c298ccc`);

                const todayyMin = response.data.list[1].main.temp_min;
                const seconddMin = response.data.list[10].main.temp_min;
                const thirddMin = response.data.list[17].main.temp_min;
                const fourthhMin = response.data.list[25].main.temp_min;
                const fifthhMin = response.data.list[29].main.temp_min;
                const sixthhMin = response.data.list[30].main.temp_min;

                const todayyMax = response.data.list[1].main.temp_max;
                const seconddMax = response.data.list[10].main.temp_max;
                const thirddMax = response.data.list[17].main.temp_max;
                const fourthhMax = response.data.list[25].main.temp_max;
                const fifthhMax = response.data.list[29].main.temp_max;
                const sixthhMax = response.data.list[30].main.temp_max;

                const todayyHum = response.data.list[1].main.humidity;
                const seconddHum = response.data.list[10].main.humidity;
                const thirddHum = response.data.list[17].main.humidity;
                const fourthhHum = response.data.list[25].main.humidity;
                const fifthhHum = response.data.list[29].main.humidity;
                const sixthhHum = response.data.list[30].main.humidity;



                const todayEpochh = response.data.list[1].dt;
                const secondEpochh = response.data.list[10].dt;
                const thirdEpochh = response.data.list[17].dt;
                const fourthEpochh = response.data.list[25].dt;
                const fifthEpochh = response.data.list[29].dt;
                const sixthEpochh = response.data.list[30].dt;


                console.log("todayEpochh", todayEpochh);
                // const tt = getDayName(todayEpochh);
                // console.log("tt", tt);

                setTodayEpoch(parseInt(todayEpochh));
                setSecondDayEpoch(parseInt(secondEpochh));
                setThirdDayEpoch(parseInt(thirdEpochh));
                setFourthDayEpoch(parseInt(fourthEpochh));
                setFifthDayEpoch(parseInt(fifthEpochh));
                setSixDayEpoch(parseInt(sixthEpochh));



                setCity(response.data.city.name);

                const todayTem = (todayyMin + todayyMax) / 2
                setTodayTemp(todayTem)

                setTodayMinTemp(parseInt(todayyMin));
                setSecondDayMinTemp(parseInt(seconddMin));
                setThirdDayMinTemp(parseInt(thirddMin));
                setFourthDayMinTemp(parseInt(fourthhMin));
                setFifthDayMinTemp(parseInt(fifthhMin));
                setSixDayMinTemp(parseInt(sixthhMin));


                setTodayMaxTemp(parseInt(todayyMax));
                setSecondDayMaxTemp(parseInt(seconddMax));
                setThirdDayMaxTemp(parseInt(thirddMax));
                setFourthDayMaxTemp(parseInt(fourthhMax));
                setFifthDayMaxTemp(parseInt(fifthhMax));
                setSixDayMaxTemp(parseInt(sixthhMax));


                setTodayHum(parseInt(todayyHum));
                setSecondDayHum(parseInt(seconddHum));
                setThirdDayHum(parseInt(thirddHum));
                setFourthDayHum(parseInt(fourthhHum));
                setFifthDayHum(parseInt(fifthhHum));
                setSixDayHum(parseInt(sixthhHum));


                console.log("test", response.data)

            } catch (err) {
                setError('Failed to fetch weather data.');
            }
        };

        getLocation();
    }, []);
    // getDayName(todayEpoch)

    return (
        <div className="Weather-bg">
            <div className="Weather-data">
                <div className="Weather-head">
                    <span className="city-name">{city}</span>
                    <span className="city-temperature">{todayMaxTemp - 274}°C</span>
                    <span className='text-white'>{getDayName(todayEpoch)}</span>
                </div>
                <div className="Weather-part1">
                    <div className="Weather-now">
                        <h3 className="head-h3">Today</h3>
                        <div className="img"></div>
                        <h3 className="temp-h3">{secondDayMaxTemp - 274}°</h3>
                    </div>
                    <div className="Weather-now">
                        <h3 className="head-h3">{getDayName(secondDayEpoch)}</h3>
                        <div className="img"></div>
                        <h3 className="temp-h3">{thirdDayMaxTemp - 274}°</h3>
                    </div>
                    <div className="Weather-now">
                        <h3 className="head-h3">{getDayName(thirdDayEpoch)}</h3>
                        <div className="img"></div>
                        <h3 className="temp-h3">{fourthDayMaxTemp - 274}°</h3>
                    </div>
                    <div className="Weather-now">
                        <h3 className="head-h3">{getDayName(fourthDayEpoch)}</h3>
                        <div className="img"></div>
                        <h3 className="temp-h3">{fifthDayMaxTemp - 274}°</h3>
                    </div>
                    <div className="Weather-now">
                        <h3 className="head-h3">{getDayName(fifthDayEpoch)}</h3>
                        <div className="img"></div>
                        <h3 className="temp-h3">{sixDayMaxTemp - 274}°</h3>
                    </div>

                </div>

                <div className="Weather-part2">
                    <div className="Weather-part2-1">
                        <div className="Weather-part2-1-img"></div>
                        <div className="Weather-part2-1-head">5-DAY FORECAST</div>
                    </div>
                    <div className="bordered"></div>

                    <div className="Weather-part2-2">
                        <div className="day">{getDayName(todayEpoch)}</div>
                        <div className="photo-per">
                            <div className="photo"></div>
                            <div className="percent">{todayHum}%</div>
                        </div>
                        <div className="photo2"></div>
                        <div className="min-max">
                            <div className="temp-min"> {todayMinTemp - 274}°</div>
                            <div className="temp-max">{todayMaxTemp - 274}°</div>
                        </div>
                    </div>
                    <div className="bordered"></div>

                    <div className="Weather-part2-2">
                        <div className="day">{getDayName(secondDayEpoch)}</div>
                        <div className="photo-per">
                            <div className="photo"></div>
                            <div className="percent">{secondDayHum}%</div>
                        </div>
                        <div className="photo2"></div>
                        <div className="min-max">
                            <div className="temp-min">{secondDayMinTemp - 274}°</div>
                            <div className="temp-max">{secondDayMaxTemp - 274}°</div>
                        </div>
                    </div>
                    <div className="bordered"></div>

                    <div className="Weather-part2-2">
                        <div className="day">{getDayName(thirdDayEpoch)}</div>
                        <div className="photo-per">
                            <div className="photo"></div>
                            <div className="percent">{thirdDayHum}%</div>
                        </div>
                        <div className="photo2"></div>
                        <div className="min-max">
                            <div className="temp-min">{thirdDayMinTemp - 274}°</div>
                            <div className="temp-max">{thirdDayMaxTemp - 274}°</div>
                        </div>
                    </div>
                    <div className="bordered"></div>

                    <div className="Weather-part2-2">
                        <div className="day">{getDayName(fourthDayEpoch)}</div>
                        <div className="photo-per">
                            <div className="photo"></div>
                            <div className="percent">{fourthDayHum}%</div>
                        </div>
                        <div className="photo2"></div>
                        <div className="min-max">
                            <div className="temp-min">{fourthDayMinTemp - 274}°</div>
                            <div className="temp-max">{fourthDayMaxTemp - 274}°</div>
                        </div>
                    </div>
                    <div className="bordered"></div>

                    <div className="Weather-part2-2">
                        <div className="day">{getDayName(fifthDayEpoch)}</div>
                        <div className="photo-per">
                            <div className="photo"></div>
                            <div className="percent">{fifthDayHum}%</div>
                        </div>
                        <div className="photo2"></div>
                        <div className="min-max">
                            <div className="temp-min">{fifthDayMinTemp - 274}°</div>
                            <div className="temp-max">{fifthDayMaxTemp - 274}°</div>
                        </div>
                    </div>
                    <div className="bordered"></div>



                </div>
            </div>
        </div>
    );
};

export default WeatherPart1;
