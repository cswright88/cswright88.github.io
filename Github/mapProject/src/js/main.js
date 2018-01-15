//must have this so that the map variable can be used in the initMap
var map = null;
//so that no marker is initially viewed or clicked on- used in the click functions and ko click functions
var currentMarkerViewed = null;
//all my places
var myPlaces = [{
        label: "C",
        locName: 'State Capitol',
        lat: 30.274185,
        lng: -97.740540,
        wiki: "Texas_State_Capitol"
    }, //state capitol
    {
        label: "P",
        locName: 'The Paramount',
        lat: 30.269377,
        lng: -97.741872,
        wiki: "Paramount_Theatre_(Austin,_Texas)"
    }, //paramount
    {
        label: "A",
        locName: 'ACL Theater',
        lat: 30.265364,
        lng: -97.747274,
        wiki: "Block_21"
    }, //acl theater
    {
        label: "R",
        locName: 'Rainey Street',
        lat: 30.258619,
        lng: -97.738947,
        wiki: "Rainey_Street_Historic_District_(Austin,_Texas)"
    }, //rainey st
    {
        label: "F",
        locName: 'Franklins BBQ',
        lat: 30.270119,
        lng: -97.731273,
        wiki: "Franklin_Barbecue"
    }, //franklins bbq
    {
        label: "UT",
        locName: 'UT Tower',
        lat: 30.287065,
        lng: -97.738459,
        wiki: "Main_Building_(University_of_Texas_at_Austin)"
    } //franklins bbq
];

//========CLASS Places======
var Places = function(label, locName, latitude, longitude, wiki) {
    var self = this;
    this.latitude = latitude;
    this.longitude = longitude;
    this.locName = locName;
    this.label = label;
    this.wiki = wiki;
    //shows the marker for this Place
    this.marker = new google.maps.Marker({
        position: {
            lat: this.latitude,
            lng: this.longitude
        },
        map: map,
        title: this.locName,
        label: this.label,
        animation: google.maps.Animation.DROP
    });
    this.hideOptionsInSearch = function() {
        this.marker.setVisible(false);
    };
    this.showOptionsInSearch = function() {
        this.marker.setVisible(true);
    };
    this.infowindow = new google.maps.InfoWindow({
        content: this.locName
    });
    //closes the infowindow used in other parts of the function
    this.closeInfoWindow = function() {
        self.infowindow.close();
        self.marker.setIcon();
    };
    this.wikipedia = function(obj, init) {
        var wikiURL = "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=%wikiTitle%&callback=?";
        var wikiURLFormatted = wikiURL.replace('%wikiTitle%', obj);
        $.ajax({
            type: "GET",
            url: wikiURLFormatted,
            contentType: "application/json; charset=utf-8",
            async: true,
            dataType: "json",
            success: function(data, textStatus, jqXHR) {
                var markup = data.parse.text["*"];
                //I deleted the images, they are not required for me to pass the project.  
                var newMarkup = markup.replace(new RegExp('href="/wiki', 'g'), 'href="https://en.wikipedia.org/wiki').replace(/<img[^>]*>/g,"");
                init(newMarkup);
            },
            //this will kick off but the timeout for when it kicks off is not always the same- could take a while fyi.
            error: function(xhr, ajaxOptions, thrownError) {
                alert(xhr.status + ' Error: the wikipedia article failed to load, please try again later');
            }
        });
    };
    // used to close a info window
    this.infowindow.addListener('closeclick', self.closeInfoWindow);
};

var searchAndPlaces = function() {
    var self = this;
    //array to store the new instanciation of the places
    self.places = ko.observableArray([]);
    //search used in the input for knockout
    self.search = ko.observable("");
    //the initial text in the wiki article field
    self.wiki1 = ko.observable('Click a Location button to view a Wikipedia Article');
    self.bgImg = ko.observable("img/austin-skyline.jpg");
    // Add the locations to the places array
    for (var i = 0; i < myPlaces.length; i++) {
        self.places.push(new Places(myPlaces[i].label, myPlaces[i].locName, myPlaces[i].lat, myPlaces[i].lng, myPlaces[i].wiki));
    }
    self.wikipedia1 = function() {
        this.wikipedia(this.wiki, self.wiki1);
        if (currentMarkerViewed !== null) {
            currentMarkerViewed.closeInfoWindow();
        }
        this.infowindow.open(map, this.marker);
        this.marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
        //wiki stuff

        currentMarkerViewed = this;
    }
    self.listofPlaces = ko.computed(function() {
        if (self.search !== "") {
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
            //used this and w3 schools for documentation on how to do a regex search to find something for input
            var regEx = new RegExp(self.search(), 'i');

            //used an array to pull data out of the for loop below
            var listifConnected = [];

            for (i = 0; i < self.places().length; i++) {
                //use a var to represent self.places() so that I can use self aka this easier in the if stmts
                var selfPlaces = self.places()[i];
                //use test to see if its the same as the loc name of the obj
                if (regEx.test(selfPlaces.locName)) {
                    selfPlaces.showOptionsInSearch();
                    listifConnected.push(selfPlaces);
                } else {
                    selfPlaces.hideOptionsInSearch();
                    selfPlaces.closeInfoWindow();
                }
            }
            //return the list of matching elements
            return listifConnected;
        } else {
            for (i = 0; i < self.places().length; i++) {
                self.places()[i].showOptionsInSearch();
            }
            return self.places();
        }
    });
    var markerClickArray = [];
    for (var i = 0; i < self.places().length; i++) {
        function markerclick() {
            var thiswiki = self.places()[i];
            var wikimarker = self.places()[i].marker;
            wikimarker.addListener('click', function() {
                thiswiki.wikipedia(thiswiki.wiki, self.wiki1);
                if (currentMarkerViewed !== null) {
                    currentMarkerViewed.closeInfoWindow();
                }
                thiswiki.infowindow.open(map, wikimarker);
                wikimarker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
                currentMarkerViewed = thiswiki;
            });
        }
        markerClickArray.push(markerclick());
    };
};

function initMap() {
    //create the map with the center location of austin tx
    var austintx = {
        lat: 30.274185,
        lng: -97.740540
    };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: austintx
    });
    //apply bindings for the searchAndPlaces function
    ko.applyBindings(new searchAndPlaces());
}

function errorFunction() {
    alert('there was an error in loading');
}