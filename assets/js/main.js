// This callback function is called when the content script has been
// injected and returned its results



function onPageDetailsReceived(pageDetails)  {
    // document.getElementById('title').innerHTML = pageDetails.title;
    // document.getElementById('url').innerHTML = pageDetails.url;
    // document.getElementById('summary').innerHTML = pageDetails.summary;
    console.log(pageDetails);
    if(pageDetails.summary == "")
    {
        $('#action-box').html(html);
        var html = "<br><br><br><br><br><div class='custom-padding josefin'><div class='well custom-overview-card'><h3>Please select some text, to grab the insights!</h3></div></div>"
        $('#action-box').html(html);
    }
    else
    {
        genSentiment(pageDetails.summary);
        populatePage(pageDetails.summary);
        genDeepDive(pageDetails.summary);
    }
    
}

// Global reference to the status display SPAN
var statusDisplay = null;

// POST the data to the server using XMLHttpRequest
// function addBookmark() {
//     ;
// }

// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
    // Cache a reference to the status display SPAN
    statusDisplay = document.getElementById('status-display');
    // Handle the bookmark form submit event with our addBookmark function
    //document.getElementById('addbookmark').addEventListener('submit', addBookmark);
    // Get the event page
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in
        // our onPageDetailsReceived function as the callback. This injects
        // content.js into the current tab's HTML
        eventPage.getPageDetails(onPageDetailsReceived);
    });
});
