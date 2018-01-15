$.getJSON("moviedictionary.json", function(data) {

	var start = 0;
	var end = 10;

	movies = data.values();

	$("#loadmore").click(function(){
	  var ul = document.getElementById("gallerylist");
		
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
			li.appendChild(textNode);
			ul.appendChild(li);

		}

		start += 10;
		end += 10;


 });





});



