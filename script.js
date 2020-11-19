
function citySearch() {
    console.log("I worked")
    var city = $("#cityInput").val()
    console.log(city)
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=93c464dafc5040907d7028517a022299";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#name").append(response.name)
        // Printing the entire object to console
        console.log(response);
        var lat=response.coord.lat
        var lon=response.coord.lon
        http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}
    })
}
$("#city").on("click", citySearch)