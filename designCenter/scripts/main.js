// main.js
console.log('main.js');



var imageHTML = '<div id="img"><img src="%data%"></div>';
for (var numb = 368; numb<=413; numb++) {
	var string1 = "img/IMG_0"+String(numb)+".JPG"; 
	var formattedimageHTML = imageHTML.replace('%data%', string1);
	$('#design_images').append(formattedimageHTML);
};

