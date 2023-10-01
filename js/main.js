$(document).ready(function () {

    $('header .navbar-toggler').click(function(e){
        $('header .navbar-toggler').toggleClass('open');
          e.stopPropagation();
          if($('header .navbar-toggler').hasClass('open')){
            $('header .collapse').css('display', 'block');
              $('header .menu_wrapper').animate({right: '0px'}, 300, 'linear');
              $('body').css('overflow-y', 'hidden');
          }
          else{
            // $('header .collapse').css('display', 'none');
              $('header .menu_wrapper').animate({right: '-100%'}, 300, 'linear');
              $('body').css('overflow-y', 'auto');
          }
      });
      

  var a = 0;
  $(window).scroll(function () {
    var oTop = $("#counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-number");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 850,
            easing: "swing",
            step: function () {
              //$this.text(Math.ceil(this.countNum));
              $this.text(Math.ceil(this.countNum).toLocaleString("en"));
            },
            complete: function () {
              $this.text(Math.ceil(this.countNum).toLocaleString("en"));
              //alert('finished');
            },
          }
        );
      });
      a = 1;
    }

    let header = $("header"),
      headHeight = header.height(),
      scroll = $(this).scrollTop();

    if (scroll > headHeight) {
      header.addClass("fixed animate__fadeInDownBig");
    } else {
      header.removeClass("fixed animate__fadeInDownBig");
    }
  });
});
