genWikipediaPage = function (topicsList, topicsWikiName) {
    var count;
    for (count = 0; count < topicsList.length; count++) {
        $.ajax({
            "async": true,
            type: "GET",
            "url": "https://en.wikipedia.org/w/api.php?format=json&indexpageids=true&action=query&prop=extracts&exintro=&explaintext=&titles=" + topicsWikiName[count],
            dataType: "json",
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("Error in WikiPedia retrieval",thrownError);
            },
            success: function (data) {
                var items = [];
                var pagesId = Object.keys(data.query.pages);
                var extract;
                var boo;
                var poo;
                //console.log(data);
                $.each(pagesId, function (key, val) {
                    extract = data.query.pages[val].extract;
                    if (extract != null) {
                        //console.log(extract);
                        boo = extract.split('');
                        boo.splice(300, extract.length);
                        extract = boo.join('');
                        if (extract != "" && data.query.pages[val].title != "Undefined") {
                            try{
                                poo = data.query.normalized[0]["from"];
                            }
                            catch(err){
                                poo = data.query.pages[val].title;
                            }

                            items.push(
                            '<li class="well">' +
                                '<a target="_blank" href="https://en.wikipedia.org/wiki/'+poo+'"><h4>' + data.query.pages[val].title + '</h4></a>' +
                                '<p>' + extract + ' ...</p>' +
                            '</li>');
                        }

                    }

                });
                $('<ul>', {
                    html: items.join('')
                }, '</ul>').appendTo('#wikipedia');
                //console.log(pagesId);
            },
        });

    }

    //deferred.then(console.log('LOL ' + temphtml));
    console.log('Retrieved from WikiPedia');
    return;
}
