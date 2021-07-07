$(".tabs .tab").click(function () {
  var i = $(this).index();
  $(this).addClass("active").siblings().removeClass("active"), $(".hijack").eq(i).show().siblings(".hijack").hide()
});