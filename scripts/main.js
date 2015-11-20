window.onload = function() {
	document.getElementById("open_ss").onclick=function () {
			var winWidth=500;
			var winHeight=500;
			var leftPosition = (screen.width-winWidth)/2;
			var topPosition = (screen.height-winHeight)/2;
			var optionString = "width=" + winWidth + ",height=" + winHeight + ",left=" + leftPosition + ",top=" + topPosition + ",scrollbars:0";
			openWin = window.open("slideshow.html", "imagesWindow", optionString);

			return false;
	}

	document.getElementById("close_ss").onclick=function () {
			if (openWin.closed) {
					alert('its closed');
			} else {
					openWin.close();
			}

			return false;
	}

}