const likeBtnSelector = '.UFILikeLink:not(.UFILinkBright)';
const pageLikeBtnSelector = '.likeButton';
let counter = 0;
const stop = false;

function pageLike() {
  const pageLikeBtn = [...document.querySelectorAll(pageLikeBtnSelector)];
  if (pageLikeBtn[0]) {
    pageLikeBtn[0].click();
  }
}

function clickAllAvalableLikes(arrBtns) {
  arrBtns.forEach((el, i) => {
    setTimeout(() => {
      el.click();
      counter += 1;
      console.log(`${i + 1} - liked ;) of ${arrBtns.length}`);
      console.log(`${counter} - posts liked`);
      if (i === arrBtns.length - 1) {
        likeAll();
      }
    }, i * 2000);
  });
}

function likeAll() {
  if (stop) {
    return;
  }
  pageLike();
  setTimeout(() => {
    window.scrollTo(0, 10000000);
    console.log('scrolled');
    const likeBtns = [...document.querySelectorAll(likeBtnSelector)];
    if (!likeBtns.length) {
      likeAll();
    }
    clickAllAvalableLikes(likeBtns);
  }, 1000);
}

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
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

function likeRandom(interval) {
  if (stop) {
    return;
  }
  pageLike();
  setTimeout(() => {
    window.scrollTo(0, 10000000);
    console.log('scrolled');
    const likeBtns = [...document.querySelectorAll(likeBtnSelector)];
    if (!likeBtns.length) {
      likeAll();
    }
    // TODO: Now it is not actually random.
    // likeBtns - select unliked btns after every scroll
    const randomBtns = shuffle(likeBtns).slice(0, likeBtns.length / 2);
    clickAllAvalableLikes(randomBtns);
  }, 1000);
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
