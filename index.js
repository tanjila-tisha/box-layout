

const characters = "abcdefghijklmnopqrstuvwxyz 0123456789 ";

//Generate ramdom body text

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Re-order boxes after add/delete
function reorder_boxes() {
  $(".box").each(function (i) {
    $(this)
      .find(".box-number")
      .text(i + 1);
  });
}

// Adding a new box
jQuery("body").delegate(".box", "click", function (e) {
  e.stopPropagation();
  let bodytext = generateString(Math.floor(Math.random() * 120) + 50);
  $(this).after(
    '<div class="box">'+
      '<div class="box-inner">'+
        '<div class="box-header">'+
          '<span class="box-number">1</span>'+
          '<span class="box-delete">X</span>'+
        '</div>'+
        '<div class="box-content">'+
          '<div class="box-title">This is title</div>'+
          '<div class="box-body">' +
            bodytext +
        '</div>'+
      '</div>'+
    '</div>'
  );
  reorder_boxes();
});

// Deleting box
jQuery("body").delegate(".box .box-delete", "click", function (e) {
  $(this).parents(".box").remove();
  reorder_boxes();
});

// Adding hover cless to container 1 & 2
jQuery("body").delegate(".box", "mouseover mouseleave", function (e) {
  if (e.type == "mouseover") {
    $(this).parents(".container1").addClass("hovered");
    $(this).parents(".container2").addClass("hovered");
  } else if (e.type == "mouseleave") {
    $(this).parents(".container1").removeClass("hovered");
    $(this).parents(".container2").removeClass("hovered");
  }
});
