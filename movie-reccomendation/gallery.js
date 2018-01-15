

$.getJSON("moviedictionary.json", function(data) {

	var galleryDiv = document.getElementById("gallery");
  var ul = document.createElement("ul");

	for (var i = 0; i < 10; i++) {



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
		var textNode = document.createElement(data["2"]);
		li.appendChild(textNode);
		ul.appendChild(li);

	}

	galleryDiv.appendChild(ul);
});

