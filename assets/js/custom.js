/* JS FRAMEWORK
versione 4.0 by Newwave srl - http://www.newwwave-media.it/
*/

//*************************
// LOADING
//*************************
function loading() {
    jQuery('#loader').addClass('nascosto');
}


//*************************
// START
//*************************
function start() {
    loading();
    lazyload();
    wow();
    menu();
    //gallery();
    fancyPop();
    testimonialsSwiper();
    featuredSwiper();
    emozioniSwiper();
    aside_panel();

    //var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    function isTouchDevice() {
        return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
    }

    if( !isTouchDevice() ) {
        init_pointer('#cursor');
    }
}


//***********************
// MENU
//*************************
function menu() {
    
    jQuery('#hamburger').click(function () {
        jQuery('#drawer').addClass('in');
        jQuery('body').addClass('noscroll');

        jQuery("#fig_base").fadeIn(360);

        jQuery('#fig_base .lazy').Lazy({
            scrollDirection: 'vertical',
            effect: 'fadeIn',
            effectTime: 750,
            visibleOnly: false,
        });

        return false;
    });

    jQuery('#hamburger_close, #drawer_overlay').click(function () {
        jQuery('#drawer').removeClass('in');
        jQuery('body').removeClass('noscroll');
        return false;
    });
  
    drawer_image();    
    
    
    var myHeader = document.querySelector("header");
    var headroom  = new Headroom(myHeader,{
        "offset": 100,
    });
    headroom.init();
    
}

//*************************
// DRAWER IMAGE
//*************************
function drawer_image() {
    jQuery('#drawer_navbar .fig-link').on({
        mouseenter: function () {
            $this = jQuery(this);
            $fig_ID = "#"+$this.data('figure');

            jQuery('#drawer .figures li').not($fig_ID).fadeOut(360);
            jQuery($fig_ID).fadeIn(360);

            jQuery($fig_ID+' .lazy').Lazy({
                scrollDirection: 'vertical',
                effect: 'fadeIn',
                effectTime: 750,
                visibleOnly: false,
            });
            
            jQuery($fig_ID+' .img-fluid').removeClass('lazy');
            
        },
        // mouseleave: function () {
        //     jQuery($fig_ID).fadeOut(360);
        // }
    });
    
    jQuery('#drawer_navbar').on({
        mouseenter: function () {
            jQuery("#fig_base").fadeOut(360);
        },
        mouseleave: function () {
            jQuery('#drawer .figures li').fadeOut(360);
            jQuery("#fig_base").fadeIn(360);
        }
    });  
}


//*************************
// ASIDE PANEL
//*************************
function aside_panel() {
//    jQuery('.aside').on({
//        mouseenter: function () {
//            $this = jQuery(this);
//            $panel_ID = "#"+$this.attr("id")+"_panel";
//            jQuery($panel_ID).addClass('in');
//            jQuery($this).addClass('in');
//        },
//        mouseleave: function () {
//            $this = jQuery(this);
//            $panel_ID = "#"+$this.attr("id")+"_panel";
//            jQuery($panel_ID).removeClass('in');
//            jQuery($this).removeClass('in');
//        }
//    });
    
    jQuery('.aside').on('mouseenter mouseleave', function () {
        $this = jQuery(this);
        $panel_ID = "#"+$this.attr("id")+"_panel";
        jQuery($panel_ID).toggleClass('in');
        jQuery($this).toggleClass('in');
    });
    
}



//***********************
// LAZYLOAD
//*************************
function lazyload() {
	jQuery('.lazy').Lazy({
		scrollDirection: 'vertical',
	    effect: 'fadeIn',
	    effectTime: 750,
	    visibleOnly: true
	    //delay: 3000
	    //removeAttribute: false
    })
}


//***********************
// WOW
//*************************
function wow() {
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 50, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();
}


//*************************
// SMOOTH SCROLL
//*************************
function smooth_scroll() {
    jQuery('.scroll').click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });
}


//*************************
// FANCYBOX
//*************************
function fancyPop() {

	jQuery(".gallery-link").fancybox({
        baseClass: 'fancybox-nw',
        hash: false,
        loop: true,
        gutter: 50,
        buttons: [
            //"zoom",
            //"share",
            //"slideShow",
            //"fullScreen",
            //"download",
            //"thumbs",
            "close"
        ],
    });

//    jQuery("[data-fancybox]").fancybox({
//        // Options will go here
//    });

}


