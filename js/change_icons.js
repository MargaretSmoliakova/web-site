
// The constructor function which creats objects with properties and methods (change values of src attributes)

function changeIcon(additionalPath, idName) {
    this.additionalPath = additionalPath;
    this.idName = idName;
    this.mainPath = "images/icons/";
    
    this.setSrcAttribute = function() {
        var exactPathImage = this.additionalPath + this.mainPath + this.idName + "_2.png";
        var el = document.getElementById(idName);
        el.setAttribute("src", exactPathImage);
    };
    this.setSrcAttributeBack = function () {
        var exactPathImage = this.additionalPath + this.mainPath + this.idName + ".png";
        var el = document.getElementById(idName);
        el.setAttribute("src", exactPathImage);
    };
}

// Creating the function which displays changed icons

function displayChangeIcon (additionalPath, idName) {
    var el = document.getElementById(idName);
    var object = new changeIcon(additionalPath, idName);

    el.addEventListener("mouseover", function() {
       object.setSrcAttribute();
    }, false);

    el.addEventListener("mouseout", function() {
        object.setSrcAttributeBack();
    }, false);
}

// Check if the target page is the home page

if (document.getElementById("home_page")) {
    displayChangeIcon("", "basket");
    displayChangeIcon("", "write_message");
    displayChangeIcon("", "sign_up");
    displayChangeIcon("", "log_in");
} else {
    displayChangeIcon("../", "basket");
    displayChangeIcon("../", "write_message");
    displayChangeIcon("../", "sign_up");
    displayChangeIcon("../", "log_in");
}

