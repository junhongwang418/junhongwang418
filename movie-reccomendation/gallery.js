var galleryDiv = document.getElementById("gallery");

$.getJSON("moviedictionary.json", function(data) {
    console.log(data["2"]);
    // data is a JavaScript object now. Handle it as such

});

for (var i = 0; i < 10; i++) {
	var div = document.createElement("div");
	var a = document.createElement("a");
	var img = document.createElement("img");
	div.className += "col-lg-3 col-md-4 col-xs-6";
	a.className += "d-block mb-4 h-100";
	img.className += "img-fluid img-thumbnail";
	img.src = "http://placehold.it/400x300";
	img.alt = ""

	a.appendChild(img);
	div.appendChild(a);
	galleryDiv.appendChild(div);

}
