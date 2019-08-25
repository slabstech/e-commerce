function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function loadSideBar(){

  var para = document.createElement("sideTags");
  var para_2 = document.createElement("sideTags2");

  var flavors = [ "Caramel Charm", "Chilli Chocolate", "Dark Almond Delight",  "Dark Almond Delight Square", "Date Exotica", "Milk Almond Delight", "Milk Almond Delight Square", "White Almond Delight", "White Almond Delight Square"];
  var packs = [ "Draw Box 12", "Gold Box", "Celebration Box", "Window Box" ] ;

  var text = "";
  var text_2 = "";
  var x,x2;

  for (x in flavors) {
    text += "<a href=\"#\" class=\"w3-bar-item w3-button w3-bar-block w3-hide w3-padding-large w3-medium w3-show\">" ;
    text += flavors[x];
    text +="</a> " ;
  }

  for (x2 in packs) {
    text_2 += "<a href=\"#\" class=\"w3-bar-item w3-button w3-bar-block w3-hide w3-padding-large w3-medium w3-show\">" ;
    text_2 += packs[x2];
    text_2 +="</a> " ;
  }

  para.innerHTML = text;
  document.getElementById("generated").appendChild(para);

  para_2.innerHTML = text_2;
  document.getElementById("generated_2").appendChild(para_2);

}

function onSiteLoad(){
    loadSideBar();
}

function myAccFunc1() {

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
