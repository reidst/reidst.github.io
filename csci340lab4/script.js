function main() {

    console.log("Hello, world!");
    $("#new-quote-button").click(rerollQuote);
    rerollQuote();
    $("#new-bg-button").click(randomizeBackgroundNoise);
    randomizeBackgroundNoise();

    $("#cat").attr("src", "https://art.ngfiles.com/images/1739000/1739480_deadkinn_niko.jpg?f1617898704");
    $("#image-author").html(`catboys.com has died, so until a suitable replacement is found, <a href="https://www.newgrounds.com/art/view/deadkinn/niko">Niko</a> by <a href="https://deadkinn.newgrounds.com/">DeadKinn</a> will read stowoic quotes for you.`);
};

function rerollQuote() {
    // randomizeCatboyImg();
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

function randomizeBackgroundNoise() {
    $.ajax({
        dataType: "json",
        url: "https://php-noise.com/noise.php?json",
        success: function (results) {
            console.log(results);
            $("body").css("background-image", `url("${results.uri}")`);
        }
    });
}

$(document).ready(main);
