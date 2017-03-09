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
$("#about").append(ImGoodAtSection);


//highlights section
$('#highLights').append(addAllHighLightsSection);


//Portfolio section
$('#portfolio').append(addAllPortfolioSection);





