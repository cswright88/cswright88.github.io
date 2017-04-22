// helper.js


//Header section
//navbar
var addNavBar = `
	<a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-opennav w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
	<i class="fa fa-bars"></i>
	</a>
	<a href="#home" class="w3-bar-item w3-button">HOME</a>
	<a href="#about" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> ABOUT</a>
	<a href="#portfolio" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> PORTFOLIO</a>
	<a href="#contact" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</a>
	<a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
	<i class="fa fa-search"></i>
	</a>
`;
var addNavDemo = `
	<a href="#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
	<a href="#portfolio" class="w3-bar-item w3-button" onclick="toggleFunction()">PORTFOLIO</a>
	<a href="#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
	<a href="#" class="w3-bar-item w3-button">SEARCH</a>
`;
//end nav bar
var addHeadImgAndTitle = `
	<div class="w3-display-middle" style="white-space:nowrap;">
		<span class="w3-center w3-padding-xlarge w3-black w3-xlarge w3-wide w3-animate-opacity">
			THE 
		<span class="w3-hide-small">
			INFINATE
		</span>
			LEIBEAR
		</span>
	</div>
`;
//end header section






//#about section
var addTitle ='<h3 class="w3-center">ABOUT ME</h3>'
var addAboutMeP1 = `
	<p class="w3-center"><em>I Fix Stuff</em></p>
	<p>Ever since I was a child I enjoyed solving puzzles. 
	My perspective on the world was and still is through the lens of puzzles. 
	I made my first website in college and I knew right then that I was hooked. 
	was obsessed with putting elements together in new and efficient ways. 
	I loved each new theory and tactic that came out every year.
	I couldn’t stop learning and reading about new techniques and I wanted to 
	now how it all worked from the code to the final product. 
	In the beginning I used my skills to start businesses for myself and friends 
	and family. I didn’t seek education at college because this was the one 
	thing that I could find everything I wanted to learn online. 
	I am now completing an online certification through Udacity to gain some 
	credentials beyond my projects.As I breeze through the course material I 
	become more and more excited about finding myself in my future full time 
	career as a front end web developer. As I grow and develop I learn more 
	and more about myself, I’ve learned about my weaknesses and strengths 
	and I know how to apply my skills or find a solution when I don’t know 
	the answer. AKA ask the Oracle (google). Reach out to me if you have any 
	questions, follow me on social media.</p>
`;
var aboutRow = '<div class="w3-row">%data%</div>';
var aboutNameAndFacePic = `
	<div class="w3-col m6 w3-center w3-padding-large">
	<p><b><i class="fa fa-user w3-margin-right">
	</i>My Name</b></p>
	<br>
	<img src="images/chris1.jpg" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333">
	</div>
`;
var SmHiddenParagraph = `
	<div class="w3-col m6 w3-hide-small w3-padding-large">
	<p>Ever since I was a child I enjoyed solving puzzles. 
	My perspective on the world was and still is through the lens of puzzles. 
	I made my first website in college and I knew right then that I was hooked. 
	was obsessed with putting elements together in new and efficient ways. 
	I loved each new theory and tactic that came out every year.
	I couldn’t stop learning and reading about new techniques and I wanted to 
	now how it all worked from the code to the final product. 
	In the beginning I used my skills to start businesses for myself and friends 
	and family. I didn’t seek education at college because this was the one 
	thing that I could find everything I wanted to learn online. 
	I am now completing an online certification through Udacity to gain some 
	credentials beyond my projects.As I breeze through the course material I 
	become more and more excited about finding myself in my future full time 
	career as a front end web developer. As I grow and develop I learn more 
	and more about myself, I’ve learned about my weaknesses and strengths 
	and I know how to apply my skills or find a solution when I don’t know 
	the answer. AKA ask the Oracle (google). Reach out to me if you have any 
	questions, follow me on social media.</p>
`;
var imGoodTitle = '<p class="w3-large w3-center w3-padding-16">Im really good at:</p>';
var ImGoodAtSection = '<p class="w3-wide"><i class="%fafa%"></i>%data%</p>';
var imGoodBar = '<div class="w3-light-grey"><div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:%num%%">%percent%%</div></div>';

//highlights section
var addAllHighLightsSection = `
	<div class="w3-row w3-center w3-dark-grey w3-padding-16">
		<div class="w3-quarter w3-section">
			<span class="w3-xlarge">2</span><br>
			Partners
		</div>
		<div class="w3-quarter w3-section">
			<span class="w3-xlarge">30+</span><br>
			Projects Done
		</div>
		<div class="w3-quarter w3-section">
			<span class="w3-xlarge">15+</span><br>
			Happy Clients
		</div>
		<div class="w3-quarter w3-section">
			<span class="w3-xlarge">∞</span><br>
			Meetings
		</div>
	</div>
`;


//Portfolio section
var portfolioTitle = '<h3 class="w3-center">MY WORK</h3><p class="w3-center"><em>Here are some of my latest lorem work ipsum tipsum.<br> Click on the images to make them bigger</em></p><br>';
var startrow1Portfolio = '<div id="row1portfolio" class="w3-row-padding w3-center"></div>';
var startrow2Portfolio = '<div id="row2portfolio" class="w3-row-padding w3-center"></div>';
var portfolioImg = '<div class="w3-col m3"><img src="%data%" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="%alt%"></div></div>';















