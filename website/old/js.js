$("document").ready(function() {

    $('#page1button').click(function(){
        $('html,body').queue([]).stop(); //deze regel toevoegen stopt de vorige scroll animatie
        $('html, body').animate({
            scrollTop: $("#page1").offset().top
        }, 1500);

    });

    $('#page2button').click(function(){
		$('html,body').queue([]).stop();
        $('html, body').animate({
            scrollTop: $("#page2").offset().top
        }, 1500);

    });

    $('#page3button').click(function(){
		$('html,body').queue([]).stop();
        $('html, body').animate({
            scrollTop: $("#page3").offset().top
        }, 1500);

    });

    $('#page4button').click(function(){
		$('html,body').queue([]).stop();
        $('html, body').animate({
            scrollTop: $("#page4").offset().top
        }, 1500);

    });
	
	
	$('#logo').click(function(){
        $('html,body').queue([]).stop(); //deze regel toevoegen stopt de vorige scroll animatie
        $('html, body').animate({
            scrollTop: $("#page1").offset().top
        }, 1500);

    });
	
	
	$("#scrollmenu").hover(function(){  //Deze functie is toegevoegd om de navbar tevoorschijn te laten komen
		$('#scrollmenu').queue([]).stop(); //deze regel toevoegen stopt de vorige animatie
		
		$('#scrollmenu').animate({ //deze regel start de animatie
            opacity: 1, top: '0px' }, 250);
		},function(){
		$('#scrollmenu').queue([]).stop(); //Deze functie is toegevoegd om de navbar te verbergen te laten komen
		$('#scrollmenu').animate({
            opacity: 0.5, top: '-35px' }, 250);
		
	});

	
	$('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(e){
	if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel"){
		$("html,body").stop();
	}
	})
	
	
	
	
