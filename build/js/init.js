$( document ).ready(function() {

	$('header .main-menu > 	li').hover(function(){
    	$('.main-menu li a').removeClass('active');
    	$(this).find('a').addClass('active');
    	$($(this).find('.main-menu-dropdown')).addClass('active');
    },
    function(){
    	$('header .main-menu li a').removeClass('active');
    	$('.main-menu-dropdown').removeClass('active');
    });

    //Ввод только цифр
    $("input[data-type='number-only']").keydown(function (e) {
       
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             
            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
             
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                
                 return;
        }
     
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
    
    $('.tovar').hover(function(){
        $(this).addClass('active');
    },
    function(){
         $(this).removeClass('active');
    });

        var posOld = 0;
        var posNew = 0;

        var list = $('.main').find('.tovar');

        list.each(function(){
            posOld =  $(this).find('.visible .photo').position();
            posNew =  $(this).find('.hover-block').find('.photo').position();

            $(this).find('.hover-block').css('top', -(parseInt(posNew.top-posOld.top)+2));
            $(this).find('.hover-block').css('display','none');
        });

});

$(document).on('click','header .search', function(){
    $(this).addClass('active');
    $(this).find('input').fadeIn();
    $(this).find('input').focus();
});
    

$('.tovar .hover-block .tovar-mini-slider .item').click(function(){
    var url = $(this).find('img').attr('src');
    $(this).parents('.tovar-mini-slider').find('.item').removeClass('active');
    $(this).addClass('active');
    $(this).parents('.tovar').find('.visible .photo img').attr('src',url);
    $(this).parents('.hover-block').find('.photo img').fadeOut("fast",function(){
        $(this).attr('src',url);
    }).fadeIn("fast");
});

$('.menu-button').click(function(){
    $('.overlay-mob-menu').addClass('active');
    $('body').addClass('overflow');
});
$('#close-button-mob-menu').click(function(){
    $('.overlay-mob-menu').removeClass('active');
    $('body').removeClass('overflow');
});

 

$(document).on("click", "#menu-mobile .category .category-title", function(){
    if($(this).parents('.category').hasClass('active')){
        $(this).parents('.category').removeClass('active');
    } else{
        $('#menu-mobile').find('.category').removeClass('active');
        $(this).parents('.category').addClass('active');
    }
      
}).on("click", "#menu-mobile .category .category-title", function(){
    var obj = $(this);
    setTimeout(function($obj){
        $("#menu-mobile").animate({
            scrollTop: $(obj).position().top 
        }); 
    },300);
    
});


$(document).on("click", ".filters .subTitle-filter-group", function(){
    $('.filters').find('.subList.active').slideToggle().removeClass('active');
    $(this).parent().find('.subList').addClass('active');
    $('.filters').find('.subList.active').slideToggle();
    
});


//Slider's

$('[data-item="owl_1"]').owlCarousel({
    loop:true,
    margin:15,
    items: 5,
    nav:true,
    touchDrag: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            margin:150
        },
        480:{
            items:3
        },
        768:{
            items:3
        },
        1024:{
            items:5,
            margin:15
        }
    }
});


$('[data-item="owl_2"]').owlCarousel({
    loop:true,
    margin:50,
    items: 3,
    nav:true,
    touchDrag: true,
    responsiveClass:true
});
$('[data-item="owl_3"]').owlCarousel({
    loop:true,
    margin:15,
    items: 1,
    nav:true,
    dots: true,
    touchDrag: true
});

$('[data-item="owl_4"]').owlCarousel({
    loop:true,
    margin:50,
    items: 5,
    nav:true,
    touchDrag: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            margin:25,
            nav: true
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        1024:{
            items:5
        }
    }
});
$('[data-item="owl_5"]').owlCarousel({
    loop: false,
    margin: 5,
    items: 4,
    nav:true,
    touchDrag: false,
    mouseDrag: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2
        },
        480:{
            items:3
        },
        768:{
            items:3
        },
        1024:{
            items:4
        }
    }
});

