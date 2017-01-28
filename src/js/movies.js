var replaceDescription = require('./description.js');
var films = require('./films.js');

var createButton = (index) => {
 return $(`.button${index + 1}`).click(function(){
   for (var k = 0; k < films.length; k++) {
       $(`.triangle${k+1}`).css("display", "none");
   }
		 $("#description").replaceWith(replaceDescription(films[index].title, films[index].year, films[index].starring, films[index].review));
     $(`.triangle${index+1}`).css("display", "block");
 });
}
/*$(function () {
		for (var j = 0; j < films.length; j++) {
				$(`.rateYo${j+1}`).rateYo({rating: films[j].stars, spacing: "5px"});
		}
});*/

var txt = "";
for (var i = 0; i < films.length; i++) {
  txt += `<div class='movie${i+1}'>
              <img src="./src/img/${films[i].image}.jpg" class="img-responsive">
                    <div class='rateYo${i+1}'></div>
                    <button type="button" class="btn btn-primary button${i+1}">View Details</button>
                    <img src="https://s3-us-west-2.amazonaws.com/film.bodiewebdesign.com/img/triangle.png" class="img-responsive triangle${i+1}" style="display:none">
          </div>
                    `
}
document.getElementById("movies").innerHTML = txt;

for (var i = 0; i < films.length; i++) {
    createButton(i);
}
