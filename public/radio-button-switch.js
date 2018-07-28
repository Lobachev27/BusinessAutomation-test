$(document).ready(function() {
  $("label").on("click", function() {
    $(this)
      .addClass("button--active")
      .siblings()
      .removeClass("button--active");
  });
});
