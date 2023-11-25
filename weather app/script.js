


async function showWeather(){

a = placeName.value    
    
    placeName.value = ""
    

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ a;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0191dd1bb8msh4931a6989c036aap1cbcd3jsnd68096856256',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);

cityName.innerHTML = a

temp.innerHTML = "Temperature : " + result.temp + " degree C"
hum.innerHTML = "Humidity : " +  result.humidity + "%"
feels.innerHTML = "Feels Like : " +  result.feels_like + " degree C"

} catch (error) {
	console.error(error);
}
}

