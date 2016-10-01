var genNews = function (topicsList) {
    var poop = [];
    var count;
    for (count = 0; count < 4; count++) {
        poop.push(topicsList[count]);
    }
    var query = poop.join(" OR ");
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=" + encodeURI(query) + "&count=20&safesearch=moderate",
        "method": "GET",
        "headers": {
            "ocp-apim-subscription-key": "e0dba888cd24432792bb7473c05a3858",
            "cache-control": "no-cache",
        }
    }

    $.ajax(settings).done(function (response) {
        console.log("Received good response from Bing news");
        //var dataObj = JSON.parse(response.data);
        genNewsHtml(response);
    });
    //var data = '{ "_type": "News", "readLink": "https://bingapis.azure-api.net/api/v5/news/search?q=India++Asia++Culture++Politics++South+Asia", "totalEstimatedMatches": 2560000, "value": [ { "name": "<b>Asia</b> military spending rises in China’s shadow, spurring deals", "url": "http://www.bing.com/cr?IG=3A7599920A3446F685A017136F08FCBB&CID=09BCC390EC7565D62A2BCAB7ED446407&rd=1&h=EfOry1mSxhF4mM-wK6cyLH9OE1rA-PvLZuW9LQ6aW7A&v=1&r=http%3a%2f%2fwww.livemint.com%2fPolitics%2fsXPmbSb8Axo7my2hEawyuL%2fAsia-military-spending-rises-in-Chinas-shadow-spurring-dea.html&p=DevEx,5021.1", "image": { "thumbnail": { "contentUrl": "https://www.bing.com/th?id=ON.DBCAB5400D5B8E8144D9A8D03B91607B&pid=News", "width": 621, "height": 414 } }, "description": "Hong Kong: Global defence contractors are circling for business in <b>Asia</b>, with countries from Australia to Vietnam ... where it claims islets contested by Japan, and the <b>South</b> China Sea, where its land reclamation programme has spooked other claimants.", "about": [ { "readLink": "https://bingapis.azure-api.net/api/v5/entities/5288e6b2-094a-9e72-d584-2ccbc1c2eb88", "name": "Asia" }, { "readLink": "https://bingapis.azure-api.net/api/v5/entities/fbcf024c-dfeb-18f5-c253-9d3cb7e1598e", "name": "Military budget of the United States" }, { "readLink": "https://bingapis.azure-api.net/api/v5/entities/5fcc3d97-0cf2-94e5-6dad-cd70e387bd69", "name": "China" } ], "provider": [ { "_type": "Organization", "name": "Live Mint" } ], "datePublished": "2016-06-01T10:25:00" }, { "name": "<b>India</b>’s Competitiveness and Prosperity Rankings Rise Under Modi", "url": "http://www.bing.com/cr?IG=3A7599920A3446F685A017136F08FCBB&CID=09BCC390EC7565D62A2BCAB7ED446407&rd=1&h=L-CuQgEVxniAKgfiDhkG9cHq89EjzGz2CPSFC7hvPfc&v=1&r=http%3a%2f%2fblogs.wsj.com%2findiarealtime%2f2016%2f06%2f01%2findias-competitiveness-and-prosperity-rankings-rise-under-modi%2f&p=DevEx,5023.1", "image": { "thumbnail": { "contentUrl": "https://www.bing.com/th?id=ON.4EA23CCD1CB4E917E6585EC249799522&pid=News", "width": 700, "height": 466 } }, "description": "The report card on the health of <b>India</b>’s economy during Mr. Modi’s time in New Delhi marked a measurable improvement in the <b>South</b> <b>Asian</b> nation in a time when ... fair elections and <b>political</b> participation as well as rule of law. It performed worst ...", "about": [ { "readLink": "https://bingapis.azure-api.net/api/v5/entities/04fee623-e9bd-ee4b-f30d-cad3c29199e4", "name": "Narendra Modi" }, { "readLink": "https://bingapis.azure-api.net/api/v5/entities/963b5fe8-c852-f7be-edfb-f62d6b593b90", "name": "Ranking" }, { "readLink": "https://bingapis.azure-api.net/api/v5/entities/70834f76-d913-bf85-87a6-b9386945a646", "name": "The Wall Street Journal" } ], "provider": [ { "_type": "Organization", "name": "The Wall Street Journal Blogs" } ], "datePublished": "2016-06-01T05:15:00", "category": "World" }, { "name": "<b>India</b> could draw manufacturing from China, finance minister Jaitley says", "url": "http://www.bing.com/cr?IG=3A7599920A3446F685A017136F08FCBB&CID=09BCC390EC7565D62A2BCAB7ED446407&rd=1&h=iTXdMgv_JzMwB7tU6tCCwXz6umk3jaBSE8zbN36HtCU&v=1&r=http%3a%2f%2fasia.nikkei.com%2fFeatures%2fThe-Future-of-Asia-2016%2fIndia-could-draw-manufacturing-from-China-finance-minister-Jaitley-says&p=DevEx,5025.1", "description": "&quot;If <b>India</b> continues to maintain its high growth trajectory, which I&#39;m sure over the next few years it will, its potential to be a growth engine is real,&quot; Jaitley said in an interview during the 22nd International Conference on The Future of <b>Asia</b> ...", "about": [ { "readLink": "https://bingapis.azure-api.net/api/v5/entities/cff3e620-a225-0747-6cd2-012e3e54cf25", "name": "Arun Jaitley" }, { "readLink": "https://bingapis.azure-api.net/api/v5/entities/5288e6b2-094a-9e72-d584-2ccbc1c2eb88", "name": "Asia" }, { "readLink": "https://bingapis.azure-api.net/api/v5/entities/a25b7482-f8b8-a7db-05de-c4032c10d184", "name": "Finance minister" } ], "provider": [ { "_type": "Organization", "name": "asia.nikkei.com" } ], "datePublished": "2016-06-01T07:15:00", "category": "World" }, { "name": "Vietnam’s Evolving Role in US <b>Asia</b> Strategy", "url": "http://www.bing.com/cr?IG=3A7599920A3446F685A017136F08FCBB&CID=09BCC390EC7565D62A2BCAB7ED446407&rd=1&h=C5d8bSkVS2lMVbOY6oqqGmPptCCCTM91NZLQbqi-FLA&v=1&r=http%3a%2f%2fthediplomat.com%2f2016%2f06%2fvietnams-evolving-role-in-us-asia-strategy%2f&p=DevEx,5027.1", "image": { "thumbnail": { "contentUrl": "https://www.bing.com/th?id=ON.0E3368F96B6E1F89F783F2E2FE45DBD0&pid=News", "width": 386, "height": 257 } }, "description": "As a result, the Vietnam War was considered a legitimate intervention by the United States to prevent the communist takeover of <b>South</b> Vietnam and subsequently Southeast <b>Asian</b> countries ... military and <b>political</b> advances with <b>India</b>, Japan, and the ...", "about": [ { "readLink": "https://bingapis.azure-api.net/api/v5/entities/5288e6b2-094a-9e72-d584-2ccbc1c2eb88", "name": "Asia" }, { "readLink": "https://bingapis.azure-api.net/api/v5/entities/9eb3adfc-79da-211b-6de2-580a522f56a5", "name": "Vietnam" }, { "readLink": "https://bingapis.azure-api.net/api/v5/entities/675fdcb5-0077-b818-0d2a-4509a71669bf", "name": "Role" } ], "provider": [ { "_type": "Organization", "name": "The Diplomat" } ], "datePublished": "2016-06-01T03:13:00", "category": "World" }, { "name": "Seminar on <b>culture and politics in South Asia</b> held in New Delhi", "url": "https://www.bing.com/cr?IG=3A7599920A3446F685A017136F08FCBB&CID=09BCC390EC7565D62A2BCAB7ED446407&rd=1&h=reROn0dx_0eQTOSAsmyPd5ypArwW8wTUpVE84B8j9QY&v=1&r=https%3a%2f%2fin.news.yahoo.com%2fseminar-culture-politics-south-asia-held-delhi-124242881.html&p=DevEx,5029.1", "description": "New Delhi, Jan. 23 (ANI): Scholars and students came together to talk about the relationship between <b>culture</b> and <b>politics</b> ... performance of <b>South</b> <b>Asia</b> countries. So our country is culturally attached with <b>South</b> <b>Asia</b> like Pakistan, <b>India</b>, Bangladesh ...", "about": [ { "readLink": "https://bingapis.azure-api.net/api/v5/entities/4aab35fc-ebc6-ded2-05a2-7a43f89a9a55", "name": "South Asia" }, { "readLink": "https://bingapis.azure-api.net/api/v5/entities/b474d3c7-a39a-d5ba-7426-18e00042f03e", "name": "New Delhi" } ], "provider": [ { "_type": "Organization", "name": "Yahoo! India News" } ], "datePublished": "2015-01-23T17:57:49" }, { "name": "<b>India</b> not in fair diplomatic business: official", "url": "http://www.bing.com/cr?IG=3A7599920A3446F685A017136F08FCBB&CID=09BCC390EC7565D62A2BCAB7ED446407&rd=1&h=lgm96pCJnrSJzZkcSBZKAzK4n3aGSK1lfL9U7-NCXTU&v=1&r=http%3a%2f%2fwww.brecorder.com%2fgeneral-news%2f172%3apakistan%2f51926%3aindia-not-in-fair-diplomatic-business-official%2f&p=DevEx,5031.1", "description": "&quot;<b>India</b> is playing intrigue diplomacy,&quot; Gen Owais said in his keynote at the workshop on &#39;National Security, Deterrence and Regional Stability in <b>South</b> <b>Asia</b>&#39; organised by an ... which may include <b>political</b>, economic and <b>cultural</b> instruments.", "about": [ { "readLink": "https://bingapis.azure-api.net/api/v5/entities/85fa63d3-9596-adb9-b4eb-502273d84f56", "name": "India" }, { "readLink": "https://bingapis.azure-api.net/api/v5/entities/e825ec94-f963-e384-5be6-d3089d17cdd6", "name": "Official" } ], "provider": [ { "_type": "Organization", "name": "Business Recorder" } ], "datePublished": "2016-05-31T23:39:00", "category": "World" }, { "name": "<b>India</b>: Four States, Five Trends – Analysis", "url": "http://www.bing.com/cr?IG=3A7599920A3446F685A017136F08FCBB&CID=09BCC390EC7565D62A2BCAB7ED446407&rd=1&h=d-FglYb59gMF9oupKJMlfT3iUB-YfaKL0-PITR_N_AA&v=1&r=http%3a%2f%2fwww.eurasiareview.com%2f01062016-india-four-states-five-trends-analysis%2f&p=DevEx,5033.1", "image": { "thumbnail": { "contentUrl": "https://www.bing.com/th?id=ON.EB2AFE95E46751C4938222BB35A74D44&pid=News", "width": 700, "height": 393 } }, "description": "On 19 May 2016, results of legislative assembly elections of four <b>Indian</b> states – two ... levels portends well not only for the <b>politics</b>, but also for social equations. Predominantly a patriarchal society, <b>South</b> <b>Asia</b> needs strong women leadership ...", "about": [ { "readLink": "https://bingapis.azure-api.net/api/v5/entities/8d7af745-9fb7-c0f7-cc3c-7d28202c1932", "name": "Eurasia" }, { "readLink": "https://bingapis.azure-api.net/api/v5/entities/85fa63d3-9596-adb9-b4eb-502273d84f56", "name": "India" }, { "readLink": "https://bingapis.azure-api.net/api/v5/entities/80f9cbbb-bb1f-30be-ee3d-4192791955f0", "name": "Canadian Parliamentary Review" } ], "provider": [ { "_type": "Organization", "name": "Eurasia Review" } ], "datePublished": "2016-06-01T19:25:00", "category": "World" }, { "name": "<b>Asia</b> shares wobble as oil slip dampens sentiment, dollar stalls", "url": "http://www.bing.com/cr?IG=3A7599920A3446F685A017136F08FCBB&CID=09BCC390EC7565D62A2BCAB7ED446407&rd=1&h=3fq1JHjcps0jzr3aKAv9sdklpA-dM9p6Ay27aDtXsIc&v=1&r=http%3a%2f%2feconomictimes.indiatimes.com%2fmarkets%2fstocks%2fnews%2fasia-shares-wobble-as-oil-slip-dampens-sentiment-dollar-stalls%2farticleshow%2f52532110.cms&p=DevEx,5035.1", "image": { "thumbnail": { "contentUrl": "https://www.bing.com/th?id=ON.6A7416DE247D8F027F240891DD2862BA&pid=News", "width": 160, "height": 120 } }, "description": "TOKYO: <b>Asian</b> stocks were on a weak footing on Wednesday as a slip ... Hong Kong&#39;s Hang Seng rose 0.1 percent, while <b>South</b> Korea&#39;s KOSPI was flat. The Dow shed 0.5 percent and the S&amp;P 500 dipped 0.1 percent on Tuesday, as energy shares weakened in the ...", "about": [ { "readLink": "https://bingapis.azure-api.net/api/v5/entities/5288e6b2-094a-9e72-d584-2ccbc1c2eb88", "name": "Asia" }, { "readLink": "https://bingapis.azure-api.net/api/v5/entities/c8dfebad-4209-b5c5-806d-7d34444dc344", "name": "The Economic Times" } ], "provider": [ { "_type": "Organization", "name": "Economic Times" } ], "datePublished": "2016-06-01T08:42:00" }, { "name": "U.S. ships, jets in <b>Asia</b> Pacific called a new normal", "url": "http://www.bing.com/cr?IG=3A7599920A3446F685A017136F08FCBB&CID=09BCC390EC7565D62A2BCAB7ED446407&rd=1&h=C-Pmwm4JWg9yP9ir8MEt5a3Ok0DTBoXUK_Nu6eh_r2Q&v=1&r=http%3a%2f%2fwww.arkansasonline.com%2fnews%2f2016%2fjun%2f01%2fu-s-ships-jets-in-asia-pacific-called-a%2f%3ff%3dnews-national&p=DevEx,5037.1", "image": { "thumbnail": { "contentUrl": "https://www.bing.com/th?id=ON.45728949C9D7D503C611FD457199172A&pid=News", "width": 630, "height": 396 } }, "description": "U.S. moves in recent months have led to protests from China and Russia, which contend that President Barack Obama&#39;s administration is fueling unrest in the <b>Asia</b> Pacific ... including portions of <b>India</b> or large swaths of the <b>South</b> American coast, U.S ...", "about": [ { "readLink": "https://bingapis.azure-api.net/api/v5/entities/20ad87f7-79f8-7cc9-75c2-c6fda1db8f63", "name": "Asia-Pacific" } ], "provider": [ { "_type": "Organization", "name": "Arkansas Online" } ], "datePublished": "2016-06-01T09:21:00", "category": "World" }, { "name": "US naval, air maneuvers become &#39;new normal&#39; in <b>Asia</b> Pacific", "url": "http://www.bing.com/cr?IG=3A7599920A3446F685A017136F08FCBB&CID=09BCC390EC7565D62A2BCAB7ED446407&rd=1&h=lOUmaPGK9X7xd4nSPOPz-hDetHg1AMhlZW-JbNo2YqY&v=1&r=http%3a%2f%2fwww.philstar.com%2fheadlines%2f2016%2f06%2f01%2f1589033%2fus-naval-air-maneuvers-become-new-normal-in-asia-pacific&p=DevEx,5039.1", "image": { "thumbnail": { "contentUrl": "https://www.bing.com/th?id=ON.84D47E66921F1EB4862F10B50D101B34&pid=News", "width": 686, "height": 392 } }, "description": "U.S. moves in recent months have led to angry protests from China and Russia, which contend the Obama administration is fueling unrest in the <b>Asia</b> Pacific and ... including portions of <b>India</b> or large swaths of the <b>South</b> American coast, U.S. ships routinely ...", "about": [ { "readLink": "https://bingapis.azure-api.net/api/v5/entities/20ad87f7-79f8-7cc9-75c2-c6fda1db8f63", "name": "Asia-Pacific" } ], "provider": [ { "_type": "Organization", "name": "Philstar" } ], "datePublished": "2016-06-01T02:11:00", "category": "World" } ] }';
    //var dataObj = JSON.parse(data);
    
    //genNewsHtml(dataObj);
}