$('[data-item="owl_7"]').owlCarousel({
    loop:true,
    margin: 50,
    items: 2,
    nav:true,
    touchDrag: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            margin:25,
            nav: true
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        1024:{
            items:4 
        }
    },
});

$('[data-item="owl_8"]').owlCarousel({
    loop:true,
    margin: 10,
    items: 1,
    nav:true,
    touchDrag: true,
    responsiveClass:true
});

$(document).on('click','a', function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
        obj = $(anchor).offset();
    $('html,body').animate({
      scrollTop: $(obj).top
    }, 1000);
});


$(document).on('click', '.title-filter-group > span', function(){
    var list = $(this).parent().parent().find('.myCheck');
    list.each(function(){
        if($(this).find('input').attr('checked') == "checked"){
            $(this).click();
        }
        
    });
    $(this).parents('.filter-group').find('.title-filter-group > span').hide();
})


$(document).on('click', '.profile .left-menu a', function(){

    $('.profile .right').find('.tab').removeClass('active');
    $('#' + $(this).attr('class')).addClass('active');

    $('.profile .left-menu').find('a').removeClass('active');
    $(this).addClass('active');

    
});
$(document).on('click', '.bag .popup-cart_item .add-favorite', function(){

    $(this).toggleClass('check');
    
});

$(document).on('click', '.bag .bag_header .delete_all', function(){

    $('.bag .bag_body').empty();
    $('.bag .bag_header .title').text("Добавлено " + $('.bag .bag_body').children().length + " товара");
    if($('.bag .bag_body').children().length <= 0){
        $('.delete_all').hide();
    }
    
});

$(document).on('click', '.bag .popup-cart_item .button_delete', function(){

    $(this).parents('.popup-cart_item').fadeOut(function(){
        $(this).remove();

        $('.bag .bag_header .title').text("Добавлено " + $('.bag .bag_body').children().length + " товара");

        if($('.bag .bag_body').children().length <= 0){
            $('.delete_all').hide();
        }
    });

   
    
});
$('[data-item="owl_5"]').find('.item').click(function(){
    var url = $(this).find('img').attr('src');

    $('[data-item="owl_5"]').find('.item').removeClass('active');
    $(this).addClass('active');

    $(this).parents('.item-slider').find('.main-img img').fadeOut("fast",function(){
        $(this).attr('src',url);
    }).fadeIn("fast");
});

//Фильтры моб

$(document).on("click", "#mob-filters .filter .filter-title", function(){
    //$('#mob-filters').find('.filter-title').removeClass('active');
    $(this).parents('.filter').toggleClass('active');  
});

$(document).on("click", "#mob-filters .filter-group .filter-group-title", function(){
    //$('#mob-filters').find('.filter-group').removeClass('active');
    $(this).parents('.filter-group').toggleClass('active');  
});

$(document).on("click", "#mob-filters .filter-group .filter-group-item", function(){
    $(this).toggleClass('active');  
});

$(document).on("click", "#mob-filters .filter-group .filter-group-item > a", function(e){
    e.preventDefault(); 
});

$(document).on("click", "#mob-filters #sort .filter-item", function(){
    $('#mob-filters #sort').find('.filter-item').removeClass('active');
    $(this).toggleClass('active');  
});


$(document).on("click", "#mob-profile .filter .filter-title", function(){
    $(this).parents('.filter').toggleClass('active');  
});


$(".custom-option-container").click(function(){
    $(this).toggleClass('active');
    $(this).find('ul').toggleClass('active'); 
});

$(".custom-option-container li").click(function(){
    $(this).parents('.custom-option-container').find('ul > li:first-child').text($(this).text()); 
});


$('.modal').on('show.bs.modal', function (e) {
  $('body').find('.modal').modal('hide');
});


var oldPlaceholder = "";

$(document).on("focusin", "input", function(){
    oldPlaceholder = $(this).attr('placeholder');
    $(this).attr('placeholder',""); 
});

$(document).on("focusout", "input", function(){
    $(this).attr('placeholder',oldPlaceholder); 
});
