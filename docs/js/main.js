$(document).ready(function () {
  var header = new Headhesive(".navbar", {
    offset: 500,
  });

  $("[data-modal-show]").click(function () {
    var id = $(this).attr("data-modal-show");
    $('[data-modal="' + id + '"]').show();
  });
  $("[data-modal-close]").click(function () {
    var id = $(this).attr("data-modal-close");
    $('[data-modal="' + id + '"]').hide();
  });

  $('input[name="phoneinput"]').mask("+7 (999) 999-9999");
});
