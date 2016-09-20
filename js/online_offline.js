
var today = new Date();
var hourNow = today.getHours();
var online_offline;
var text_online_offline; 

if (hourNow < 8 || hourNow > 20) {
	if (document.getElementById("home_page")) {
        online_offline = "images/icons/offline.png";
    } else {
        online_offline = "../images/icons/offline.png";
    }
    text_online_offline = "Offline"; 
}  else {
    if (document.getElementById("home_page")) {
        online_offline = "images/icons/online.png";
    } else {
        online_offline = "../images/icons/online.png";
    }
	text_online_offline = "Online"; 
}

var elImage = document.getElementById("online_offline");
elImage.setAttribute("src", online_offline);

var elText = document.getElementById("text_online_offline");
elText.textContent = text_online_offline;
