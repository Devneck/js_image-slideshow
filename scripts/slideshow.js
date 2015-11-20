var imagesArray = new Array();
var indx = 0
var id;
var runShow = false

for (var i=0; i<5; i++) {
		// create new image
		var tempImg = new Image();
		tempImg.src = "images/img" + (i+1) + ".jpg";
		tempImg.title = "Image " + (i+1) + " caption";
		//  push new image to array
		imagesArray.push(tempImg);
}

window.onload = function() {
		document.getElementById("close_ss").onclick=function () {
				self.close();
		}

		document.getElementById("start_stop").onclick=function () {
				if (runShow==false) {
						id = window.setInterval('startShow()',3000);
						runShow = true;
						document.getElementById("start_stop").innerHTML = "Stop";
				} else {
						runShow = false;
						window.clearInterval(id);
						document.getElementById("start_stop").innerHTML = "Start";
				}
				return false;
		}

		document.getElementById("back").onclick=function () {
				if (indx==0) {
						document.images[0].src = imagesArray[4].src;
						document.images[0].title = imagesArray[4].title;
						document.getElementById("imageCaption").innerHTML = imagesArray[4].title;
						indx = 4;
				} else {
						document.images[0].src = imagesArray[indx-1].src;
						document.images[0].title = imagesArray[indx-1].title;
						document.getElementById("imageCaption").innerHTML = imagesArray[indx-1].title;
						indx--;
				}
				return false;
		}

		document.getElementById("forward").onclick=function () {
				if (indx==4) {
						document.images[0].src = imagesArray[0].src;
						document.images[0].title = imagesArray[0].title;
						document.getElementById("imageCaption").innerHTML = imagesArray[0].title;
						indx = 0;
				} else {
						document.images[0].src = imagesArray[indx+1].src;
						document.images[0].title = imagesArray[indx+1].title;
						document.getElementById("imageCaption").innerHTML = imagesArray[indx+1].title;
						indx++;
				}
				return false;
		}
}

function startShow() {
		document.images[0].src = imagesArray[indx].src;
		document.images[0].title = imagesArray[indx].title;
		document.getElementById("imageCaption").innerHTML = imagesArray[indx].title;
		indx++;

		if (indx==5) {
				indx=0;
		}
}
