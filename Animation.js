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
    
   $('#tweet-submit').click(function (event){
       var tweet = $('#new-tweet-textarea').val();
   })
   $("#tweet-controls").hide(); 
   $(".tweet-compose").on("click", function(){
       $("#tweet-controls").show();
       $(this).css("height", "5em"); 
   })
   $('.tweet-compose').keyup(function() {
		console.log('up');
		var count = 140-$('.tweet-compose').val().length;
		$('.char-count').html(count);
		if (count < 10) {
			$('.char-count').css('color', 'red');
		}
		else {
			$('.char-count').css('color', 'inherit');
		}
		if (count == 140 || count < 0) {
			$('.tweet-controls button').prop('disabled', true);
		}
		else {
			$('.tweet-controls button').prop('disabled', false);
		}
	});
   $(".tweet-compose").keyup(function(){
      var charCount =  140
       var tweetLength = $(".tweet-compose").val().length
    var counter = charCount - tweetLength
       console.log(tweetLength);
       $("#char-count").text(counter)
$("#stream").prepend(tweetLength)
   });   
    $('.tweet').click(function() {
        $(this).find('.stats.reply').slideDown(100);
    });
         //$('.tweet').hover(function){
   //$('tweet-actions').css('visibility', 'visible');
   //$(this).find('.tweet-actions').css('visibility', 'visible');
  
    
    // function onHover () {
     //  $(this).find('.tweet-actions').css('visibility', 'visible'); 
 //  }//

});
   

    







































