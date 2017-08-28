var columns_1 = document.querySelectorAll(".columns_1");

/*Check if this javascript already applied once*/


for (i=0; i < columns_1.length; i++) {

  var columns_1_class = columns_1[i].getAttribute("class");

  if (columns_1_class.includes("columns_1_done") === false ) {

    var columns_1__column = columns_1[i].querySelectorAll(".columns_1__column");
    var columns_1__divider = columns_1[i].querySelectorAll(".columns_1__divider");

    if (columns_1__divider.length !== 0) {

      var columns_1_width = columns_1[i].getBoundingClientRect().width;
      var columns_1__column_number = columns_1__column.length;
      var columns_1__divider_number = columns_1__divider.length;
      var columns_1__divider_width = columns_1__divider[0].getBoundingClientRect().width;
      var columns_1__column_width = (columns_1_width - columns_1__divider_number*columns_1__divider_width)/columns_1__column_number;

      for (j=0; j < columns_1__column.length; j++) {
        columns_1__column[j].setAttribute("style","width: " + columns_1__column_width+"px");
      };
    } else {
      var columns_1_width = columns_1[i].getBoundingClientRect().width;
      var columns_1__column_number = columns_1__column.length;
      var columns_1__column_width = columns_1_width/columns_1__column_number;

      for (j=0; j < columns_1__column.length; j++) {
        columns_1__column[j].setAttribute("style","width: " + columns_1__column_width+"px");
      };
    }

    columns_1[i].setAttribute("class", columns_1_class + " columns_1_done");
  };
};