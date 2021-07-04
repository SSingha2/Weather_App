class Weather{
    constructor(city, state){
        this.apiKey = 'b4b288c106fb27493f800883acf665a7';
        this.city = city;
        this.state = state;
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=metric`);
        const responseData = await response.json();
        return responseData
    }

    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}