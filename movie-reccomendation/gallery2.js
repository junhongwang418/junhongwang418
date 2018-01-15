var moviedictionary = undefined;
var start = 0;
var end = 10;

$.getJSON("moviedictionary.json", function(data) {

	moviedictionary = data;

});

$("#loadmore").click(function(){
  var galleryDiv = document.getElementById("gallery");
	var ul = document.createElement("ul");

	var movies = moviedictionary.values();

	for (var i = start; i < end; i++) {

		// var div = document.createElement("div");
		// var a = document.createElement("a");
		// var img = document.createElement("img");
		// div.className += "col-lg-3 col-md-4 col-xs-6";
		// a.className += "d-block mb-4 h-100";
		// img.className += "img-fluid img-thumbnail";
		// img.src = "http://placehold.it/400x300";
		// img.alt = ""

		// a.appendChild(img);
		// div.appendChild(a);
		
		var li = document.createElement("li");
		var textNode = document.createTextNode(movies[i]);
		console.log(data[key]);
		li.appendChild(textNode);
		ul.appendChild(li);

	}

	start += 10;
	end += 10;

	galleryDiv.appendChild(ul);
 });



