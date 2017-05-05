function QuoteController(){

	var quoteService = new QuoteService()

	quoteService.getQuote(function(quote){
		//console.log('What is the quote', quote)
		drawQuote(quote)
	})

	function drawQuote (data) {
		var elem = document.getElementById("quote");
		var template = "";
		template = `
			<div class="col-xs-12">
			<h2>${data.quote}</h2>
			</div>
			`

		return elem.innerHTML = template;
	}
}
