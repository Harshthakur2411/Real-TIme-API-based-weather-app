import readline from "readline/promises";
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const API_KEY = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

const getweather = async (city)=>{
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`City not Found !!!!`);

        }
        const weatherData = await response.json();
        console.log(
         ` 🌍  ${weatherData.name} 
         | 🌡️  ${weatherData.main.temp}°C 
         | 🌤️  ${weatherData.weather[0].description} 
         | 💧  ${weatherData.main.humidity}% 
         | 🌬️  ${weatherData.wind.speed} m/s`
         );

        
    } catch (err) {
        console.log(err);
        
    }

}

const city = await rl.question("Enter the city name: ");
await getweather(city);
rl.close();
