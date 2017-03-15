var bio = {
    'name': 'Christopher Wright',
    'role': 'Web Developer',
    'age': 28,
    'skills': ['HTML', 'CSS3', 'JavaScript', 'Python'],
    'contacts': {
        'mobil': '972-793-3915',
        'email': 'cswright88@gmail.com',
        'github': 'cswright88.github.io',
        'location': 'Austin'
    },
    'welcomeMessage': 'Welcome to my Resume',
    'bioPic': "images/chris1.jpg",
    display: function() {
        var formattedHeaderName = HTMLheaderName.replace('%data%', bio.name);
        var formattedHeaderRole = HTMLheaderRole.replace('%data%', bio.role);
        $('#header').prepend(formattedHeaderRole);
        $('#header').prepend(formattedHeaderName);
        //Contact information
        var formattedHTMLmobile = HTMLmobile.replace('%data%', bio.contacts.mobil);
        $('#topContacts').append(formattedHTMLmobile);
        $('#footerContacts').append(formattedHTMLmobile);
        var formattedHTMLemail = HTMLemail.replace('%data%', bio.contacts.email);
        $('#topContacts').append(formattedHTMLemail);
        $('#footerContacts').append(formattedHTMLemail);
        var formattedHTMLlocation = HTMLlocation.replace('%data%', bio.contacts.location);
        $('#topContacts').append(formattedHTMLlocation);
        $('#footerContacts').append(formattedHTMLlocation);
        var formattedHTMLgithub = HTMLgithub.replace('%data%', bio.contacts.github);
        $('#topContacts').append(formattedHTMLgithub);
        $('#footerContacts').append(formattedHTMLgithub);
        //welcom and bio pic
        var formattedbiopic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('#header').append(formattedbiopic);
        $('#header').append(formattedwelcomeMsg);
        //skills
        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            for (c = 0; c < bio.skills.length; c++) {
                var formattedSkill = HTMLskills.replace('%data%', bio.skills[c]);
                $("#skills").append(formattedSkill);
            }
        }

    }
};
var education = {
    "schools": [{
        "name": "University of Arkansas",
        "location": "Fayetteville, AR",
        "degree": "BA",
        "majors": ["Organizational Management"],
        "dates": "August 2007 - June 2011"
    }, ],
    "onlineCourses": [{
        "title": "Front End Web Developer",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/"
    }],
    display: function() {
        for (school = 0; school < education.schools.length; school++) {
            $('#education').append(HTMLschoolStart);
            var formattedHTMLschoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
            var formattedHTMLschoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
            var schoolAndDegree = formattedHTMLschoolName + formattedHTMLschoolDegree;
            var formattedHTMLschoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
            var formattedHTMLschoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
            $('.education-entry:last').append(schoolAndDegree);
            $('.education-entry:last').append(formattedHTMLschoolLocation);
            $('.education-entry:last').append(formattedHTMLschoolDates);
            for (major = 0; major < education.schools[school].majors.length; major++) {
                var formattedHTMLschoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]);
                $('.education-entry:last').append(formattedHTMLschoolMajor);
            }
        }
        $('.education-entry:last').append(HTMLonlineClasses);
        for (course = 0; course < education.onlineCourses.length; course++) {
            var formattedHTMLonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
            var formattedHTMLonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
            var titleAndSchool = formattedHTMLonlineTitle + formattedHTMLonlineSchool;
            var formattedHTMLonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
            var formattedHTMLonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
            $('.education-entry:last').append(titleAndSchool);
            $('.education-entry:last').append(formattedHTMLonlineDates);
            $('.education-entry:last').append(formattedHTMLonlineURL);
        }
    }
};
var work = {
    "jobs": [{
            "employer": "Fidelity Investments",
            "title": "Defined Contributions Representative",
            "location": "1 Destiny Way, Westlake TX, 76262",
            "date": "August 2011 - December 2012",
            "description": "processed loans withdrawals and trades in the Fidelity 401k product"
        },
        {
            "employer": "Luxe Valet",
            "title": "Logistics Coordinator",
            "location": "701 Brazos St, Austin, TX 78701",
            "date": "August 2016 - current",
            "description": "Managed between 20-30 valets in over 6 different cities nationwide"
        }
    ],
    display: function() {
        for (job = 0; job < work.jobs.length; job++) {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
            $('.work-entry:last').append(formattedDate);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $('.work-entry:last').append(formattedDescription);
        }
    }
};
var projects = {
    "proj": [{
            "title": "Hertz On-Demand App",
            "dates": "December 2016 - Current",
            "description": "QA tester for App and Birdseye software to launch the Hertz On-Demand App",
            "images": [
                "images/hertz.jpg",
                "images/cpa.jpg"
            ]
        },
        {
            "title": "The Wandering Palette",
            "dates": "December 2015 - December 2016",
            "description": "Designed and maintained the website for the Wandering Palette",
            "images": [
                "images/hertz.jpg",
                "images/cpa.jpg"
            ]
        }
    ],
    display: function() {
        for (i = 0; i < projects.proj.length; i++) {
            $('#projects').append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.proj[i].title);
            $('.project-entry:last').append(formattedProjectTitle);
            var formattedProjectDate = HTMLprojectDates.replace('%data%', projects.proj[i].dates);
            $('.project-entry:last').append(formattedProjectDate);
            var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.proj[i].description);
            $('.project-entry:last').append(formattedProjectDescription);

            if (projects.proj[i].images.length > 0) {
                for (image = 0; image < projects.proj[i].images.length; image++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.proj[i].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

bio.display();

work.display();

projects.display();

education.display();


// $("#main").append(internationalizeButton);
//to display map
$("#mapDiv").append(googleMap);

//display clicks
function displayClicks() {
    $(document).click(function(loc) {
        var x = loc.pageX;
        var y = loc.pageY;
        logClicks(x, y);
    });
}
displayClicks();
//protect you website
function protectWebsite() {
    var charEscape = function(_html) {
        var newHTML = _html;

        newHTML = _html.replace(/</g, "&lt;");
        newHTML = newHTML.replace(/>/g, "&gt;");

        return newHTML;
    };
}
protectWebsite();