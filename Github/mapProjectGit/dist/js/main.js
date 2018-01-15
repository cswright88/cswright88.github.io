function initMap(){var a={lat:30.274185,lng:-97.74054};map=new google.maps.Map(document.getElementById("map"),{zoom:13,center:a}),ko.applyBindings(new searchAndPlaces)}var map=null,currentmarkerViewed=null,myPlaces=[{label:"C",locName:"State Capitol",address:"1100 congress avenue",lat:30.274185,lng:-97.74054,wiki:"Texas_State_Capitol"},{label:"P",locName:"The Paramount",address:"713 congress avenue",lat:30.269377,lng:-97.741872,wiki:"Paramount_Theatre_(Austin,_Texas)"},{label:"A",locName:"ACL Theater",address:"224 lavaca st",lat:30.265364,lng:-97.747274,wiki:"Block_21"},{label:"R",locName:"Rainey Street",address:"77 Rainey St",lat:30.258619,lng:-97.738947,wiki:"Rainey_Street_Historic_District_(Austin,_Texas)"},{label:"F",locName:"Franklins BBQ",address:"900 E 11th St",lat:30.270119,lng:-97.731273,wiki:"Franklin_Barbecue"},{label:"UT",locName:"UT Tower",address:"110 inner campus drive",lat:30.287065,lng:-97.738459,wiki:"Main_Building_(University_of_Texas_at_Austin)"}],Places=function(a,b,c,d,e,f){var g=this;this.latitude=d,this.longitude=e,this.address=c,this.locName=b,this.label=a,this.wiki=f,this.marker=new google.maps.Marker({position:{lat:this.latitude,lng:this.longitude},map:map,title:this.locName,label:this.label}),this.hidetheoptionsinsearch=function(){this.marker.setVisible(!1)},this.showtheoptionsinsearch=function(){this.marker.setVisible(!0)};var h=this.locName+": click on the button to view the Wikipedia Article";this.infowindow=new google.maps.InfoWindow({content:h}),this.pickaWiki=function(){return g.wiki},this.closeinfoWindow=function(){g.infowindow.close(),g.marker.setIcon()},this.marker.addListener("click",function(){null!==currentmarkerViewed&&currentmarkerViewed.closeinfoWindow(),g.infowindow.open(map,g.marker),g.marker.setIcon("https://maps.google.com/mapfiles/ms/icons/blue.png"),currentmarkerViewed=g}),this.infowindow.addListener("closeclick",g.closeinfoWindow)},searchAndPlaces=function(){var a=this;a.places=ko.observableArray([]),a.search=ko.observable(""),a.wiki=ko.observable("Click a Location button to view a Wikipedia Article"),a.bgImg=ko.observable("img/austin-skyline.jpg");for(var b=0;b<myPlaces.length;b++)a.places.push(new Places(myPlaces[b].label,myPlaces[b].locName,myPlaces[b].address,myPlaces[b].lat,myPlaces[b].lng,myPlaces[b].wiki));a.wikipedia=function(){var b="https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=%wikiTitle%&callback=?",c=b.replace("%wikiTitle%",this.pickaWiki());$.ajax({type:"GET",url:c,contentType:"application/json; charset=utf-8",async:!1,dataType:"json",success:function(b,c,d){var e=b.parse.text["*"];a.wiki(e)},error:function(a,b,c){alert(a.status+" Error: the wikipedia article failed to load, please try again later")}})},this.backgroundAndInfo=function(){null!==currentmarkerViewed&&currentmarkerViewed.closeinfoWindow(),this.infowindow.open(map,this.marker),this.marker.setIcon("https://maps.google.com/mapfiles/ms/icons/blue.png");var b=this.address,c="austin, tx",d=b+" "+c,e="https://maps.googleapis.com/maps/api/streetview?size=600x400&location="+d;a.bgImg(e),currentmarkerViewed=this},a.listofPlaces=ko.computed(function(){if(""!==a.search){var c=new RegExp(a.search(),"i"),d=[];for(b=0;b<a.places().length;b++){var e=a.places()[b];c.test(e.locName)?(e.showtheoptionsinsearch(),d.push(e)):(e.hidetheoptionsinsearch(),e.closeinfoWindow())}return d}for(b=0;b<a.places().length;b++)a.places()[b].showtheoptionsinsearch();return a.places()})};