
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

$(document).ready(function(){

    //menu hamburger
    $(".nav .but").click(function () {
        if ($(".nav .ulmob").css("display") == "none")
            $(".nav .ulmob").css("display","block");
        else $(".nav .ulmob").css("display","none");
    });

    //hiding menu
    var nav = $(".nav"); // Меню
	var scrollPrev = 0 // Предыдущее значение скролла
	
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop(); // Высота скролла в px
		var firstScrollUp = false; // Параметр начала сколла вверх
		var firstScrollDown = false; // Параметр начала сколла вниз
		
		if ( scrolled > 0 ) {
			if ( scrolled > scrollPrev ) {
				firstScrollUp = false;
				if ( scrolled < nav.height() + nav.offset().top ) {
					if ( firstScrollDown === false ) {
						var topPosition = nav.offset().top; // Фиксируем текущую позицию меню
						nav.css({"top": topPosition + "px"});
						firstScrollDown = true;
					}
					nav.css({"position": "absolute"});
				} else {
					nav.css({"position": "fixed","top": "-" + nav.height() + "px"});
				}
			} else {
				firstScrollDown = false;
				if ( scrolled > nav.offset().top ) {
					if ( firstScrollUp === false ) {
						var topPosition = nav.offset().top;
						nav.css({"top": topPosition + "px"});
						firstScrollUp = true;
					}
					nav.css({"position": "absolute"});
				} else {
					nav.removeAttr("style");
				}
			}
			scrollPrev = scrolled;
		}	
	});	
});