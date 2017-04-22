// builder.js



//navbar
$('#myNavbar').append(addNavBar);
$('#navDemo').append(addNavDemo);

//header img
$('#home').append(addHeadImgAndTitle);




//about section
$("#about").append(addTitle);
$("#about").append(addAboutMeP1);
var aboutRowTogether = aboutNameAndFacePic + SmHiddenParagraph;
var formattedaboutRow = aboutRow.replace('%data%', aboutRowTogether);
$("#about").append(formattedaboutRow);

var skills = {
	'skill': [
	{
		'title':'HTML5',
		'score':'100',
		'icon':'fa fa-code'
	},
	{
		'title':'CSS',
		'score':'90',
		'icon':'fa fa-eye'
	},
	{
		'title':'JavaScript',
		'score':'90',
		'icon':'fa fa-magic'
	},
	{
		'title':'Python',
		'score':'80',
		'icon':'fa fa-superpowers'
	},
	{
		'title':'PHP',
		'score':'40',
		'icon':'fa fa-external-link-square'
	},
	]
};
$("#about").append(imGoodTitle);
for (var i = 0; i < skills.skill.length; i++) {
	var formattedImGoodAtSection = ImGoodAtSection.replace('%fafa%', skills.skill[i].icon).replace('%data%', skills.skill[i].title);
	var formattedimGoodBar = imGoodBar.replace('%percent%', skills.skill[i].score).replace('%num%', Number(skills.skill[i].score));
	$("#about").append(formattedImGoodAtSection);
	$("#about").append(formattedimGoodBar);
}

//highlights section
$('#highLights').append(addAllHighLightsSection);


//Portfolio section

//portfolio img's
//there must be 8 of them total 4 each row
var myWorks_row1 = {
	'myWork':[
		{
			'img':'images/arcade.jpg',
			'alt':'Arcade Game',
		},
		{
			'img':'images/LWArt.jpg',
			'alt':'Lauren Wright Art'
		},
		{
			'img':'images/resume.jpg',
			'alt':'Resume Website'
		},
		{
			'img':'images/web_optimization.jpg',
			'alt':'Web Optimization Project'
		},
	]
}

var myWorks_row2 = {
	'myWork':[
		{
			'img':'images/chris3.jpg',
			'alt':'Mary Franco CPA Website'
		},
		{
			'img':'images/chris3.jpg',
			'alt':'chris'
		},
		{
			'img':'images/chris3.jpg',
			'alt':'chris'
		},
		{
			'img':'images/chris3.jpg',
			'alt':'chris'
		},
	]
}
$('#portfolio').append(portfolioTitle);
if (myWorks_row1.myWork.length > 0) {
	$('#portfolio').append(startrow1Portfolio);
	for (var i = 0; i < myWorks_row1.myWork.length; i++) {
		var formattedportfolioImg = portfolioImg.replace('%data%', myWorks_row1.myWork[i].img).replace('%alt%', myWorks_row1.myWork[i].alt);
		$('#row1portfolio').append(formattedportfolioImg);
	};
};
if (myWorks_row2.myWork.length > 0) {
	$('#portfolio').append(startrow2Portfolio);
	for (var i = 0; i < myWorks_row2.myWork.length; i++) {
		var formattedportfolioImg = portfolioImg.replace('%data%', myWorks_row2.myWork[i].img);
		$('#row1portfolio').append(formattedportfolioImg);
	};
};





