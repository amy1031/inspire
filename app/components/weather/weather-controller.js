function WeatherController(){
	//var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
			drawWeather(weather);
			//What can you do with this weather object?
		})

	// PRINTS TO THE SCREEN
	function drawWeather(data){
		var elem = document.getElementById("weather");
		var template = "";

		template = `
		<div class="col-xs-12">
		<h2>${Math.round(data["main"]["temp"] * (9/5) - 459.67)}°</h2>
		</div>
		`

		return elem.innerHTML = template;
	}
}