//*************************
// SWIPER
//*************************
function testimonialsSwiper() {
    var testimonialsSwiper = new Swiper('.testimonials .swiper', {
        loop: true,
        effect: 'fade',
        speed: 1000,
        simulateTouch: false,
        preloadImages: false,
        lazy: {
            loadPrevNext: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}


function featuredSwiper() {
    var featuredSwiper = new Swiper('.featured .swiper', {
        loop: false,
        effect: 'slide',
        speed: 1000,
        slidesPerView: 'auto',
        spaceBetween: 30,
        grabCursor: true,
        preloadImages: false,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 9,
        },
    });
}




//*************************
// GRID MASONRY
//*************************
function gallery() {
    var $grid = jQuery('.gallery-grid').isotope({
        itemSelector: '.item',
        masonry: {
            columnWidth: '.grid-sizer',
            gutter: 0
        }
    });
}




//*************************
// EMOZIONI
//*************************
function emozioniSwiper() {
    var emozioniSwiper = new Swiper ('#emozioni_swiper .swiper', {
        direction: 'vertical',
        speed: 600,
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        parallax: true,
        effect: 'creative',
        creativeEffect: {
            prev: {
                translate: [0, 0, -400],
            },
            next: {
                translate: [0, '100%', 0],
            },
        },
        preloadImages: false,
        mousewheel: false,
        shortSwipes: false,
        simulateTouch: true,
        allowTouchMove: false,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 1,
        },
        on: {
//            click: function() {
//                emozioniSwiper.slideNext();
//            },
            afterInit: function () {
                audioEmozioni();
            },
        },
    });
    
    jQuery( ".emz-prev" ).click(function() {
        emozioniSwiper.slidePrev();
    });
    
    jQuery( ".emz-next" ).click(function() {
        emozioniSwiper.slideNext();
    });
    
    jQuery( ".emz-btn" ).click(function() {
        $target = jQuery(this).attr('data-target');
        jQuery($target).fadeIn();
    });
    
    jQuery( ".pop-emz" ).click(function() {
        jQuery(this).fadeOut();
    });
    
    
    
}





//*************************
// TOGGLE PLAY AUDIO
//*************************
function audioEmozioni() {
    var audioElement= document.getElementById("audio_emozioni");
    var audioToggle= document.getElementById("sound_toggle");
    
    
    //provo a riprodurre se non Mobile
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    if(!isMobile) {
        
        audioElement.play();
        audioToggle.classList.add("playing");
        
        jQuery("#emozioni_skip").click(function () {
            audioElement.play();
            audioToggle.classList.add("playing");
            audioToggle.setAttribute("data-cursor", "pause")
        });
        
    }
}


function togglePlay() {
    var audioElement= document.getElementById("audio_emozioni");
    var audioToggle= document.getElementById("sound_toggle");
    
    if (audioElement.paused) {
        audioElement.play();
        audioToggle.classList.add("playing");
        audioToggle.setAttribute("data-cursor", "pause")
    }
    else {
        audioElement.pause();
        audioToggle.classList.remove("playing");
        audioToggle.setAttribute("data-cursor", "play")
    }
};


//*************************
// CURSOR
//*************************
function init_pointer(target) {
    
    jQuery(target).fadeIn(1000);
    
    var mouseX = window.innerWidth / 2,
        mouseY = window.innerHeight / 2;

    var circle = {
        el: $(target),
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        w: 80,
        h: 80,
        update: function () {
            l = this.x - this.w / 2;
            t = this.y - this.h / 2;
            this.el.css({
                'transform': 'translate3d(' + l + 'px,' + t + 'px, 0)'
            });
        }
    }

    jQuery(window).mousemove(function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    })

    setInterval(move, 1000 / 60)

    function move() {
        circle.x = lerp(circle.x, mouseX, 0.1);
        circle.y = lerp(circle.y, mouseY, 0.1);
        circle.update()
    }

    function lerp(start, end, amt) {
        return (1 - amt) * start + amt * end
    }
    
    
    cursor = document.querySelector(target);
    
    jQuery("[data-cursor]").on("mouseenter mouseleave mousedown mouseup", (function (t) {
        jQuery(this);
        var e = this.dataset.cursor || !1;
        if (!e) return !1;
        var r = this.dataset.cursorCaption || !1;
        "mouseenter" == t.type ? (r && document.documentElement.style.setProperty("--cursorCaption", '"'.concat(r, '"')), cursor.classList.add("is-hover"), cursor.classList.add(e)) : "mouseleave" == t.type ? (cursor.classList = "", r && document.documentElement.style.setProperty("--cursorCaption", "")) : "mousedown" == t.type ? cursor.classList.add("is-mousedown") : "mouseup" == t.type && cursor.classList.remove("is-mousedown")
    }))
    
}
