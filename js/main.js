$(document).ready(function(){

  function get_data(){
    var item_data = '{ \
      "product" : [ { "name":"Date Exotica", "img_src":"choc_flavors/date_exotica.jpg", "price":"Rs. 75"} \
          , { "name":"Chilli Chocolate", "img_src":"choc_flavors/chilli_chocolate.jpg", "price":"Rs. 75"} \
          , { "name":"Caramel Charm", "img_src":"choc_flavors/caramel_charm.jpg", "price":"Rs. 75"} \
          , { "name":"White Almond Delight", "img_src":"choc_flavors/white_almond_delight.jpg", "price":"Rs. 75"} \
          , { "name":"Celebration Pack", "img_src":"choc_packs/celebration.jpg", "price":"Rs. 75"} \
          , { "name":"Design Box", "img_src":"choc_packs/tin_box.jpg", "price":"Rs. 75"} \
          , { "name":"Window Box", "img_src":"choc_packs/window_box.jpg", "price":"Rs. 75"} \
          , { "name":"Draw Box : 12", "img_src":"choc_packs/draw_box_12.jpg", "price":"Rs. 75"} ] \
      , "flavors" : [ "Caramel Charm", "Chilli Chocolate", "Dark Almond Delight",  "Dark Almond Delight Square", "Date Exotica", "Milk Almond Delight", "Milk Almond Delight Square", "White Almond Delight", "White Almond Delight Square"] \
      , "packs" : [ "Draw Box 12", "Gold Box", "Celebration Box", "Window Box" ] \
      }'

    return item_data;
  }

  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  function loadSideBar(){

    var div_flavors = document.createElement("sideTags");
    var div_packs = document.createElement("sideTags2");

    var items = JSON.parse(get_data());

    var flavors = "";
    var packs = "";

    var anchorStart = "<a href=\"#\" class=\"w3-bar-item w3-button w3-bar-block w3-hide w3-padding-large w3-medium w3-show\">" ;
    var anchorEnd = "</a> " ;

    for (item in items.flavors){
      flavors += anchorStart ;
      flavors += items.flavors[item];
      flavors += anchorEnd ;
    }

    for (item in items.packs) {
      packs += anchorStart ;
      packs += items.packs[item];
      packs += anchorEnd ;
    }

    div_flavors.innerHTML = flavors;
    document.getElementById("generated_flavors").appendChild(div_flavors);

    div_packs.innerHTML = packs;
    document.getElementById("generated_packs").appendChild(div_packs);
  }

  function loadProducts(){

    var para = document.createElement("sideProducts");
    var items = JSON.parse(get_data());

    var i=0;
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

    for (item in items.product)
    {
      if(i%2 == 0)
      {
        text += columndiv ;
      }
      text += anchorStart ;
      text += folderPath ;

      text += items.product[item].img_src;
      text += anchr2 ;

      text += items.product[item].name;

    //  text += anchr3 ;

    //  text += items.product[item].price;
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

  onSiteLoad();
});

function displaySideBar(id) {

  var tag = "demoAcc" + id ;
  var x = document.getElementById(tag);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
