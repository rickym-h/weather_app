let weatherData;
async function getWeatherData(locationQuery) {
    if ((!locationQuery) ||(locationQuery.length === 0)) {
        locationQuery = "London";
    }
    const API_KEY = "d6c2aeb1081496ab644469e9d5cc827c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${locationQuery}&APPID=${API_KEY}`;
    const response = await fetch(url, {cors: true});
    weatherData = await response.json();
}
getWeatherData();