//	var lastScrollTop = 0;
//	$(window).scroll(function(event){
//		var st = $(this).scrollTop();
//		if (st > lastScrollTop){
//		console.log ("down");
//		} else {
//		console.log ("up");
//   }
//   lastScrollTop = st;
//	});
	
	
	
	
	$("#rightbutton1").click(function(){
        $('.content').queue([]).stop(); //deze regel toevoegen stopt de vorige animatie

        if ($('#content1-1').is(":visible"))  {
            $('#content1-1').fadeTo('slow', 0);
            $('#content1-1').hide();
			$('#leftbutton1').show();
			$('#leftbutton1').fadeTo('slow', 1);
            $('#content1-2').show();
            $('#content1-2').fadeTo('slow', 1);
        }

        else if ($('#content1-2').is(":visible"))  {
            $('#content1-2').fadeTo('slow', 0);
            $('#content1-2').hide();
			$('#rightbutton1').fadeTo('slow', 0);
            $('#rightbutton1').hide();
            $('#content1-3').show();
            $('#content1-3').fadeTo('slow', 1);
        }

    });

    $("#leftbutton1").click(function(){
        $('.content').queue([]).stop(); 

        if ($('#content1-2').is(":visible"))  {
            $('#content1-2').fadeTo('slow', 0);
            $('#content1-2').hide();
			$('#leftbutton1').fadeTo('slow', 0);
            $('#leftbutton1').hide();
            $('#content1-1').show();
            $('#content1-1').fadeTo('slow', 1);
        }

        else if ($('#content1-3').is(":visible"))  {
            $('#content1-3').fadeTo('slow', 0);
            $('#content1-3').hide();
			$('#rightbutton1').show();
			$('#rightbutton1').fadeTo('slow', 1);
            $('#content1-2').show();
            $('#content1-2').fadeTo('slow', 1);
        }
    });
	
	
    $("#rightbutton2").click(function(){
        $('.content').queue([]).stop(); //deze regel toevoegen stopt de vorige animatie

        if ($('#content2-1').is(":visible"))  {
            $('#content2-1').fadeTo('slow', 0);
            $('#content2-1').hide();
			$('#leftbutton2').show();
			$('#leftbutton2').fadeTo('slow', 1);
            $('#content2-2').show();
            $('#content2-2').fadeTo('slow', 1);
        }
        else if ($('#content2-2').is(":visible"))  {
            $('#content2-2').fadeTo('slow', 0);
            $('#content2-2').hide();
            $('#content2-3').show();
            $('#content2-3').fadeTo('slow', 1);
        }
		
		else if ($('#content2-3').is(":visible"))  {
            $('#content2-3').fadeTo('slow', 0);
            $('#content2-3').hide();
            $('#content2-4').show();
            $('#content2-4').fadeTo('slow', 1);
        }

        else if ($('#content2-4').is(":visible"))  {
            $('#content2-4').fadeTo('slow', 0);
            $('#content2-4').hide();
			$('#rightbutton2').fadeTo('slow', 0);
            $('#rightbutton2').hide();
            $('#content2-5').show();
            $('#content2-5').fadeTo('slow', 1);
        }

    });

    $("#leftbutton2").click(function(){
        $('.content').queue([]).stop(); 

        if ($('#content2-2').is(":visible"))  {
            $('#content2-2').fadeTo('slow', 0);
            $('#content2-2').hide();
			$('#leftbutton2').fadeTo('slow', 0);
            $('#leftbutton2').hide();
            $('#content2-1').show();
            $('#content2-1').fadeTo('slow', 1);
        }

        else if ($('#content2-3').is(":visible"))  {
            $('#content2-3').fadeTo('slow', 0);
            $('#content2-3').hide();
            $('#content2-2').show();
            $('#content2-2').fadeTo('slow', 1);
        }
		
		else if ($('#content2-4').is(":visible"))  {
            $('#content2-4').fadeTo('slow', 0);
            $('#content2-4').hide();
            $('#content2-3').show();
            $('#content2-3').fadeTo('slow', 1);
        }

        else if ($('#content2-5').is(":visible"))  {
            $('#content2-5').fadeTo('slow', 0);
            $('#content2-5').hide();
			$('#rightbutton2').show();
			$('#rightbutton2').fadeTo('slow', 1);
            $('#content2-4').show();
            $('#content2-4').fadeTo('slow', 1);
        }
    });
	
	$("#rightbutton4").click(function(){
        $('.content').queue([]).stop(); //deze regel toevoegen stopt de vorige animatie

        if ($('#content4-1').is(":visible"))  {
            $('#content4-1').fadeTo('slow', 0);
            $('#content4-1').hide();
			$('#leftbutton4').show();
			$('#leftbutton4').fadeTo('slow', 1);
            $('#content4-2').show();
            $('#content4-2').fadeTo('slow', 1);
        }
        else if ($('#content4-2').is(":visible"))  {
            $('#content4-2').fadeTo('slow', 0);
            $('#content4-2').hide();
            $('#content4-3').show();
            $('#content4-3').fadeTo('slow', 1);
        }
		
		else if ($('#content4-3').is(":visible"))  {
            $('#content4-3').fadeTo('slow', 0);
            $('#content4-3').hide();
            $('#content4-4').show();
            $('#content4-4').fadeTo('slow', 1);
        }
		
		else if ($('#content4-4').is(":visible"))  {
            $('#content4-4').fadeTo('slow', 0);
            $('#content4-4').hide();
            $('#content4-5').show();
            $('#content4-5').fadeTo('slow', 1);
        }

        else if ($('#content4-5').is(":visible"))  {
            $('#content4-5').fadeTo('slow', 0);
            $('#content4-5').hide();
			$('#rightbutton4').fadeTo('slow', 0);
            $('#rightbutton4').hide();
            $('#content4-6').show();
            $('#content4-6').fadeTo('slow', 1);
        }

    });

    $("#leftbutton4").click(function(){
        $('.content').queue([]).stop(); 

        if ($('#content4-2').is(":visible"))  {
            $('#content4-2').fadeTo('slow', 0);
            $('#content4-2').hide();
			$('#leftbutton4').fadeTo('slow', 0);
            $('#leftbutton4').hide();
            $('#content4-1').show();
            $('#content4-1').fadeTo('slow', 1);
        }

        else if ($('#content4-3').is(":visible"))  {
            $('#content4-3').fadeTo('slow', 0);
            $('#content4-3').hide();
            $('#content4-2').show();
            $('#content4-2').fadeTo('slow', 1);
        }
		
		else if ($('#content4-4').is(":visible"))  {
            $('#content4-4').fadeTo('slow', 0);
            $('#content4-4').hide();
            $('#content4-3').show();
            $('#content4-3').fadeTo('slow', 1);
        }
		
		else if ($('#content4-5').is(":visible"))  {
            $('#content4-5').fadeTo('slow', 0);
            $('#content4-5').hide();
            $('#content4-4').show();
            $('#content4-4').fadeTo('slow', 1);
        }

        else if ($('#content4-6').is(":visible"))  {
            $('#content4-6').fadeTo('slow', 0);
            $('#content4-6').hide();
			$('#rightbutton4').show();
			$('#rightbutton4').fadeTo('slow', 1);
            $('#content4-5').show();
            $('#content4-5').fadeTo('slow', 1);
        }
    });

});
