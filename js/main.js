$(document).ready(function() {

	if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
    	$("body").css("background-color", "#d2d2d2");
	} else {
		$("body").css("background-color", "#cccccc");
	}

	var ua = window.navigator.userAgent;
	var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
	var webkit = !!ua.match(/WebKit/i);
	var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

	if (iOSSafari == true) {
		$( "video" ).remove();
	}
});