const extractImportantWeatherData = (weatherData) => {
    let importantData = {};
    importantData["tempC"] = weatherData.main.temp;
    importantData["tempF"] = ((weatherData.main.temp) * 9/5) + 32;
    importantData["location"] = `${weatherData.name}, ${weatherData.sys.country}`
    importantData["weather"] = weatherData.weather[0].main;
    importantData["weatherDesc"] = weatherData.weather[0].description;

    return importantData;
}

export default extractImportantWeatherData;