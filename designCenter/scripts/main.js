// main.js
console.log('main.js');


var list = [];
var imageHTML = '<div id="img"><img src="%data%"></div>';
for (var numb = 368; numb<=413; numb++) {
	var string1 = "img/IMG_0"+numb.toString()+".JPG"; 
	var formattedimageHTML = imageHTML.replace('%data%', string1);
	console.log(formattedimageHTML);
	list.push(formattedimageHTML);
};
console.log(list);

document.getElementById('design_images').document.appendChild(list[i]);

