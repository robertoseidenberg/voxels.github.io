$(document).ready(function() {

	if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
    	$("body").css("background-color", "#d2d2d2");
	} else {
		$("body").css("background-color", "#cccccc");
	}
});