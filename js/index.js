$(document).ready(function() {
    AOS.init();

    let checkbox = $('.header-bottom-wrap-offer-form__checkbox');
    let input = $('.header-bottom-wrap-offer-form__checkbox-hidden');

    checkbox.on('click', function () {
      if (input.prop('checked') == true) {
        input.prop('checked', false);
      } else {
        input.prop('checked', true);
      }
    });

    //HEADER-TOP SCROLL
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
        $(".header-top").addClass("fixed");
        } else {
        $(".header-top").removeClass("fixed");
        }
    });

    //INPUT MASK
    $("input[name=user-tel]").inputmask("+7(999)999-99-99");

    //FAQ
    $('.faq-list-card-top').on('click', function() {
      $(this).toggleClass('active');
    $(this).parent().find('.faq-list-card-bottom').slideToggle();
    });

    //REVIEWS
    $('.reviews-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      items: 1,
    });

    //TIMER
    $('#counter').timer({
      countdown: true,
      duration: '29d2h35m',
      format: '%d : %h : %m'
    });

    $('#counter1').timer({
      countdown: true,
      duration: '29d2h35m',
      format: '%d : %h : %m'
    });

    //WORKS
    $('.works-buttons__btn').on('click', function() {
      $('.works-buttons__btn').removeClass('active');
      $('.works-case').hide();

      let target = $(this).attr('data-target');

      $(this).addClass('active');
      $('.works-case[data-target='+ target +']').show();
    });

    //POPUP
    $('.header-top__btn').on('click', function() {
      $('.popup-container').show().css('display', 'flex');
    });
  
    $('.popup-overlay').on('click', function() {
      $('.popup-container').hide();
    });
  
    $('.popup__close').on('click', function() {
      $('.popup-container').hide();
    });

    //SEND FORM
    $('.popup-form').on('submit', function () {
      let user_name = $(this).find('input[name=user-name]').val();
      let user_tel = $(this).find('input[name=user-tel]').val();

      $.ajax({
          url: "send.php",
          type: "post",
          dataType: "json",
          data: {
              "user_name": user_name,
              "user_tel": user_tel,
          },
          success: function (data) { }
      });

      $('.popup-container').hide();
      
      $(this)[0].reset();
      return false;
    });

    $('.header-bottom-wrap-offer-form').on('submit', function () {
      let user_name = $(this).find('input[name=user-name]').val();
      let user_tel = $(this).find('input[name=user-tel]').val();

      $.ajax({
          url: "send.php",
          type: "post",
          dataType: "json",
          data: {
              "user_name": user_name,
              "user_tel": user_tel,
          },
          success: function (data) { }
      });
            
      $(this)[0].reset();
      return false;
    });

});
