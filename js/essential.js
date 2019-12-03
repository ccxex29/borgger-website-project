$(function () {
  $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
  trigger: 'focus'
})

$("#modalAd").on('hidden.bs.modal', function (e) {
    $("#modalAd iframe").removeAttr('src');
});