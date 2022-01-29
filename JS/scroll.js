$(window).on("scroll", function() {
  if($(window).scrollTop()+10 > $(window).height()) {
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  }
});