function main() {

    console.log("Hello, world!");
    $("#new-quote-button").click(rerollQuote);
    rerollQuote();

};

function rerollQuote() {
    randomizeCatboyImg();
    randomizeStoicQuote();
}

function randomizeCatboyImg() {
    $.ajax({
        dataType: "json",
        url: "https://catboys.com/api/img",
        success: function (results) {
            $("#cat").attr("src", results.url);
            var artist = results.artist;
            if (artist == "unknown") {
                $("#image-author").html("Unknown artist");
            } else {
                $("#image-author").html(`<a href="${results.source_url}">Image</a> by <a href="${results.artist_url}">${artist}</a>`);
            }
        }
    })
}

function randomizeStoicQuote() {
    $.ajax({
        dataType: "json",
        url: "https://api.themotivate365.com/stoic-quote",
        success: function (results) {
            var quote = results.quote;
            console.log(results);
            $("#quote-text").html(`${quote} ${results.author}`);
        }
    })
}

$(document).ready(main);
