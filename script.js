$(document).ready(function () {

    $('#searchBtn').click(function () {
        citySearch()
        function citySearch() {
            //console.log("I worked")
            var city = $("#cityInput").val()
            //console.log(city)
            var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=93c464dafc5040907d7028517a022299";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                $("#name").append(response.name)
                //console.log(response);
                var lat = response.coord.lat
                var lon = response.coord.lon
                response.name;
                response.main.temp;
                response.main.humidity;
                response.wind.speed;

                $('#cityName').text(
                    response.name + ' (' + new Date().toLocaleDateString() + ')'
                );

                $('#cityName').append(

                );
                $('#currentTemp')
                    .text(`Temperature: ${response.main.temp}` + 'º F')
                    .addClass('currentWeather');
                $('#humidity')
                    .text(`Humidity: ${response.main.humidity}` + '%')
                    .addClass('currentWeather');
                $('#windSpeed')
                    .text(`Windspeed: ${response.wind.speed}` + 'mph')
                    .addClass('currentWeather');
                getForcast(city);
                uvIndex(lat, lon)
            });
        }

        function getForcast(input) {
            let fiveDayQueryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=imperial&appid=93c464dafc5040907d7028517a022299`;

            $.ajax({
                url: fiveDayQueryURL,
                type: 'GET',
            }).then(function (response) {
                $('#forecast')
                    .html('<h4 class="mt-3">5-Day Forecast:</h4>')
                    .append('<div class="row">');
                console.log(response);
                for (let i = 0; i < response.list.length; i++) {
                    let hour = response.list[i];
                    if (hour.dt_txt.indexOf('00:00:00') != -1) {
                        let date = new Date(hour.dt_txt).toLocaleDateString();
                        hour.main.temp;
                        hour.main.humidity;
                        let DIV = $('<span>');
                        let image = $('<img>');
                        image.attr(
                            'src',
                            `http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`
                        );
                        DIV.addClass('divClasses');
                        DIV.append(`<h3>${date}</h3>`);
                        DIV.append(image);
                        DIV.append(
                            `<p>Temperture <br>  ${
                            hour.main.temp + 'º F'
                            } </p><p>Humidity <br> ${hour.main.humidity + '%'}</p>`
                        );
                        $('#fiveDayForecast').append(DIV);
                    }
                }
            })
        }
    })
    function uvIndex(parameter1, parameter2) {
        var uvQuery = "http://api.openweathermap.org/data/2.5/uvi?appid=93c464dafc5040907d7028517a022299&lat=" + parameter1 + "&lon=" + parameter2
        $.ajax({
            url: uvQuery,
            method: "GET"
        }).then(function (response) {
            $('#uvIndex')
                .text(`uvIndex: ${response.value}` + '')
                .addClass('currentWeather');
            console.log(response)
        })
    }
})