var likeBtnSelector = '.UFILikeLink:not(.UFILinkBright)';
var counter = 0;
var stop = false;

function clickAllAvalableLikes(arrBtns) {
	arrBtns.forEach(function(el,i) {
		setTimeout(() => {
			el.click();
			console.log( (i + 1) + ' - liked ;) of ' + arrBtns.length);
			console.log( ++counter + ' - posts liked' );
			if (i === arrBtns.length - 1) {
				likeAll();
			}
		}, i*2000);
	});
}

function likeAll () {
	if(stop) {
		return;
	}
	setTimeout(()=>{
		window.scrollTo(0,10000000);
		console.log('scrolled');
		var likeBtns = [...document.querySelectorAll(likeBtnSelector)];
		if (!likeBtns.length) {
			likeAll();
		}
		clickAllAvalableLikes(likeBtns);

	}, 1000);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function likeRandom (interval) {
	if(stop) {
		return;
	}
	setTimeout(()=>{
		window.scrollTo(0,10000000);
		console.log('scrolled');
		var likeBtns = [...document.querySelectorAll(likeBtnSelector)];
		if (!likeBtns.length) {
			likeAll();
		}
		//ToDo: Now it is not actually random. 
		// likeBtns - select unliked btns after every scroll
		var randomBtns = shuffle(likeBtns).slice(0, likeBtns.length/2); 
		clickAllAvalableLikes(randomBtns);

	}, 1000);
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}