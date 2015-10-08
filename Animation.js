$(document).ready(function () {
    $("#tweet-controls").hide();
    $(".tweet-compose").on("click", function () {
        $("#tweet-controls").show();
        $(this).css("height","5em");
    })
    $(".tweet-compose").keyup(function () {
    var charCount = 140
    var tweetLength = $(".tweet-compose").val().length
    var counter = charCount - tweetLength
    console.log(tweetLength);
    $("#char-count").text(counter);
    })
     
    

     })







































