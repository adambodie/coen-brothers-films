var replaceDescription = (title, year, starring, review) => {
	return `<div id="description">
	 <div id="review">
		 <h1>${title}</h1>
		 <div id="info">
		 <h4>${year}</h4>
		 <h4>Starring ${starring}</h4>
		 <p>${review}</p>
		 </div>
	 </div>
	</div>`
}

module.exports = replaceDescription;
