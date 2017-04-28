










//Header image yes
var imageList = {
	'headerImage':'images/hello-world2.png',
	'headerAlt':'Hello World',
};
function addHeaderImage1(){
	var formattedaddHeaderImage = addHeaderImage.replace('%data%',imageList.headerImage).replace('%alt%',imageList.headerAlt);
	$('#header-background-photo').append(formattedaddHeaderImage);
};
addHeaderImage1();


























//Bio list
var bio = {
	'fullName':'Christopher Wright',
	'welcome':"I'm Chris",
}
function welcomeMessage(){
	formattedaddWelcomeMessage = addWelcomeMessage.replace('%data%', bio.welcome);
	$('#header').append(formattedaddWelcomeMessage);
};	
welcomeMessage();






function NAVLIST() {
	var navList = {
		'workExperience':'Work Experience',
		'projects':'Projects',
		'about':'About',
		'whyMe':'Why Me',
		'process':'How I Work',
		'contact':'Contact',
	};
	for(i in navList){
		var formattedaddNavElement = addNavElement.replace('%data%', i).replace('%name%', navList[i]);
		$('.nav').append(formattedaddNavElement);
	};
	$(document).on('click', '.navsclass', function(event){
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});
	$('.navsclass').hover(
		function () {
		$(this).css({"background-color":"lightgrey"});
		}, 

		function () {
		$(this).css({"background-color":"initial"});
		}	
	);
};
NAVLIST();






//work and projects
var work = {
	"jobs":[
		{
			"employer":"Luxe Valet",
			"title":"Logistics Coordinator",
			"location":"Austin",
			"date":"August 2016 - current",
			"description":"Managed between 20-30 valets in over 6 different cities nationwide"
		},
		{
			"employer":"Fidelity Investments",
			"title":"Defined Contributions Representative",
			"location":"Westlake",
			"date":"August 2011 - December 2012",
			"description":"processed loans withdrawals and trades in the Fidelity 401k product"
		},
		{
			"employer":"The Wandering Palette",
			"title":"Website Developer",
			"location":"Austin",
			"date":"December 2015 - December 2016",
			"description":"Designed and maintained the website for the Wandering Palette"
		},
	]
};
var projects = {
	"Hertz":{
		"title":"Hertz On-Demand App",
		"dates":"December 2016 - Current",
		"description":"QA tester for App and Birdseye software to launch the Hertz On-Demand App"
	},
	"ManualCustomerCharge":{
		"title":"Accounts recievable policy",
		"dates":"February 2017 - March 2017",
		"description":"Created a time saving manual proceedure to charge customers in for spcialized services quickly to increase the productivity of the Logistics coordinator role",
	},
	"LuxeValetWebsite":{
		"title":"Luxe Website",
		"dates":"March 2017 - April 2017",
		"description":"Updated the Luxe Valet website with modern information using HTML, CSS, and JavaScript designed to improve market perception and the Customer delight Team workflow",
	},
};
function displayWork(){
	for(job in work.jobs){
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle + '<br>';
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
		$('.work-entry:last').append(formattedDate);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);
	};
};
displayWork();
function displayProjects(){
	for(project in projects){
		$('#projects').append(HTMLprojectStart);
		 formattedHTMLprojectTitle = HTMLprojectTitle.replace('%data%', projects[project].title);
		 formattedHTMLprojectDates = HTMLprojectDates.replace('%data%', projects[project].dates);
		 formattedHTMLprojectDescription = HTMLprojectDescription.replace('%data%', projects[project].description);
		 allTogether2 = formattedHTMLprojectTitle+'<br>'+formattedHTMLprojectDates+formattedHTMLprojectDescription;
		$('.project-entry:last').append(allTogether2);
	};
};
displayProjects();






