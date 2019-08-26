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

  var anchorStart = "<a href=\"#\" class=\"w3-bar-item w3-button w3-bar-block w3-hide w3-padding-large w3-medium w3-show\">" ;
  var anchorEnd = "</a> " ;

  for (x in flavors) {
    text += anchorStart ;
    text += flavors[x];
    text += anchorEnd ;
  }

  for (x2 in packs) {
    text_2 += anchorStart ;
    text_2 += packs[x2];
    text_2 += anchorEnd ;
  }

  para.innerHTML = text;
  document.getElementById("generated").appendChild(para);

  para_2.innerHTML = text_2;
  document.getElementById("generated_2").appendChild(para_2);
}

function loadProducts(){

  var para = document.createElement("sideProducts");

  var i=0;
  var product_image = [ "choc_flavors/date_exotica.jpg", "choc_flavors/chilli_chocolate.jpg", "choc_flavors/caramel_charm.jpg", "choc_flavors/white_almond_delight.jpg", "choc_packs/celebration.jpg", "choc_packs/tin_box.jpg", "choc_packs/window_box.jpg", "choc_packs/draw_box_12.jpg"];
  var product_name = ["Date Exotica", "Chilli Chocolate", "Caramel Charm", "White Almond Delight", "Celebration Pack", "Design Box", "Window Box", "Draw Box : 12"] ;
  var product_cost = ["$19.99", "$19.99", "$24.99", "$20.50" , "$20.50", "$14.99" , "$14.99", "$24.99"];
  var text = "";
  var text_2 = "";
  var x,x2;



  var folderPath = "w3images/products/"

  var columndiv = "<div class=\"w3-col l3 s6\">";
  var anchorStart = "<div class=\"w3-container\"> <img style=\"width:100%\" src=\"" ;


  var anchr2 = "\"><p>";

  var anchr3 = "<br><b>" ;

  var anchrLast = "</b></p> </div>";

  var columndivEnd = "</div>";

  // TODO additional hover code
  /*
    var anchorStartAdd = " <div class=\"w3-display-container\" >" ;

  var anchorEnd = "\"> <span class=\"w3-tag w3-display-topleft\">New</span> <div class=\"w3-display-middle w3-display-hover\"> " ;

  var anchr2Add = "<button class=\"w3-button w3-black\">Buy now <i class=\"fa fa-shopping-cart\"></i></button> </div> </div> ";
  */

  for (x in product_image) {
    if(i%2 == 0)
    {
      text += columndiv ;
    }
    text += anchorStart ;
    text += folderPath ;

    text += product_image[x];
    text += anchr2 ;

    text += product_name[x] ;

    text += anchr3 ;

    text += product_cost[x];
    text += anchrLast ;

    if(i%2 != 0)
    {
      text += columndivEnd ;
    }

    i++ ;
  }

  para.innerHTML = text;
  document.getElementById("generated_products").appendChild(para);

}

function onSiteLoad(){
    loadSideBar();
    loadProducts();
}

function displaySideBar(id) {

  var tag = "demoAcc" + id ;
  var x = document.getElementById(tag);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
