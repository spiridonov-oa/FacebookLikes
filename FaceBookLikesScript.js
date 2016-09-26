function likeAll () {
	setTimeout(()=>{
		window.scrollTo(0,10000000);
		console.log('scrolled');
		var likeBtns = [...document.querySelectorAll('.UFILikeLink:not(.UFILinkBright)')];
		if (!likeBtns.length) {
			likeAll();
		}
		likeBtns.forEach(function(el,i) {
		setTimeout(() => {
			el.click();
			console.log( (i + 1) + ' - liked ;) of ' + likeBtns.length);
			if (i === likeBtns.length - 1) {
				likeAll();
			}
		}, i*2000) });
	}, 1000);
}
	
likeAll();