var genTwitter = function (topicsList) {
    topicsList = topicsList.splice(0, 2);
    var text = topicsList.join(" OR ");
    //console.log("OK0",topicsList);
    var data = JSON.stringify(false);
    //var text = "India OR Culture OR Asia OR Politics OR South Asia";
    text = text.replace("-", " OR ");
    //console.log("text",text);
    //text = encodeURI(text);
    //console.log(text);
    var g_TwitterConsumerKey = "iXtu2thYWgBW9Bl5YdhosiMm4";
    var g_TwitterConsumerSecret = "pc9FAhZUwPGSpCm8p8enpuJhxgLtciWndnluCDKRHP7Vs4AnH9";
    var g_TwitterRequestToken = "https://api.twitter.com/oauth/request_token";
    var g_TwitterAuthUrl = "https://api.twitter.com/oauth/authenticate?oauth_token=";
    var g_TweitterAccessUrl = "https://api.twitter.com/oauth/access_token";
    var g_TwitterOAuth2Token = "https://api.twitter.com/oauth2/token";
    var authorizationHeaderParams = g_TwitterConsumerKey + ":" + g_TwitterConsumerSecret;

    var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) { n = e.charCodeAt(f++); r = e.charCodeAt(f++); i = e.charCodeAt(f++); s = n >> 2; o = (n & 3) << 4 | r >> 4; u = (r & 15) << 2 | i >> 6; a = i & 63; if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 } t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a) } return t }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); while (f < e.length) { s = this._keyStr.indexOf(e.charAt(f++)); o = this._keyStr.indexOf(e.charAt(f++)); u = this._keyStr.indexOf(e.charAt(f++)); a = this._keyStr.indexOf(e.charAt(f++)); n = s << 2 | o >> 4; r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a; t = t + String.fromCharCode(n); if (u != 64) { t = t + String.fromCharCode(r) } if (a != 64) { t = t + String.fromCharCode(i) } } t = Base64._utf8_decode(t); return t }, _utf8_encode: function (e) { e = e.replace(/\r\n/g, "\n"); var t = ""; for (var n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) { t += String.fromCharCode(r >> 6 | 192); t += String.fromCharCode(r & 63 | 128) } else { t += String.fromCharCode(r >> 12 | 224); t += String.fromCharCode(r >> 6 & 63 | 128); t += String.fromCharCode(r & 63 | 128) } } return t }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = c1 = c2 = 0; while (n < e.length) { r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r); n++ } else if (r > 191 && r < 224) { c2 = e.charCodeAt(n + 1); t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2 } else { c2 = e.charCodeAt(n + 1); c3 = e.charCodeAt(n + 2); t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63); n += 3 } } return t } }

    var encodedString = Base64.encode(authorizationHeaderParams);

    var twitterURL = "https://api.twitter.com/1.1/search/tweets.json?result_type=popular&count=30&include_entities=false&q=" + text;

    var request = new XMLHttpRequest();

    request.open("POST", g_TwitterOAuth2Token, false);
    request.setRequestHeader("Authorization", "Basic " + encodedString);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send("grant_type=client_credentials");
    var response = request.responseText;

    var token = JSON.parse(response).access_token;



    request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log("Received response from Twitter");
            genTwitterHtml(JSON.parse(this.response));
        }
    });
    request.open("GET", twitterURL, false);
    request.setRequestHeader("Authorization", "Bearer " + token);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(data);

}

var genTwitterHtml = function (dataObj) {
    var count, statuses, status, source;
    var html = '<h1 class="josefin"><b>Twitter feed</b></h1><p>These tweets have been trending recently and I think they might be useful to you!</p>';
    statuses = dataObj.statuses;
    for (count = 0; count < statuses.length; count++) {
        try{
            var idstr = statuses[count].id_str;
        }
        catch (err) {
            console.log("Twitter Error 1", err);
        }
        try{
            var usr = statuses[count].us

        }
        catch (err) {
            console.log("Twitter Error 2", err);
        }
        try {
            text = statuses[count].text;
            text = text.parseURL().parseHashtag().parseUsername();

        }
        catch (err) {
            text=""
        }

       var turl = "https://twitter.com/" + usr + "/status/" + idstr;
        html = html+
            '<div class="button well">' +
            '<p>' + text + '</p>' +
            '<a href="'+turl+'">Source</a>'+
            '</div>'
    }
    if (statuses.length == 0) {
        console.log("Twitter Empty");
        html = '<div class="well"><h1 class="josefin"><b>:(</b></h1><p>I don\'t think anything relevant to your content is trending on Twitter. You are cooking up something really smart and new! aren\'t you?<p></div>';
    }

    $('#twitter').html(html);
};

String.prototype.parseURL = function () {
    return this.replace(/[A-Za-z]+:\/\/[\w-]+\.[\w:%&~?\/.="-]+/g, function (url) {
        return url.link(url);
    });
};

String.prototype.parseUsername = function () {
    return this.replace(/@+[\w-]+/g, function (u) {
        var username = u.replace("@", "")
        return u.link('http://twitter.com/' + username);
    });
}

String.prototype.parseHashtag = function () {
    return this.replace(/#+[\w-]+/g, function (t) {
        var tag = t.replace("#", "%23")
        return t.link('http://search.twitter.com/search?q=' + tag);
    });
};