//elements in the bootstrap columns (3) 4 columns header and paragraph
var small3colList = {
	'title1':'I Fix Things',
	'paragraph1':'Ever since I was a child I enjoyed solving puzzles.  My perspective on the world was and still is through the lens of puzzles.  I made my first website in college and I knew right then that I was hooked.  I was obsessed with putting elements together in new and efficient ways.  I loved each new theory and tactic that came out every year.',
	'title2':'Column 2',
	'paragraph2':'I couldn’t stop learning and reading about new techniques and I wanted to know how it all worked from the code to the final product.  In the beginning I used my skills to start businesses for myself and friends and family. I didn’t seek education at college because this was the one thing that I could find everything I wanted to learn online.  I am now completing an online certification through Udacity to gain some credentials beyond my projects.',
	'title3':'Column 3',
	'paragraph3':'As I breeze through the course material I become more and more excited about finding myself in my future full time career as a front end web developer. As I grow and develop I learn more and more about myself, I’ve learned about my weaknesses and strengths and I know how to apply my skills or find a solution when I don’t know the answer.  AKA ask the Oracle (google).  Reach out to me if you have any questions, follow me on social media.  ',
};
function small3col(div, list){
	var formattedbootstrapAddTitle1 = bootstrapAddTitle.replace('%data%', list.title1);
	var formattedbootstrapAddParagraph1 = bootstrapAddParagraph.replace('%data%', list.paragraph1);
	var formattedbootstrapAddTitle2 = bootstrapAddTitle.replace('%data%', list.title2);
	var formattedbootstrapAddParagraph2 = bootstrapAddParagraph.replace('%data%', list.paragraph2);
	var formattedbootstrapAddTitle3 = bootstrapAddTitle.replace('%data%', list.title3);
	var formattedbootstrapAddParagraph3 = bootstrapAddParagraph.replace('%data%', list.paragraph3);

	var formattedbootstrapSmall4Start1 = bootstrapSmall3Start.replace('%data%', formattedbootstrapAddTitle1+formattedbootstrapAddParagraph1);
	var formattedbootstrapSmall4Start2 = bootstrapSmall3Start.replace('%data%', formattedbootstrapAddParagraph2);
	var formattedbootstrapSmall4Start3 = bootstrapSmall3Start.replace('%data%', formattedbootstrapAddParagraph3);
	var allTogether = formattedbootstrapSmall4Start1+formattedbootstrapSmall4Start2+formattedbootstrapSmall4Start3;

	var formattedbootstrapRowStart = bootstrapRowStart.replace('%data%',allTogether);
	var formattedbootstrapContainerStart = bootstrapContainerStart.replace('%data%',formattedbootstrapRowStart);

	$(div).append(formattedbootstrapContainerStart);
};
small3col('#whyMe', small3colList);
$('#whyMe p').css('font-size', '60%');
$('#contact').css('font-size', '90%');






var processList = [
"-Outline",
"-Visualize",
"-Solve problems",
"-Write Tests",
"-Caffeine",
"-Code",
"-Explain code to my dog",
"-Code more",
"-Finish",
"-Launch "
];
for(i in processList){
	var formattedaddProcessElement = addProcessElement.replace('%data%', processList[i]);
	var formattedaddProcessUL = addProcessUL.replace('%data%',formattedaddProcessElement);
	$('#process').append(formattedaddProcessUL);
};





//about me skills - there are two bc Im stupid and cant figure out one
//just try to make them even

var skillsL1 = {
	'HTML5':5,
	'CSS3':5,
	'JavaScript':5,
	'PHP':3,
	'Photoshop':2,
	'MySQL':1,
	'Sleep':0,
	'JSON':4,
};
var skillsL2 = {
	'SEO':3,
	'WordPress':3,
	'Knockout':3,
	'OOP':4,
	'JAVA':4,
	'Bootstrap':4,
	'JQuery':4,
	'Command line':4,
};
function displaySkills(){
	var starBlack = 'images/starBlack.png';
	var starWhite = 'images/starWhite.png';
	var formattedaddOneWhiteStar = addOneStar.replace('%data%', starWhite);
	var formattedaddOneBlackStar = addOneStar.replace('%data%', starBlack);
	function stars(num){
		
		if(num === 0){
			return formattedaddOneWhiteStar+formattedaddOneWhiteStar+formattedaddOneWhiteStar+formattedaddOneWhiteStar+formattedaddOneWhiteStar;
		};
		if(num === 1){
			return formattedaddOneBlackStar+formattedaddOneWhiteStar+formattedaddOneWhiteStar+formattedaddOneWhiteStar+formattedaddOneWhiteStar;
		};
		if(num === 2){
			return formattedaddOneBlackStar+formattedaddOneBlackStar+formattedaddOneWhiteStar+formattedaddOneWhiteStar+formattedaddOneWhiteStar;
		};
		if(num === 3){
			return formattedaddOneBlackStar+formattedaddOneBlackStar+formattedaddOneBlackStar+formattedaddOneWhiteStar+formattedaddOneWhiteStar;
		};
		if(num === 4){
			return formattedaddOneBlackStar+formattedaddOneBlackStar+formattedaddOneBlackStar+formattedaddOneBlackStar+formattedaddOneWhiteStar;
		};
		if(num === 5){
			return formattedaddOneBlackStar+formattedaddOneBlackStar+formattedaddOneBlackStar+formattedaddOneBlackStar+formattedaddOneBlackStar;
		};
	};
	$('#about').append(startSkills);
	$('#skills').prepend('<h3>Skills</h3>');
	function list1(){
		for(i in skillsL1){
			var FstartListSkills1 = startListSkills.replace('%title%', i).replace('%stars%', (stars(skillsL1[i])));
			$('#listOne').append(FstartListSkills1);
		};
	};
	function list2(){
		for(c in skillsL2){
			var FstartListSkills2 = startListSkills.replace('%title%', c).replace('%stars%', (stars(skillsL2[c])));
			$('#listTwo').append(FstartListSkills2);
		};
	};

	list1();
	list2();
};
displaySkills();

$(".list-entry").hover(function(){
    $(this).css("background-color", "lightgrey");
    }, function(){
    $(this).css("background-color", "initial");
});
$(".list-entry").hover(function(){
	$(this,".star-group img").css("margin-right", "10px");
}, function(){
	$(this,".lstar-group img").css("margin-right", "initial");
});