var genNewsHtml = function (dataObj) {
    //console.log(dataObj);
    var count, imgurl, name, desc;
    var html = '<h1 class="josefin"><b>Recent News</b></h1><p>Look what I found! Latest happenings in the world that relate to your text...</p>';


    for (count = 0; count < dataObj.value.length; count++) {
        try {
            imgurl = dataObj.value[count].image.thumbnail.contentUrl;
            name = dataObj.value[count].name;
            desc = dataObj.value[count].description;
            url = dataObj.value[count].url;
            html = html +
                '<div class="well">' +
                    '<div class="row">' +
                        '<div class="col-xs-3" ><img style="margin:10%" width="110%"  class="img-responsive img-circle" src="' + imgurl + '"/></div>' +
                        '<div class="col-xs-9" style="text-overflow:ellipsis;"><div><h4 class=" josefin"><b><a href="' + url + '">' + name + '</a></b></h4></div><p>' + desc + '</p></div>' +
                    '</div>' +
                '</div>';
        }
        catch (err) {
            ;
        }
    }
    $('#news').html(html);
    //console.log(dataObj);


    //var count, imgurl, name, desc;
    //var html = '<h1 class="josefin"><b>Recent News</b></h1><p>Look what I found! Latest happenings in the world that relate to your text...</p>';


    //for (count = 0; count < dataObj.value.length; count++) {
    //    try {
    //        imgurl = dataObj.value[count].image.thumbnail.contentUrl;
    //        name = dataObj.value[count].name;
    //        desc = dataObj.value[count].description;
    //        url = dataObj.value[count].url;
    //        html = html +
    //            '<div class="well">' +
    //                '<div class="row">' +
    //                    '<div class="col-xs-3" ><img style="margin:10%" width="110%"  class="img-responsive img-circle" src="' + imgurl + '"/></div>' +
    //                    '<div class="col-xs-9" style="text-overflow:ellipsis;"><div><h4 class=" josefin"><b><a href="' + url + '">' + name + '</a></b></h4></div><p>' + desc + '</p></div>' +
    //                '</div>' +
    //            '</div>';
    //    }
    //    catch (err) {
    //        ;
    //    }
    //}
    //$('#news').html(html);

}