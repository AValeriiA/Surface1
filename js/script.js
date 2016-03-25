jQuery(document).ready(function($){
	try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

    $('a').click(function() {
    	return false
    });

window.sr = ScrollReveal();
sr.reveal('.a_wrap>.a_wrap_block', { easing:'ease-in-out', origin:'top',duration: 1000});
sr.reveal('.hc_center p', { easing:'ease-in-out', origin:'top',duration: 1000});
sr.reveal('.hc_center span', { easing:'ease-in-out', origin:'top',duration: 2000});
sr.reveal('.content_block h2', { easing:'ease-in-out', origin:'top',duration: 700});
sr.reveal('.content_block p', { easing:'ease-in-out', origin:'top',duration: 700});
		
});

