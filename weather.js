const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f160f0b003msha2e978a7b3e80e5p1d4f08jsn6d75884c4dc9',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


 function fetchWeather(city){
let p=fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city +' ', options)
	.then((response)=> response.json())
    .then((data)=> {
		console.log(data);
		displaydata(data);

    })
    .catch(err=>console.error(err));
}	
function displaydata(data){
	let city=document.querySelector(".city").innerHTML="Weather in "+ (data.location.name);
	let ic=data.current.condition.icon;
	console.log(ic);
	let img=document.querySelector(".icon");
	img.src="https:"+ic;
	let t=data.current.temp_c;

	let temp=document.querySelector(".temp").innerHTML=t+"° C";
	let des=data.current.condition.text;
	let description=document.querySelector(".description").innerHTML=des;
	let humid=data.current.humidity;
	let humidity=document.querySelector(".humidity").innerHTML="Humidity :"+humid+"%";
	let wind=data.current.wind_kph;
	let windspeed=document.querySelector(".wind-speed").innerHTML="Wind Speed :"+wind+"km/h";
}
let button=document.querySelector(".search-button").addEventListener("click",fetchW);

function fetchW(e){
	let search=document.querySelector(".search-bar").value;
	fetchWeather(search);

}
document.querySelector(".search-bar").addEventListener("keyup",function(e){
	if(e.key=="Enter"){
		let search=document.querySelector(".search-bar").value;
		fetchWeather(search)
	}
})


//.catch(err => console.error(err));