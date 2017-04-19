// webWorker.js
//TODO add this file to the dist as well as src

var w = window.innerWidth;
var h = window.innerHeight;

function findHeight_Width() {
	postMessage(w);
	postMessage(h);
}

findHeight_Width();