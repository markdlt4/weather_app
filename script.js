
function citySearch() {
    console.log("I worked")
    var city = $("#cityInput").val()
    console.log(city)
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=93c464dafc5040907d7028517a022299";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Printing the entire object to console
        console.log(response);
    })
}
$("#city").on("click", citySearch)