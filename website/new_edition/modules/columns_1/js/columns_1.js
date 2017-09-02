var columns_1 = document.querySelectorAll(".columns_1");


var columns_1_lenght_class_list = ["columns_1__2", "columns_1__3", "columns_1__4", "columns_1__5", "columns_1__6"];

function classToNum(x) {
  for (j = 0; j < columns_1_lenght_class_list.length; j++) {
    if (x.includes(columns_1_lenght_class_list[j]) === true) {
      return j+2;
    };
  };
  return 1;
};

doWhenResize();

window.addEventListener("resize", doWhenResize);

function doWhenResize() {

for(i = 0; i < columns_1.length; i++) {
  var columns_1_w = columns_1[i].getBoundingClientRect().width;

  var columns_1__column = columns_1[i].querySelectorAll(".columns_1__column");
  var columns_1__divider = columns_1[i].querySelectorAll(".columns_1__divider");

  var columns_1__divider_w = 0;

  if (columns_1__divider.length !== 0) {
    columns_1__divider_w = columns_1__divider[0].getBoundingClientRect().width;
  };

  if (columns_1__column.length !== 0) {

    var columns_1__divider_num = columns_1__divider.length;
    var columns_1__column_num = 0;
  
    for (k = 0; k < columns_1__column.length; k++) {
      columns_1__column_num += classToNum(columns_1__column[k].getAttribute("class"));
    };

    var columns_1__column_w = (columns_1_w - columns_1__divider_num*columns_1__divider_w)/columns_1__column_num;

    for (a = 0; a < columns_1__column.length; a++) {
      columns_1__column[a].setAttribute("style", "width: " + columns_1__column_w*classToNum(columns_1__column[a].getAttribute("class")) + "px");
    };

  };
};

};