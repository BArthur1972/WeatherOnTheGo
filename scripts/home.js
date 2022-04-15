// Stores the preferred unit of measurement
var unitValue = document.querySelector("#select-unit").value;

// Weather object containing functions used to fetch weather and display weather
let weather = {

    // My API key
    apiKey: "942dd77fa358eb3439a8212cb16724cd",

    // User's location upon opening the webpage.
    coordinates: ["", ""],

    // Returns the appropriate unit parameter based on the user's choice
    getUnit: function () {
        if (unitValue === "fahrenheit") {
            return "imperial";
        } else {
            return "metric";
        }
    },

    // Fetches the weather information from API based on city name
    fetchWeatherByCity: function (city) {
        // Making API call
        try {
            fetch("https://api.openweathermap.org/data/2.5/weather?q="
                + city
                + "&units=" + this.getUnit() + "&appid="
                + this.apiKey
            )
                .then((response) => response.json())
                .then((data) => this.getWeatherInfo(data));

        } catch (error) {
            console.log(error)
            alert('Enter a valid location');
        }
    },

    // Fetches the weather information from API based on geolocation
    fetchWeatherByGeolocation: function () {
        // Making API call
        fetch("https://api.openweathermap.org/geo/1.0/reverse?lat="
            + this.coordinates[0]
            + "&lon="
            + this.coordinates[1] + "&appid="
            + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.fetchWeatherByCity(this.getLocation(data)));
    },

    // Gets the name of the user's current location
    getLocation: function (data) {
        // Accessing the name of the location based on the user's city
        const { name } = data[0];
        console.log("Your location is " + name);
        return name;
    },

    // Gets the weather info from API response
    getWeatherInfo: function (data) {
        try {
            // Extract relevant information from JSON response.
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, humidity, feels_like, temp_min, temp_max } = data.main;
            const { speed } = data.wind;
            console.log(name, icon, description, temp, humidity, feels_like, temp_min, temp_max, speed);

            // Finding out which symbol to display based on the unit
            let symbol;
            if (unitValue === "fahrenheit") {
                symbol = "°F";
            } else {
                symbol = "°C";
            }

            // Assigning the weather details obtained from the API
            // response to their corresponding fields in the page
            document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".description").innerText = description;
            document.querySelector(".temp").innerText = temp + symbol;
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector("#humidity-value").innerText = humidity + "%";
            document.querySelector("#wind-value").innerText = speed + "km/h";
            document.querySelector("#feelslike-value").innerText = feels_like + symbol;
            document.querySelector("#lowhigh-value").innerText = temp_min + symbol + " / " + temp_max + symbol;
            document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900/?" + name + ")";
            document.querySelector(".card-body").classList.remove("loading");

        } catch (error) {
            console.log(error);
            alert("Enter a valid location");
        }
    },

    // Gets the city name entered in the search bar
    // and fetches the weather for that city
    search: function () {
        let location = document.querySelector(".bar").value;
        this.fetchWeatherByCity(location);
    }
};

document.querySelector("#select-unit").addEventListener("change", function () {
    unitValue = this.value;
});

// Setting up the search button to call the
// search function in the weather object
document.querySelector(".btn-primary").addEventListener("click", function () {
    weather.search();
});

// Allows user to hit enter to search for weather by
//  calling the search function in the weather object
document.querySelector(".bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

// Get the user's current latitude and longitude
function getCurrentLocation() {

    // Code executes when coordinates are found
    const successCallback = (position) => {
        const { latitude, longitude } = position.coords;
        weather.coordinates[0] += latitude;
        weather.coordinates[1] += longitude;
        console.log(weather.coordinates[0], weather.coordinates[1]);

        // Get the weather of the based on the user's current location
        // by using their longitude and latitude
        weather.fetchWeatherByGeolocation(weather.coordinates);
    }

    // Executes when coordinates were not found or user denied permission
    const failureCallback = (error) => {
        console.log("User denied access to location");
        console.error(error);
        weather.fetchWeatherByCity("London");
    }
    navigator.geolocation.getCurrentPosition(successCallback, failureCallback);
    // I will execute success or failure later
}

// Clear the search bar when the page is refreshed
window.onload = function () {
    document.querySelector(".bar").value = "";
};

// Get weather by the user's current location when the page loads initially
getCurrentLocation();