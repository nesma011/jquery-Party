//side bar
$("h5.h3").on("click", function() {
    $(".inner1").animate({"width": "toggle"}, {
      duration: 500,
      step: function(now) {
        $(".open-btn").css("left", now + "px");
      }
    });
  });

$("button.btn-close").on("click" , function()
{
    $(".inner1").hide(500);
    $(".open-btn").animate({"left": "0px"}, 500);

});


$("h2").on("click",function()
{
    $(".p").not($(this).siblings(".p")).slideUp();
    $(this).siblings(".p").slideToggle(500);  
});



function makeTimer() {

		var endTime = new Date("30 October 2024 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span> D</span>");
			$("#hours").html(hours + "<span> H</span>");
			$("#minutes").html(minutes + "<span> M</span>");
			$("#seconds").html(seconds + "<span> S</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);

    
    $('textarea').on('input', function(){
        const textAreaLength = $('textarea').val().length;
        const remainingCalc = 100 - textAreaLength;
        $('.char').html(remainingCalc);
    })
    


    $(window).on('load', function(){
        $('.loadingScreen').fadeOut(1000);
        $('body').css('overflow', 'visible');
    })