//must have this so that the map variable can be used in the initMap
var map = null;
//so that no marker is initially viewed or clicked on- used in the click functions and ko click functions
var currentmarkerViewed = null;
//all my places
var myPlaces = [{
        label: "C",
        locName: 'State Capitol',
        address: '1100 congress avenue',
        lat: 30.274185,
        lng: -97.740540,
        wiki: "Texas_State_Capitol"
    }, //state capitol
    {
        label: "P",
        locName: 'The Paramount',
        address: '713 congress avenue',
        lat: 30.269377,
        lng: -97.741872,
        wiki: "Paramount_Theatre_(Austin,_Texas)"
    }, //paramount
    {
        label: "A",
        locName: 'ACL Theater',
        address: '224 lavaca st',
        lat: 30.265364,
        lng: -97.747274,
        wiki: "Block_21"
    }, //acl theater
    {
        label: "R",
        locName: 'Rainey Street',
        address: '77 Rainey St',
        lat: 30.258619,
        lng: -97.738947,
        wiki: "Rainey_Street_Historic_District_(Austin,_Texas)"
    }, //rainey st
    {
        label: "F",
        locName: 'Franklins BBQ',
        address: '900 E 11th St',
        lat: 30.270119,
        lng: -97.731273,
        wiki: "Franklin_Barbecue"
    }, //franklins bbq
    {
        label: "UT",
        locName: 'UT Tower',
        address: '110 inner campus drive',
        lat: 30.287065,
        lng: -97.738459,
        wiki: "Main_Building_(University_of_Texas_at_Austin)"
    } //franklins bbq
];

//========CLASS Places======
var Places = function(label, locName, address, latitude, longitude, wiki) {
    var self = this;
    this.latitude = latitude;
    this.longitude = longitude;
    this.address = address;
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

    });
    this.hidetheoptionsinsearch = function() {

        this.marker.setVisible(false);
    };
    this.showtheoptionsinsearch = function() {
        this.marker.setVisible(true);
    };
    var contentString = this.locName + ': click on the button to view the Wikipedia Article';
    this.infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    //returns the wiki element 
    this.pickaWiki = function() {
        return self.wiki;
    };
    //closes the infowindow used in other parts of the function
    this.closeinfoWindow = function() {

        self.infowindow.close();
        self.marker.setIcon();
    };
    //used to open the info window and change the color of the marker
    //I cannot use Knockout to update this marker by adding a click element 
    //therefore I did not load the wiki article when clicked here because the 
    //wiki article function is in the knockout view function called searchAndPlaces
    this.marker.addListener('click', function() {
        if (currentmarkerViewed !== null) {
            currentmarkerViewed.closeinfoWindow();
        }
        self.infowindow.open(map, self.marker);
        self.marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');

        currentmarkerViewed = self;
    });
    // used to close a info window
    this.infowindow.addListener('closeclick', self.closeinfoWindow);


};

var searchAndPlaces = function() {
    var self = this;
    //array to store the new instanciation of the places
    self.places = ko.observableArray([]);
    //search used in the input for knockout
    self.search = ko.observable("");
    //the initial text in the wiki article field
    self.wiki = ko.observable('Click a Location button to view a Wikipedia Article');
    self.bgImg = ko.observable("img/austin-skyline.jpg");
    // this.wikipedia = ko.observable('hello');


    // Add the locations to the places array
    for (var i = 0; i < myPlaces.length; i++) {
        self.places.push(new Places(myPlaces[i].label, myPlaces[i].locName, myPlaces[i].address, myPlaces[i].lat, myPlaces[i].lng, myPlaces[i].wiki));
    }
    //third party api with error handeling after a period of time.  
    self.wikipedia = function() {
        var wikiURL = "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=%wikiTitle%&callback=?";
        var wikiURLFormatted = wikiURL.replace('%wikiTitle%', this.pickaWiki());
        $.ajax({
            type: "GET",
            url: wikiURLFormatted,
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",

            success: function(data, textStatus, jqXHR) {
                var markup = data.parse.text["*"];
                //change the Ko binding to the markup variable 
                self.wiki(markup);


            },
            //this will kick off but the timeout for when it kicks off is not always the same- could take a while fyi.
            error: function(xhr, ajaxOptions, thrownError) {
                alert(xhr.status + ' Error: the wikipedia article failed to load, please try again later');
            }
        });
    };
    //if the backgroundAndInfo is hovered then the background changes and the info window pops with the marker changing
    this.backgroundAndInfo = function() {
        if (currentmarkerViewed !== null) {
            currentmarkerViewed.closeinfoWindow();
        }
        this.infowindow.open(map, this.marker);
        this.marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue.png');
        //wiki stuff
        var formStreet = this.address;
        var cityStr = "austin, tx";
        var address = formStreet + ' ' + cityStr;
        var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
        self.bgImg(streetviewUrl);
        currentmarkerViewed = this;

    };
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
                    selfPlaces.showtheoptionsinsearch();
                    listifConnected.push(selfPlaces);
                } else {
                    selfPlaces.hidetheoptionsinsearch();
                    selfPlaces.closeinfoWindow();
                }
            }
            //return the list of matching elements
            return listifConnected;
        } else {
            for (i = 0; i < self.places().length; i++) {
                self.places()[i].showtheoptionsinsearch();
            }
            return self.places();
        }
    });
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