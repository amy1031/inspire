function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService();

	imageService.getImage(function(image) {
		drawImage(image)
	})

	function drawImage (data) {
		$('body').css('background-image','url(' + data["url"] + ')');
	}
}


