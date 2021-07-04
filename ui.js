class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icons = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        const ic = weather.weather[0].icon;
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp;
        this.icons.setAttribute('src',`http://openweathermap.org/img/wn/${ic}@2x.png`);
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
        this.dewpoint.textContent = `Visibility: ${weather.visibility}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
    }
}