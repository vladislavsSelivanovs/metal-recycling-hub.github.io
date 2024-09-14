(function () {
    $('.burger').on('click', function () {
      $('.bar').toggleClass('animate');
      var mobileNav = $('.mobile-nav');
      mobileNav.toggleClass('hide show');
    })
  })();