import extractImportantWeatherData from "./weather_functions";

// Function to get data from OpenWeatherMap API
async function getWeatherData(locationQuery) {
    try {
        if ((!locationQuery) ||(locationQuery.length === 0)) {
            locationQuery = "London";
        }
        let unit = "metric"
        const API_KEY = "d6c2aeb1081496ab644469e9d5cc827c";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${locationQuery}&units=${unit}&APPID=${API_KEY}`;
        const response = await fetch(url, {cors: true});
        const weatherData = await response.json();


        // Update DOM to show weather Data
        console.log(weatherData)
        // Weather (Clouds)
        // Weather Description (Overcast Clouds)
        // Date + Time
        // Switch Temps
        // Humidity
        // Pressure
        const importantData = extractImportantWeatherData(weatherData);
        console.log(importantData)


    } catch (err) {
        console.log(err)
    }
}
getWeatherData();
