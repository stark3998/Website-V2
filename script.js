var x = document.getElementById("googleMap");

function getLocation() {
    	if (navigator.geolocation) {
        	navigator.geolocation.getCurrentPosition(showPosition, showError);
    	} else {
        	x.innerHTML = "Geolocation is not supported by this browser.";
    	}
}

function showPosition(position) {
    			
   	var latlon = position.coords.latitude + "," + position.coords.longitude;
	var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=1200x900&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
    	document.getElementById("googleMap").innerHTML = "<img src='"+img_url+"'>";
			
	var mapProp= {center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude),zoom:40,};
	var map=new google.maps.Map(document.getElementById("mapholder"),mapProp);
}

function showError(error) {
    	switch(error.code) {
        	case error.PERMISSION_DENIED:
            		x.innerHTML = "User denied the request for Geolocation."
           		break;
        	case error.POSITION_UNAVAILABLE:
            		x.innerHTML = "Location information is unavailable."
            		break;
        	case error.TIMEOUT:
            		x.innerHTML = "The request to get user location timed out."
            		break;
        	case error.UNKNOWN_ERROR:
            		x.innerHTML = "An unknown error occurred."
            		break;
    	}
}

function getNav(page) {
	switch(page) {
		case 0:
			document.getElementById("lol").innerHTML+=
				'<li style="float:right; color:white"><a href="About.htm">Jatin Madan &nbsp&nbsp<img src="Images\\download.jpg" alt="Couldn\'t Load Image" width="22px" height="16px"></a></li><li><a href="Home.htm">Home</a></li><li><a href="News.htm">News</a></li><li class="dropdown"><a href="Contact.htm" class="dropbtn">Contact</a><div class="dropdown-content"><a href="mailto:jatin.madan39@gmail.com"><img src="Images\\mail.png" alt="Couldnt Load Image" width="22px" height="16px">&nbsp  Mail Me</a><a href="map.htm" target="_blank"><img src="Images\\address.png" alt="Couldnt Load Image" width="22px" height="16px">&nbsp  Get My Address</a><a href="callto://+919711300555"><img src="Images\\call.png" alt="Couldnt Load Image" width="22px" height="16px">&nbsp  Call Me</a></div></li><li><a href="About.htm">About</a></li><li><a href="Map.htm" class="active">Location Services - Jatin</a><li>';
			break;
		case 1:
			document.getElementById("lol").innerHTML+=
				'<li style="float:right; color:white"><a href="About.htm">Jatin Madan &nbsp&nbsp<img src="Images\\download.jpg" alt="Couldn\'t Load Image" width="22px" height="16px"></a></li><li><a href="Home.htm" class="active">Home</a></li><li><a href="News.htm">News</a></li><li class="dropdown"><a href="Contact.htm" class="dropbtn">Contact</a><div class="dropdown-content"><a href="mailto:jatin.madan39@gmail.com"><img src="Images\\mail.png" alt="Couldnt Load Image" width="22px" height="16px">&nbsp  Mail Me</a><a href="map.htm" target="_blank"><img src="Images\\address.png" alt="Couldnt Load Image" width="22px" height="16px">&nbsp  Get My Address</a><a href="callto://+919711300555"><img src="Images\\call.png" alt="Couldnt Load Image" width="22px" height="16px">&nbsp  Call Me</a></div></li><li><a href="About.htm">About</a></li><li><a href="Map.htm">Location Services - Jatin</a><li>';
			break;
		case 2:
			document.getElementById("lol").innerHTML+=
				'<li style="float:right; color:white"><a href="About.htm">Jatin Madan &nbsp&nbsp<img src="Images\\download.jpg" alt="Couldn\'t Load Image" width="22px" height="16px"></a></li><li><a href="Home.htm">Home</a></li><li><a href="News.htm" class="active">News</a></li><li class="dropdown"><a href="Contact.htm" class="dropbtn">Contact</a><div class="dropdown-content"><a href="mailto:jatin.madan39@gmail.com"><img src="Images\\mail.png" alt="Couldnt Load Image" width="22px" height="16px">&nbsp  Mail Me</a><a href="map.htm" target="_blank"><img src="Images\\address.png" alt="Couldnt Load Image" width="22px" height="16px">&nbsp  Get My Address</a><a href="callto://+919711300555"><img src="Images\\call.png" alt="Couldnt Load Image" width="22px" height="16px">&nbsp  Call Me</a></div></li><li><a href="About.htm">About</a></li><li><a href="Map.htm">Location Services - Jatin</a><li>';
			break;
		case 3:
			document.getElementById("lol").innerHTML+=
				'<li style="float:right; color:white"><a href="About.htm">Jatin Madan &nbsp&nbsp<img src="Images\\download.jpg" alt="Couldn\'t Load Image" width="22px" height="16px"></a></li><li><a href="Home.htm">Home</a></li><li><a href="News.htm"">News</a></li><li class="dropdown"><a href="Contact.htm" class="dropbtn active">Contact</a><div class="dropdown-content"><a href="mailto:jatin.madan39@gmail.com"><img src="Images\\mail.png" alt="Couldnt Load Image" width="22px" height="16px">&nbsp  Mail Me</a><a href="map.htm" target="_blank"><img src="Images\\address.png" alt="Couldnt Load Image" width="22px" height="16px">&nbsp  Get My Address</a><a href="callto://+919711300555"><img src="Images\\call.png" alt="Couldnt Load Image" width="22px" height="16px">&nbsp  Call Me</a></div></li><li><a href="About.htm">About</a></li><li><a href="Map.htm">Location Services - Jatin</a><li>';
			break;
		case 4:
			document.getElementById("lol").innerHTML+=
				'<li style="float:right; color:white"><a href="About.htm">Jatin Madan &nbsp&nbsp<img src="Images\\download.jpg" alt="Couldn\'t Load Image" width="22px" height="16px"></a></li><li><a href="Home.htm">Home</a></li><li><a href="News.htm">News</a></li><li class="dropdown"><a href="Contact.htm" class="dropbtn">Contact</a><div class="dropdown-content"><a href="mailto:jatin.madan39@gmail.com"><img src="Images\\mail.png" alt="Couldnt Load Image" width="22px" height="16px">&nbsp  Mail Me</a><a href="map.htm" target="_blank"><img src="Images\\address.png" alt="Couldnt Load Image" width="22px" height="16px">&nbsp  Get My Address</a><a href="callto://+919711300555"><img src="Images\\call.png" alt="Couldnt Load Image" width="22px" height="16px">&nbsp  Call Me</a></div></li><li><a href="About.htm"  class="active">About</a></li><li><a href="Map.htm">Location Services - Jatin</a><li>';
			break;
	}
}