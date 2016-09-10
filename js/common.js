$(function() {
	$(".popup-menu").hide();
/*// top-menu*/
	var clickNav = $(".top-nav li.popup a");
  clickNav.on("click", function(e){
  	e.stopImmediatePropagation();
  if($(".popup-menu").is(':hidden')){  
  $(".popup-menu").slideDown();
  $(this).addClass("color");    
  } else { 
    $(".popup-menu").slideUp();    
  	$(this).removeClass("color");  
  	};

  $(".popup-menu>ul>li>a").on("click", function(){
    $(".popup-menu").slideUp();
    clickNav.removeClass("color"); 
  });  

 $(".popup-menu").on("mouseleave", function(){
    $(".popup-menu").slideUp();
    clickNav.removeClass("color"); 
  });  
});

	$("html").on("click", function(e){					
				if($(e.target).closest(".popup-menu").length==0){
				$(".popup-menu").slideUp();
				$(".top-nav li>a").removeClass("color");}				
		});

	$("html").on("click", function(e){					
				if($(e.target).closest(".search").length==0){
				$(".wrap-input").slideUp();
				$("div.search>i").removeClass("search-clicked");
			}				
		});

	$("html").on("click", function(e){					
				if($(e.target).closest(".search").length==0){
				$(".navMobile").slideUp();
				$("div.search>i").removeClass("search-clicked");
			}				
		});


	$(".pirojoc").on("click", function(e){
		if ($(".navMobile").is(":hidden")){
		$(".navMobile").slideDown();
		e.stopImmediatePropagation();
		$(".pirojoc>i").css("background-color","#e2534b");}
		else{
			if($(e.target).closest(".search").length==0){
				$(".pirojoc>i").css("background-color","");
			}				
		}
	});
	

	$(".navMobile .home").on("click", function(e){
		e.stopImmediatePropagation();
	$(".popupnavMobile").slideToggle();
	});
	
	$(".buttonUnivers").on("mouseover", function(){
		$(this).css('background-color','#e2534b')
					 .parent(".services")
					 .children("span")
					 .children("i")
					 .css("color","#e2534b");	
	});

	$(".services>span>i").on("mouseover", function(){
		$(this).css("color","#e2534b")
		.parents(".services")
		.children("span.buttonUnivers")
		.css('background-color','#e2534b');
	})

 $(".buttonUnivers").on("mouseout", function(){
	 $(this).css('background-color','')
	 				.parent(".services")
					.children("span")
					.children("i")
					.css("color","");
	});

 $(".services>span>i").on("mouseout", function(){
		$(this).css("color","")
		.parents(".services")
		.children("span.buttonUnivers")
		.css('background-color','');
	})

/*// search input*/
var input = $(".wrap-input");
$("div.search>i").on("click", function(){
	if((input).is(":hidden")){
		input.show();
		$(this).addClass("search-clicked");
		}else{
		input.hide();
		$(this).removeClass("search-clicked");
		}
 });  

$("i.fa fa-angle-right").css("color", "white");
/*	//E-mail Ajax Send*/
/*	//Documentation & Example: https://github.com/agragregra/uniMail*/
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				/* Done Functions*/
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	/*Chrome Smooth Scroll*/
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

/*Raphaël 2.1.4 график начало*/
 document.addEventListener("DOMContentLoaded", function(event) {
  var g2, g3, g4, g5;
     var g2 = new JustGage({
        id: "g2",
        value: 50,        
        min: 0,
        max: 100,
        hideMinMax: true,
        title: "MAECENAS",
        titleFontSize: 30,
        titlePosition: 'below',
         customSectors: [{
          color: '#e2534b',
          lo: 1,
          hi: 100
        },],
        counter: true,
        gaugeWidthScale: 0.7
      });

       var g3 = new JustGage({
        id: "g3",
        value: 70,        
        min: 0,
        max: 100,
        hideMinMax: true,
        title: "SUSPENDISSE",
        titleFontSize: 30,
        titlePosition: 'below',
         customSectors: [{
          color: '#e2534b',
          lo: 1,
          hi: 100
        },],
        counter: true,
        gaugeWidthScale: 0.7
      });

     var g4 = new JustGage({
        id: "g4",
        value: 80,        
        min: 0,
        max: 100,
        hideMinMax: true,
        title: "ALIQUAM",
        titleFontSize: 30,
        titlePosition: 'below',
         customSectors: [{
          color: '#e2534b',
          lo: 1,
          hi: 100
        },],
        counter: true,
        gaugeWidthScale: 0.7
      });

      var g5 = new JustGage({
        id: "g5",
        value: 100,        
        min: 0,
        max: 100,
        hideMinMax: true,
        title: "HABITASSE",
        titleFontSize: 30,
        titlePosition: 'below',
         customSectors: [{
          color: '#e2534b',
          lo: 1,
          hi: 100
        },],
        counter: true,
        gaugeWidthScale: 0.7
      });
    });
/*Raphaël 2.1.4 график конец*/

 /*slider Waterwheel Carousel начало*/
 var carousel = $("#carousel").waterwheelCarousel({                           
        });
        $('#prev').bind('click', function () {
          carousel.prev();
          return false
        });
        $('#next').bind('click', function () {
          carousel.next();
          return false;
        });
/*slider Waterwheel Carousel конец*/

/*slider slick параметры начало*/
$(document).on('ready', function() {
      $(".single-item").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true 
      });
    });
/*slider slick параметры конец*/

/*линия загрузки начало*/
 $('body').show();
 $('.version').text(NProgress.version);
 NProgress.start();
 setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 1000);
 /*линия загрузки конец*/

 