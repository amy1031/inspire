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
			<div class="col-xs-8 col-xs-offset-2 col-md-8 col-md-offset-2 text-center">
			<h3>${data.quote}</h3>
			<p class="author">- ${data.author}</p>
			</div>
			`
		return elem.innerHTML = template;
	}
}
