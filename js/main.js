$(document).ready(function() {
  console.log("loaded")
  var doSomeStuff = function(event) {
     // prevents form submission
     event.preventDefault();
     // reads user input which will be a city name
     var city = $('#city-type').val();
     // converts the city name to lowercase (so that we don't have to worry about case-sensitive)
     var lowerCase = city.toLowerCase();
     if (lowerCase === "nyc" || lowerCase === "new york city" || lowerCase === "new york") {
       $("body").css("background-image", "url(images/nyc.jpg)");
     } else if (lowerCase === "la" || lowerCase === "los angeles" || lowerCase === "lax") {
       $("body").css("background-image", "url(images/la.jpg)");
     } else if (lowerCase === "sf" || lowerCase === "bay area" || lowerCase === "san francisco") {
       $("body").css("background-image", "url(images/sf.jpg)");
     } else if (lowerCase === "syd" || lowerCase === "sydney") {
       $("body").css("background-image", "url(images/sydney.jpg)");
     } else if (lowerCase === "austin" || lowerCase === "atx") {
       $("body").css("background-image", "url(images/austin.jpg)");
     } else {
    	 $("body").css("background-image", "url(images/citipix_skyline.jpg)");
     }
  }
   $('form').submit(doSomeStuff);
});
