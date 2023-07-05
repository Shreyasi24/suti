// ! Pre Loader By Jquery

$(window).on("load", function () {
    $("#pre_Loader").fadeOut(2000);
});

// =======================<<<<<>>>>>=======================


// ! Custom Fixed NavBar

// $(function () {
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > 400) {
//             $("header").addClass("active");
//         } else {
//             $("header").removeClass("active");
//         }
//     });
// });

// =======================<<<<<>>>>>=======================


// ! Back To Top (Jquery)

let btn = $('#backToTop');
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});


// =======================<<<<<>>>>>=======================


// ! Swiper Slider (Banner Bottom Slider)

var swiper = new Swiper(".aftr_bnr_sldr", {
    slidesPerView: 5,
    spaceBetween: 50,
    slidesPerColumn: 2,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    speed: 2000,
    loop: true,
    autoHeight: false,
    calculateHeight: true,
    /*** tab fixing******/
    observer: true,
    observeParents: true,
    delay: 2500,
    time: 1000,
    navigation: {
        nextEl: ".arrow-next",
        prevEl: ".arrow-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 15,
        },

        840: {
            slidesPerView: 3,
        },

        1280: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1441: {
            slidesPerView: 5,
        },
    }
});

// =======================<<<<<>>>>>=======================

// ! Easy Responsive Tabs (Seasonal Tab)

$(document).ready(function () {
    $('#SeasonalTab').easyResponsiveTabs({
        type: 'default',
        width: 'auto',
        fit: true,
        closed: 'accordion',
        activate: function (event) {
            var $tab = $(this);
            var $info = $('#tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
});

// =======================<<<<<>>>>>=======================

// ! Swiper Slider (Seasonal Slider)

var swiper = new Swiper(".ssnl_sldr", {
    slidesPerView: 4,
    spaceBetween: 15,
    centeredSlides: false,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 2000,
    loop: true,
    autoHeight: false,
    calculateHeight: true,
    /*** tab fixing******/
    observer: true,
    observeParents: true,
    delay: 2500,
    time: 1000,
    navigation: {
        nextEl: ".ssnl-arrow-next",
        prevEl: ".ssnl-arrow-prev",
    },

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 2,
        },

        1081: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1681: {
            slidesPerView: 4,
        },
    }
});


// =======================<<<<<>>>>>=======================

// ! Easy Responsive Tabs (Popular Tab)

$(document).ready(function () {
    $('#PopularTab').easyResponsiveTabs({
        type: 'default',
        width: 'auto',
        fit: true,
        closed: 'accordion',
        activate: function (event) {
            var $tab = $(this);
            var $info = $('#tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
});

// =======================<<<<<>>>>>=======================

// ! Swiper Slider (Popular Slider)

var swiper = new Swiper(".pplr_sldr", {
    slidesPerView: 3,
    spaceBetween: 15,
    centeredSlides: false,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 2000,
    loop: true,
    autoHeight: false,
    calculateHeight: true,
    /*** tab fixing******/
    observer: true,
    observeParents: true,
    delay: 2500,
    time: 1000,
    navigation: {
        nextEl: ".pplr-arrow-next",
        prevEl: ".pplr-arrow-prev",
    },

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 2,
        },

        1081: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    }
});

// =======================<<<<<>>>>>=======================

// ! Easy Responsive Tabs (Occasion Tab)

$(document).ready(function () {
    $('#OccasnTab').easyResponsiveTabs({
        type: 'default',
        width: 'auto',
        fit: true,
        closed: 'accordion',
        activate: function (event) {
            var $tab = $(this);
            var $info = $('#tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
});

// =======================<<<<<>>>>>=======================

// ! Swiper Slider (Occasion Slider)

var swiper = new Swiper(".occsn_sldr", {
    slidesPerView: 4,
    spaceBetween: 15,
    centeredSlides: false,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 2000,
    loop: true,
    autoHeight: false,
    calculateHeight: true,
    /*** tab fixing******/
    observer: true,
    observeParents: true,
    delay: 2500,
    time: 1000,
    navigation: {
        nextEl: ".occsn-arrow-next",
        prevEl: ".occsn-arrow-prev",
    },

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 2,
        },

        1081: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1082: {
            slidesPerView: 4,
            spaceBetween: 10,
        },

    }
});


// =======================<<<<<>>>>>=======================

//Navbar Toggler

$(function () {
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").removeClass("close");
        $(this).addClass("close");
    });
});

//Navbar close when click outside

jQuery("body").bind("click", function (e) {
    if (jQuery(e.target).closest(".navbar").length == 0) {
        // click happened outside of .navbar, so hide
        var opened = jQuery(".navbar-collapse").hasClass("collapse show");
        if (opened === true) {
            jQuery(".navbar-collapse").collapse("hide");
        }
    }
});
