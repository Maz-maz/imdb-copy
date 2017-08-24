/*Some javascript for some styling and functionality of navigation menu of the header*/
/*!!! This code can be done better true using "Element.querySelector()"*/

/*Get navigation menu buttons*/
var navMenuTabs = document.querySelectorAll(".nav_menu__buttons");
/*Get <p> inside navigation menu tabs*/
var navMenuPara = document.querySelectorAll(".nav_menu__buttons > p");
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

/*Make all <li> in "#nav_menu" the same*/
for (i = 0; i < navMenuTabs.length; i++) {
  navMenuTabs.item(i).style.height = paraMaxH + "px";
}

/*Get navigation menu dividers*/
var navMenuDivs = document.querySelectorAll(".nav_menu__divider");
/*Get navigation menu <ul>*/
var navMenuUl = document.querySelector(".nav_menu");
/*Height of navigation menu <ul> with padding and border*/
var navMenuUlHe = navMenuUl.getBoundingClientRect().height;
/*Make all dividers in "#nav_menu" the same height*/
for (i = 0; i < navMenuDivs.length; i++) {
  navMenuDivs.item(i).style.height = navMenuUlHe + "px";
}


/*Script for response action to hovering of nav_menu buttons*/

/*Get div for sub navigation menu*/
var navMenuSubD = document.querySelectorAll(".nav_menu__sub_nav");
/*Put them all below the navigation buttons. This will work only 
if navigation <li> elements don't have borders*/
for (i = 0; i < navMenuSubD.length; i++) {
  navMenuSubD.item(i).style.top = navMenuUlHe + "px";
}