var ApiKey = "729651f20bc8356ce67eda45c7b3ab61";
var city;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)