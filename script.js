$(document).ready(function () {
    $('#searchBtn').click(function () {

function citySearch() {
    //console.log("I worked")
    var city = $("#cityInput").val()
    //console.log(city)
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=93c464dafc5040907d7028517a022299";
    var lat=response.coord.lat
    var lon=response.coord.lon$.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#name").append(response.name)
        // Printing the entire object to console
        //console.log(response);

        response.name;
        response.main.temp;
        response.main.humidity;
        response.wind.speed;
        $('#cityName').text(
            response.name + ' (' + new Date().toLocaleDateString() + ')'
        );
        $('#cityName').append(
        );
        $('currentTemp')
            .text('Temperature: ${respone.main.temp}' + '° F')
            .addClass('currentWeather');
        $('humidity')
            .text('Humidity: ${response.main.humidity}' + '%')
            .addClass('currentWeather');
            
        
    })
}
$("#city").on("click", citySearch)
//http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}
//http://openweathermap.org/img/wn/${response.weather[0].icon}.png