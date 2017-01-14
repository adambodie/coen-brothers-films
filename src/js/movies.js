let arr = [{
	"title": "Blood Simple",
  "image": "blood-simple",
	"year": 1984,
	"starring": "John Getz, Frances McDormand, Dan Hedaya",
	"review": "hipster ipsum",
	"stars": 3.5

}, {
	"title": "Raising Arizona",
  "image": "raising-arizona",
	"year": 1987,
	"starring": "Nicolas Cage, Holly Hunter",
	"review": "hipster ipsum",
	"stars": 4.0

}, {
	"title": "Miller’s Crossing",
  "image": "millers-crossing",
	"year": 1990,
	"starring": "Gabriel Byrne, Marcia Gay Harden, John Turturro",
	"review": "hipster ipsum",
	"stars": 4.0
}, {
	"title": "Barton Fink",
  "image": "barton-fink",
	"year": 1991,
	"starring": "John Turturro, John Goodman",
	"review": "hipster ipsum",
	"stars": 4.0
}, {
	"title": "Fargo",
  "image": "fargo",
	"year": 1996,
	"starring": "Frances McDormand, William H.Macy, Steve Buscemi, Peter Stormare",
	"review": "hipster ipsum",
	"stars": 5.0

}, {
	"title": "The Big Lebowski",
  "image": "big-lebowski",
	"year": 1998,
	"starring": "Jeff Bridges, John Goodman, Julianne Moore, Steve Buscemi",
	"review": "hipster ipsum",
	"stars": 5.0

}, {
	"title": "O Brother, Where Art Thou?",
  "image": "o-brother-where-art-thou",
	"year": 2000,
	"starring": "George Clooney, John Turturro, Tim Blake Nelson",
	"review": "hipster ipsum",
	"stars": 4.5

}, {
	"title": "Intolerable Cruelty",
  "image": "intolerable_cruelty",
	"year": 2003,
	"starring": "George Clooney, Catherine Zeta-Jones",
	"review": "hipster ipsum",
	"stars": 2.5

}, {
	"title": "The Ladykillers",
  "image": "ladykillers",
	"year": 2004,
	"starring": "Tom Hanks, Irma Hall, Marlon Wayans",
	"review": "hipster ipsum",
	"stars": 3.0

}, {
	"title": "No Country For Old Men",
  "image": "no-country-for-old-men",
	"year": 2007,
	"starring": "Josh Brolin, Javier Bardem, Tommy Lee Jones",
	"review": "hipster ipsum",
	"stars": 5.0

}, {
	"title": "Burn After Reading",
  "image": "burn-after-reading",
	"year": 2008,
	"starring": "Frances McDormand, Brad Pitt, George Clooney, John Malkovich, Tilda Swanson",
	"review": "hipster ipsum",
	"stars": 4.0

}, {
	"title": "A Serious Man",
  "image": "a-serious-man",
	"year": 2009,
	"starring": "Michael Stuhlbarg, Richard Kind, Fred Melamed",
	"review": "hipster ipsum",
	"stars": 4.0

}, {
	"title": "True Grit",
  "image": "true-grit",
	"year": 2010,
	"starring": "Jeff Bridges, Josh Brolin, Matt Damon",
	"review": "hipster ipsum",
	"stars": 4.5

}]

function createRateYoClasses(number) {
  return ".rateYo" + number;
}
var txt = "";
for (var i = 0; i < arr.length; i++) {
  $(function () {
    for (var j = 0; j < arr.length; j++) {
    $(createRateYoClasses(j+1)).rateYo({rating: arr[j].stars, spacing: "5px"});
  }
  });
  txt += `<div class='movie'>
          <img src="https://s3-us-west-2.amazonaws.com/film.bodiewebdesign.com/img/${arr[i].image}.jpg">
                    <div class='rateYo${i+1}'></div>
                    </div>
                    `
         }
document.getElementById("movies").innerHTML = txt;
