/*Some javascript for some styling and functionality of navigation menu of the header*/
/*!!! This code can be done better true using "Element.querySelector()"*/

/*Get navigation menu tabs*/
var navMenuTabs = document.querySelectorAll("#nav_menu li");
/*Get <p> inside navigation menu tabs*/
var navMenuPara = document.querySelectorAll("#nav_menu li p");
/*Maximum height of <p>*/
var paraMaxH = 0;

/*Find maximum height of <p> from "navMenuPara"*/
/*Because of using "getBoundingClientRect().height", below code,
to work properly need that <p> (navMenuPara elements) don't have padding and borders*/
for (i = 0; i < navMenuPara.length; i++) {
  var paraH = navMenuPara.item(i).getBoundingClientRect().height;
  if (paraMaxH < paraH) {
    paraMaxH = paraH;
  }
}

/*Make all <li> in "#nav_menu" the same height*/
for (i = 0; i < navMenuTabs.length; i++) {
  navMenuTabs.item(i).style.height = paraMaxH + "px";
}

/*Get navigation menu dividers*/
var navMenuDivs = document.querySelectorAll("#nav_menu ul div.nav_menu_divider");
/*Get navigation menu <ul>*/
var navMenuUl = document.querySelector("#nav_menu ul");
/*Height of navigation menu <ul> with padding and border*/
var navMenuUlHe = navMenuUl.getBoundingClientRect().height;
/*Make all divs in "#nav_menu" the same height*/
for (i = 0; i < navMenuDivs.length; i++) {
  navMenuDivs.item(i).style.height = navMenuUlHe + "px";
}

/*Get div for sub navigation menu*/
var navMenuSubD = document.querySelectorAll("header #nav_menu li div.sub_nav ");
/*Put them all below the navigation buttons. This will work only 
if navigation <li> elements don't have borders*/
for (i = 0; i < navMenuSubD.length; i++) {
  navMenuSubD.item(i).style.top = navMenuUlHe + "px";
}

/*Change something when hover the <li> of the nav menu*/
/*!!! Add here time delay.*/
for (i = 0; i < navMenuTabs.length; i++) {
  $(navMenuTabs.item(i)).hover(function(e){
    this.querySelector("div.sub_nav").style.display = "block";
    }, function(){
    this.querySelector("div.sub_nav").style.display = "none";
    /*!!!Strange but if take awey mouse pointer from button of nav menu, 
    but put it on the div#sub_nav then this dir does not disappear 
    like was predicted. Dont knew if this will be 
    always present, but for now let it be like that. This is that 
    what is needed but maybe it will doesn't work in some near future.*/
  });
}