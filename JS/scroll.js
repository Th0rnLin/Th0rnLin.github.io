$(window).on("scroll", function() {
  if($(window).scrollTop()+5 > $(window).height()) {
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  }
});