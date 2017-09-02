var shelves__css_applayed = document.querySelector(".shelves__css_applayed");
var shelves__responsive_slide = document.querySelector(".shelves__responsive_slide");
var main = document.querySelector("main");
var aside = document.querySelector("aside");

/*Only if applied shelves-layout_600.css
shelves__css_applayed.getBoundingClientRect().width === 1*/
/*!!! Can be done better ?*/

/*Popup when present first transition*/
/*!!! Do better*/
if(shelves__css_applayed.getBoundingClientRect().width === 1) {
  window.alert("To scroll 'aside' just click on it. Return to 'main' also - just click on it.");
};

function shelves__responsive_slide_MvRight () {
  shelves__responsive_slide.setAttribute("style", "right: 0;");
};

function shelves__responsive_slide_MvLeft () {
  shelves__responsive_slide.setAttribute("style", "right: 50%;");
};

/*!!! Add a hint for the user for this actions*/
main.addEventListener("click", function() {
  if(shelves__css_applayed.getBoundingClientRect().width === 1) {
    shelves__responsive_slide_MvRight();
  };
});

aside.addEventListener("click", function() {
  if(shelves__css_applayed.getBoundingClientRect().width === 1) {
    shelves__responsive_slide_MvLeft();
  };
});

/*
var setTime_1;
var setTime_2;

main.addEventListener("mouseover", function() {
  if(shelves__css_applayed.getBoundingClientRect().width === 1) {
    setTime_1 = setTimeout(shelves__responsive_slide_MvRight , 3000);
  }
});
main.addEventListener("mouseleve", function() {
  clearTimeout(setTime_1);
});


aside.addEventListener("mouseover", function() {
  if(shelves__css_applayed.getBoundingClientRect().width === 1) {
    setTime_2 = setTimeout(shelves__responsive_slide_MvLeft , 3000);
  }
});
aside.addEventListener("mouseleve", function() {
  clearTimeout(setTime_2);
});
*/