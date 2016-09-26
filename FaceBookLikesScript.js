var likeBtns = [...document.querySelectorAll('.UFILikeLink:not(.UFILinkBright)')];
likeBtns.forEach(function(el,i) {setTimeout(function () {el.click();console.log( (i + 1) + ' - liked ;) of ' + likeBtns.length)}, i*2000) })
