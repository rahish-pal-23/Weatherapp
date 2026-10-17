import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherinfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 26.15,
    temp: 26.15,
    temp_min: 26.15,
    temp_max: 26.15,
    humidity: 69,
    weather: "scattered clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Rahish</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherinfo} />
    </div>
  );
}
