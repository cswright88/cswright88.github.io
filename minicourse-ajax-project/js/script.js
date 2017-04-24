
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var formStreet = $('#street').val();
    var cityStr = $('#city').val();
    var address = formStreet+' '+cityStr;
    $greeting.text('So, you want to live at '+ address+'?');
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location='+address+'';
    $body.append('<img class="bgimg" src="'+streetviewUrl+'">');

    // YOUR CODE GOES HERE!
    //NY times articles
    var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&sort=newest&api-key=1e80463dfad44f34a70595b132c486ba';
    
    $.getJSON(nytimesUrl, function(data) {
        $nytHeaderElem.text('New York Times Articles About ' + cityStr);
        articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            var nDate = new Date(article.pub_date);
            var mm = nDate.getMonth();
            var yy = nDate.getFullYear();
            var mmyy = '('+(mm+1)+' / '+yy+')'; 
            $nytElem.append('<li class="article">' +
                '<a href="'+article.web_url+'">'+article.headline.main+
                '</a>'+
                '<p>'+article.snippet+' '+ mmyy +'</p>'+
                '</li>');
        };
    }).error(function(e){
        $nytHeaderElem.text('New York Times Articles Could Not Be Loaded');
    });

    //wikipedia articles
    var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+cityStr + '&format=json&callback=wikiCallback';
    //to handle errors for .ajax requests you can use that .error chair or this timout request but clear the timout if the success function is run so that it doesnt run even if the articles do load
    

    $.ajax({
        url:wikiUrl,
        dataType: "jsonp",
        //jsonp: "callback",
        success: function( response ) {
            var articleList = response[1];

            for (var i = 0; i < articleList.length; i++) {
                articleStr = articleList[i];
                var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                $wikiElem.append('<li><a href="'+url+'"</a>'+articleStr+'</a></li>');
            };
            
        }
    }).error(function(e){
        $wikiElem.text('Wiki Articles Could Not Be Loaded');
    });

    return false;
};

$('#form-container').submit(loadData);
