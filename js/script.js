$(document).ready(function () {

    const isMobile = {
        Android: function(){
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function(){
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function(){
            return navigator.userAgent.match(/Opera mini/i)
        },
        Windows: function(){
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function(){
            return(
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            )
        }
    }
    const isGavnoPhone = {
        iOS: function(){
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        any: function(){
            return(
                isGavnoPhone.iOS()
            )
        }
    }

    if(isMobile.any()){
        $('body').addClass('_touch')

    }else{
        $('body').addClass('_pc')
    }

    //animateOn
    wow = new WOW({
        boxClass:     'wow',   
        animateClass: 'animated', 
        offset:       0,         
        mobile:       true,       
        live:         true       
      })
    wow.init();

    //scroll to top
    $(window).scroll(function() {
        if ($(window).scrollTop() > $('.main').height() + $('.header').height() + 50) {
            $('#btn-to-top').addClass('_btn-show');
        } else {
            $('#btn-to-top').removeClass('_btn-show');
        }
    });

    $('#btn-to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });
   

    //menuToggle
    $('.menu__open__container').click(function(e){
        $('.menu__open').addClass('_active-menu')
        $(".menu__close").addClass('_active-menu')
        $('.menu__box').addClass('_active-menu')
        $('body').addClass('_lock')

    })
    $('.menu__close__container').click(function(e){
        //console.log(1);
        $('.menu__close').removeClass('_active-menu')
        $('.menu__open').removeClass('_active-menu')
        $('.menu__box').removeClass('_active-menu')
        $('body').removeClass('_lock')

    })

    //btn down
    $('.main__btn__down').click(function(e){
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.main__btn__down').parent().parent().parent().next().offset().top
        }, 500)
        
        e.preventDefault()
    })

    //accordion
    $('.accordion-item__body').slideUp(300)

    $('.accordion-item').click(function(e){
        $(this).toggleClass('_active-accordion')
        $(this).children('._container').children('.accordion-item__wrapper').children('.accordion-item__body').slideToggle(300)
        $('.accordion-item').not($(this)).removeClass('_active-accordion')
        $('.accordion-item').not($(this)).children('._container').children('.accordion-item__wrapper').children('.accordion-item__body').slideUp(300)
    })

    //production video
    $('.production__video img').click(function(e){
        $(this).parent().addClass('_video-play')
    })

    //filter portfolio
    $('.portfolio-filter__item').click(function(e){
        $(this).toggleClass('_active-filter')
    })

    //input file attached
    let fileAttached = $('.form-request input[type=file]')[0]

    if(fileAttached){
        inputHandler(fileAttached)
    }
    let fileInPop = $('.pop-up-form-request input[type=file]')[0]
    
    if(fileInPop){
        inputHandler(fileInPop)
    }

    function inputHandler(input){
        let label	 = input.nextElementSibling
        let labelVal = label.innerHTML
        // let output = $('label[for=pdf] span')[0]

        //console.log($(input).parent());

        input.addEventListener( 'change', function( e ){
            //console.log('hui', e.target.files[0].name);
            let fileName = '';

            try{
                fileName = e.target.files[0].name
            } catch{
                fileName = ''
            }
            

            if( fileName ){
                label.querySelector( 'span' ).innerHTML = fileName;
            }else{
                label.innerHTML = labelVal;
            }
        })
    }

    //pop-up`s appear
    $('.pop-up .pop-up__close').click(function(e){
        $(this).parent().parent().removeClass('_active-pop-up')
        $('body').removeClass('_lock__pop')

    })
    $('.pop-up .pop-up__bg').click(function(e){
        $(this).parent().removeClass('_active-pop-up')
        $('body').removeClass('_lock__pop')

    })

    $('.open-pop-up__request').click(function(e){
        $('.pop-up-request').addClass('_active-pop-up')
        $('body').addClass('_lock__pop')
    })
    $('.open-pop-up__call').click(function(e){
        $('.pop-up-call').addClass('_active-pop-up')
        $('body').addClass('_lock__pop')
    })

    $('.open-pop-up__video').click(function(e){
        e.preventDefault()

        $('.pop-up-video').addClass('_active-pop-up')
        $('.video__item ')[0].load()
        $('.video__item ')[0].play()
        $('body').addClass('_lock__pop')
    })
    $('.pop-up__close').click(function(e){
        //$(this).parent().parent().removeClass('_avtive-pop-up')
        $('.pop-up-video .video__item ')[0].pause()
    })
    $('.pop-up__bg').click(function(e){
        //$(this).parent().parent().removeClass('_avtive-pop-up')
        $('.pop-up-video .video__item ')[0].pause()
    })

    //spec types pop-up
    $('.types-item__more').click(function(e){
        e.preventDefault()
        let pop = $(this).attr('data-open-pop')

        if(pop && $(pop)){
            $(pop).addClass('_active-pop-up')
            $('body').addClass('_lock__pop')
        }
    })
    $('.types-item-pop-up.pop-up .pop-up__close').click(function(e){
        $(this).parent().removeClass('_active-pop-up')
        $('body').removeClass('_lock__pop')
    })

    //spec types pop-up
    $('.portfolio-item-pop-up .pop-up__close').click(function(e){
        $(this).parent().removeClass('_active-pop-up')
        $('body').removeClass('_lock__pop')
    })

    $('.portfolio-list__hover').click(function(e){
        let pop = $(this).attr('data-open-pop')

        if(pop && $(pop)){
            $(pop).addClass('_active-pop-up')
            $('body').addClass('_lock__pop')
        }
    })

    


    //swipers
    //swiper awards
    let awardsSwiper = new Swiper('.awards-swiper.swiper', {

        slidesPerView: 1,
        spaceBetween: 21,
        grabCursor: true,
        //autoHeight: true,
        loop: false,
        pagination: {
            
            el: '.swiper-pagination.awards__pagination__container',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="awards-swiper__pagination ${className}"><strong></strong></span>`;
            },
        },

        navigation: {
            nextEl: '.awards__btns__container .swiper-button-next',
            prevEl: '.awards__btns__container .swiper-button-prev',
        },

        breakpoints: {
            480:{
                slidesPerView: 2,
                centeredSlides: false,
                slidesPerGroup: 3,
            },
            710:{
                slidesPerView: 3,
                centeredSlides: false,
                slidesPerGroup: 3,
            },
            1100:{
                slidesPerView: 4,
                centeredSlides: false,
                slidesPerGroup: 3,
            },
        },
    })

    //swiper types-pop-up
    

    let typesSwiper = new Swiper('.types-item-pop-up__swiper.swiper', {

        slidesPerView: 1,
        spaceBetween: 21,
        grabCursor: true,
        autoHeight: true,
        loop: false,
        on:{ 
            init: setCurrentCounter,
            slideChange: counterChange,
        },
        // pagination: {
            
        //     el: '.swiper-pagination.awards__pagination__container',
        //     clickable: true,
        //     renderBullet: function (index, className) {
        //         return `<span class="awards-swiper__pagination ${className}"><strong></strong></span>`;
        //     },
        // },

        navigation: {
            nextEl: '.types-item-pop-up__swiper__container .swiper-button-next',
            prevEl: '.types-item-pop-up__swiper__container .swiper-button-prev',
        },

        
    })

    function setCurrentCounter(swiper){
        let currentCount = $('.types-item-pop-up__photo__counter p')[0]
        let allCount = $('.types-item-pop-up__photo__counter span')[0]

        let index = swiper.activeIndex + 1;
        let swiperLength = swiper.slides.length
        currentCount.innerHTML = index
        allCount.innerHTML = swiperLength
    }
    function counterChange(swiper) {
        let currentCount = $('.types-item-pop-up__photo__counter p')[0]
        let index = swiper.activeIndex + 1;
        currentCount.innerHTML = index
    }

    //swiper portfolio-pop-up
    let portfolioSwiperMini = new Swiper('.portfolio-item-pop-up__swiper__small.swiper', {
        slidesPerView: 4,
        grabCursor: true,
        // grid: {
        //     fill: 'row',
        //     rows: 4
        // },
        spaceBetween: 5,
        breakpoints: {
            761:{
                slidesPerView: 6,
                spaceBetween: 18,
            },
            1020: {
                slidesPerView: 8,
                spaceBetween: 24,
            },
        },
    })


    let portfolioSwiper = new Swiper('.portfolio-item-pop-up__swiper.swiper', {
        thumbs: {
			swiper: portfolioSwiperMini,
		},
        slidesPerView: 1,
        spaceBetween: 21,
        grabCursor: true,
        autoHeight: true,
        loop: false,
        on:{ 
            init: setCurrentCounterPortfolio,
            slideChange: counterChangePortfolio,
        },
        // pagination: {
            
        //     el: '.swiper-pagination.awards__pagination__container',
        //     clickable: true,
        //     renderBullet: function (index, className) {
        //         return `<span class="awards-swiper__pagination ${className}"><strong></strong></span>`;
        //     },
        // },

        navigation: {
            nextEl: '.portfolio-item-pop-up__swiper__container .swiper-button-next',
            prevEl: '.portfolio-item-pop-up__swiper__container .swiper-button-prev',
        },

        
    })

    function setCurrentCounterPortfolio(swiper){
        let currentCount = $('.portfolio-item-pop-up__photo__counter p')[0]
        let allCount = $('.portfolio-item-pop-up__photo__counter span')[0]

        let index = swiper.activeIndex + 1;
        let swiperLength = swiper.slides.length
        currentCount.innerHTML = index
        allCount.innerHTML = swiperLength
    }
    function counterChangePortfolio(swiper) {
        let currentCount = $('.portfolio-item-pop-up__photo__counter p')[0]
        let index = swiper.activeIndex + 1;
        currentCount.innerHTML = index
    }

    /*********************************** */

    //video pop up
    // $('.show-video').click(function(e){
    //     e.preventDefault()

    //     $('.pop-up-video').addClass('_avtive-video')
    //     $('.video__item ')[0].load()
    //     $('.video__item ')[0].play()
    // })
    // $('.pop-up-video__close__btn').click(function(e){
    //     e.preventDefault()

    //     $('.pop-up-video').removeClass('_avtive-video')
    //     $('.video__item ')[0].pause()
    // })

    
    //header-anchor
    $('.menu__list .menu__link').click(function(event){
        onMenuLinkClick(event);
    })
    $('.footer-main__list .footer__link').click(function(event){
        onMenuLinkClick(event);
    })

    function onMenuLinkClick(event){
        const menuLink = event.target;
	    const goto = $(menuLink).attr('data-goto');
        if(goto && $(goto)){
            $([document.documentElement, document.body]).animate({
                scrollTop: $(goto).offset().top - Math.round($('.header').height())
            }, 500)
        }
        if($('.menu__open').hasClass('_active-menu')){
            
            $('.menu__open').removeClass('_active-menu')

            $('.menu__box').removeClass('_active-menu')
            $(".menu__close").removeClass('_active-menu')
            $('body').removeClass('_lock')
        }
        event.preventDefault();
    }


    //TEAM-hide 
    let lastItems = []
    let teamItems = Array.from($('.team-list.team-list__main li'))
        //console.log(teamItems);

    function chooseLastItems(countOfLast, teamItems, lastItems){
        teamItems.forEach((item, index) => {
            if(index > countOfLast){
                lastItems.push(item)
            }

        })
    }

    if(document.documentElement.clientWidth <= 1020) {
        chooseLastItems(3, teamItems, lastItems)
    }
    if(document.documentElement.clientWidth < 690) {
        chooseLastItems(2, teamItems, lastItems)
    }

    //console.log(lastItems);

    lastItems.forEach((item, index) => {
        $(item).fadeOut(200)
    })

    $(".team-list__btn__show").click(function (e) { 
        e.preventDefault();
        lastItems.forEach((item, index) => {
            $(item).fadeIn(200)
            $(this).fadeOut(200)
        })
    });

    //swipers
    //swiper customize
    let customCategories = ['Admirer', 'Addict', 'Diehard', 'Enthusiast']

    let customSwiper = new Swiper('.customize-swiper.swiper', {

        slidesPerView: 1,

        allowTouchMove: true,

        spaceBetween: 80,
        //autoHeight: true,
        loop: false,
        pagination: {
            
            el: '.swiper-pagination.possibility-customize__pagination__container',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="possibility-customize__pagination ${className}"><strong></strong> ${customCategories[index]}</span>`;
            },
        },

        navigation: {
                nextEl: '.possibility-customize__btns__container .swiper-button-next',
                prevEl: '.possibility-customize__btns__container .swiper-button-prev',
        },
    })

    //showcase swipers

    let headSwiper = new Swiper('.showcase-head-swiper.swiper',{
        loop: true,
        //autoHeight: true,
        freeMode: true,
        spaceBetween: 30,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
        },
        slidesPerView: "auto",
        speed: 10000,
        //grabCursor: true,
        mousewheelControl: true,
        keyboardControl: true,
    })
    let bottomSwiper = new Swiper('.showcase-bottom-swiper.swiper',{
        loop: true,
        
        //autoHeight: true,
        freeMode: true,
        spaceBetween: 30,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        slidesPerView: "auto",
        speed: 10000,
        //grabCursor: true,
        mousewheelControl: true,
        keyboardControl: true,
    })

    //supporters swipers

    let supportsSwiper = new Swiper('.supporters-swiper.swiper',{
        slidesPerView: 2,
        centeredSlides: false,
        slidesPerGroup: 2,
        slidesPerGroupSkip: 0,
        spaceBetween: 30,
        autoHeight: true,
        loop: false,

        breakpoints: {
            650:{
                slidesPerView: 3,
                centeredSlides: false,
                slidesPerGroup: 3,
            },
            1040:{
                slidesPerView: 4,
                centeredSlides: false,
                slidesPerGroup: 4,
            },
        },

        pagination: {
            el: '.swiper-pagination.supporters-swiper__pagination__container',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="supporters-swiper__pagination ${className}"><strong></strong></span>`;
            },
        },
    })

    
});