populatePage = function (text) {
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://api.textrazor.com",
        "method": "POST",
        "headers": {
            "x-textrazor-key": "b043156ea6a956b7b7cee9c9fdbead629578a609caace754ad13f958",
            "accept-encoding": "application/gzip",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {
            "extractors": "topics",
            "text": text
        },
        "error": function (xhr, ajaxOptions, thrownError) {
            console.log("Error in Text Razor Call",thrownError);
        },
        "success": function (data) {
            //console.log(data);
            document.getElementById('result').innerHTML = data.response.topics[0]["label"];
            // var coarseTopics = data.response.coarseTopics;
            // var topics = data.response.topics;
            // var topicsList = [];
            // var topicsWikiNamesList = [];
            // var count;
            // var wikiLink;
            // var wikiName;
            // try {
            //     var responseLength = topics.length;
            //     if (topics.length > 30) responseLength = 30;
            //     for (count = 0; count < responseLength ; count++) {
            //         topicsList.push(topics[count]["label"]);
            //         wikiLink = topics[count]["wikiLink"];
            //         wikiName = wikiLink.split(":")[2]
            //         topicsWikiNamesList.push(wikiName)
            //         //console.log(wikiName, topics[count]["label"])
            //     }
            //     console.log("Successfully retrived Topics from Text Razor");

                //runAllJobs(topicsList, topicsWikiNamesList);
            // }
            // catch (err) {
            //     console.log("Couldn't retrive Topics from Text Razor", err);
            // };
        }
    });
    return;
}
