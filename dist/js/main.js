$(document).ready(function () {
  //======Menu mobile
  $("#my-menu").mmenu({
    extensions: ['pagedim-black', 'position-left'],
    navbar: {
      title: "Машзавод"
    }
  }, {
    offCanvas: {
      pageSelector: "#my-wrapper"
    }
  });

  var $menu = $("#my-menu")
  var $icon = $("#my-icon");
  var API = $menu.data("mmenu");

  $icon.on("click", function () {
    API.open();
  });

  API.bind("open:finish", function () {
    setTimeout(function () {
      $icon.addClass("is-active");
      $("html").addClass("lock");
    }, 100);
  });
  API.bind("close:finish", function () {
    setTimeout(function () {
      $icon.removeClass("is-active");
      $("html").removeClass("lock");
    }, 100);
  });



  //======= HRADER SCROLL
  $(window).on("scroll", function () {
    let scrolled = $(this).scrollTop();
    let heightHeader = $(".header").innerHeight();
    if (scrolled > heightHeader) {
      $(".header").addClass("scrolled");
      $(".header").next().addClass("scrolled");
    }
    if (scrolled <= heightHeader) {
      $(".header").removeClass("scrolled");
      $(".header").next().removeClass("scrolled");
    }
  });


  //====SLIDER
  $(".promo__image").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $(".promo__arrow"),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          appendArrows: $(".promo__image"),
        },
      },
    ],
  });

  $(".partners__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".reviews__slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".blog__slider").slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    appendArrows: $(".blog__trigger"),
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".content__slider-big").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // variableWidth: true,
    asNavFor: ".content__slider-small",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          variableWidth: false,
        },
      },
    ],
  });

  $(".content__slider-small").slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    // variableWidth: true,
    asNavFor: ".content__slider-big",
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          variableWidth: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          variableWidth: false,
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".watch__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".similar__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //=====CATEGORIES
  $(".categories__name").on("click", function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });
  $(".categories__item").on("click", function () {
    $(".categories__item").removeClass("current");
    $(this).addClass("current");
  });

  //=====CATEGORIES MOBILE
  $(".product__mobli-filter").on("click", function () {
    $(".categories").addClass("open");
    $("body").addClass("lock");
  });

  $(".categories__mobil-name > span").on("click", function () {
    $(".categories").removeClass("open");
    $("body").removeClass("lock");
  });

  //=======TABS

  $(".tabs__button").on("click", function (e) {
    e.preventDefault();
    $(".tabs__item").removeClass("active");
    $(".tabs__button").removeClass("active");

    $(this).addClass("active");
    $($(this).attr("href")).addClass("active");
  });

  $(".tabs__button:first").click();

  //===============ANIMATION SCROLL======================
  const animItems = $(".anim-items");

  if (animItems.length > 0) {
    $(window).on("scroll", animOnScroll);
    function animOnScroll() {
      $.each(animItems, function (index, val) {
        const animItem = animItems.eq(index);
        const animItemHeight = animItem.innerHeight();
        const animItemOffset = animItem.offset().top;
        const animStart = 10;

        let animItemPoint = $(window).height() - animItemHeight / animStart;

        if (animItemHeight > $(window).height()) {
          animItemPoint = $(window).height() - $(window).height() / animStart;
        }

        if ($(window).scrollTop() > animItemOffset - animItemPoint && $(window).scrollTop() < animItemOffset + animItemHeight) {
          animItem.addClass("animate");
        } else {
          if (!animItem.hasClass("anim-no-scrollTop")) {
            animItem.removeClass("animate");
          }
        }
      });
    }
    setTimeout(animOnScroll, 0);
  }

  //======= SPINNUBER
  let countbox = ".contact__column";
  let show = true;
  if ($(countbox).length) {
    $(window).on("scroll load resize", function () {
      if (!show) return false;
      let w_top = $(window).scrollTop();
      let e_top = $(countbox).offset().top;
      let w_height = $(window).height();
      let d_height = $(document).height();
      let e_height = $(countbox).outerHeight();

      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $(".contact__text-1 b").spincrement({
          thousandSeparator: "",
          duration: 3000,
        });

        show = false;
      }
    });
  }

  //====== MACH
  let match = [window.matchMedia("(min-width: 993px)"), window.matchMedia("(min-width: 769px)")];
  function movingNav() {
    if (!match[0].matches) {
      $(".header__column-1").append($(".nav__item.js-move"));
      $(".promo__image").append($(".promo__prev"));
      $(".promo__image").append($(".promo__next"));
    } else {
      $(".nav").append($(".nav__item.js-move"));
      $(".promo__arrow").append($(".promo__prev"));
      $(".promo__arrow").append($(".promo__next"));
    }
  }
  match[0].addListener(movingNav);
  movingNav();

  function movingText() {
    if (!match[1].matches) {
      $(".preview__column-2").append($(".preview__text-1"));
      if (!$(".advantages__row").hasClass("slick-initialized")) {
        $(".advantages__row").slick({
          slidesToShow: 2,
          slidesToScroll: 2,
          responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],

        });
      }


    } else {
      $(".preview__column-1").append($(".preview__text-1"));
      if ($(".advantages__row").hasClass("slick-initialized")) {
        $(".advantages__row").slick("unslick");
      }
    }
  }
  match[1].addListener(movingText);
  movingText();


  //======== ANIMATION ANCHOR

  $('.js-anchor[href^="#form-contact"]').click(function () {
    let target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 150,
      },
      800
    );
    return false;
  });

  //======= INPUT MASK
  $("input[type=tel]").inputmask({
    mask: "+7 (Z99) 999-99-99",
    definitions: {
      Z: {
        validator: "[0-6,9]",
      },
    },
  });

  //=======SELECT

  $("select").niceSelect();

  //======= MODAL

  $(".js-modal").on("click", function (e) {
    e.preventDefault();
    API.close();
    $(".popap__overlay").fadeIn();
    $(".popap").fadeIn().css("display", "flex");
    if (!$(".header__burger").hasClass("active")) {
      $("body").addClass("lock");
      $("html").addClass("lock");
    }
  });

  $(".js-modal-close, .popap__overlay").on("click", function (e) {
    $(".popap").fadeOut(100);
    $(".popap__overlay").fadeOut(100);

    if (!$(".header__burger").hasClass("active")) {
      $("body").removeClass("lock");
      $("html").removeClass("lock");
    }
  });

  $(".popap__city").on("click", function () {
    $(".popap__youcity span").text($(this).text());
    $(".header__city-text span").text($(this).text());
  });

  //======SEARCH SITY

  $("#search").on("keyup", function () {
    //2
    let value = $(this).val().toLowerCase(); //3
    $(".popap__item ").filter(function () {
      //4
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1); //5
    });

    if (!$(".popap__city").is(":visible")) {
      $(".popap__text").css({ display: "block" });
    } else {
      $(".popap__text").css({ display: "none" });
    }
  });

  //=======GALLERY

  $("#lightgallery").lightGallery({
    selector: 'a'
  });

  //======Sroller

  $(window).scroll(function (e) {
    if ($(this).scrollTop() > 0) {
      $('#scroller').fadeIn();
    } else {
      $('#scroller').fadeOut();
    }
  });
  $('#scroller').click(function (e) {
    e.preventDefault();
    $('body,html').animate({ scrollTop: 0 }, 400);
  });


  $(".js-show-modal").on("click", function (e) {
    e.preventDefault();
    $(`#${$(this).attr("data-form")}`).addClass("active");
    $("body").addClass("lock");
  })

  $(".form-modal__close, .modal__overlay").on("click", function () {
    $(this).parents(".modal").removeClass("active");
    $("body").removeClass("lock");
  })

  $.each($(".nav__drop-menu-item"), function (index, val) {
    if ($(val).find(".nav__drop-menu").length > 0) {
      $(val).children("a").append("<span></span>");

    }
  })

});
