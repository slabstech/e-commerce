function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}
function myAccFunc1() {

/*  var para = document.createElement("sideTagsFlavor");
  para.innerHTML = "<a href=\"#\" class=\"w3-bar-item w3-button w3-bar-block w3-hide w3-padding-large w3-medium w3-show\">Caramel ssCharm</a> ";
  document.getElementById("generated").appendChild(para);
*/
  //Use recplace Child for handling data

  var x = document.getElementById("demoAcc1");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function myAccFunc2() {
  var x = document.getElementById("demoAcc2");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function myAccFunc3() {
  var x = document.getElementById("demoAcc3");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }

function sideTags() {
  var para = document.createElement("sideTagsFlavor");
  para.innerHTML = "<a href=\"#\" class=\"w3-bar-item w3-button\">Caramel Charm</a> <a href=\"#\" class=\"w3-bar-item w3-button\">Chilli Chocolate</a> <a href=\"#\" class=\"w3-bar-item w3-button\">Dark Almond Delight</a>";
  document.getElementById("choc_flavors").appendChild(para);
}
}
