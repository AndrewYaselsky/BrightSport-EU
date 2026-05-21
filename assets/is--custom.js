$(".Header__Icon").click(function(){
    $("#sidebar-menu").toggleClass("active");
    $("html").toggleClass("active");
    $("html").toggleClass("no-scroll");
});
$(".Drawer__Main").removeAttr("data-drawer-animated-left");
$("aside.Drawer__Footer").removeAttr("data-drawer-animated-bottom");

// $(".Drawer__Close").click(function(){
//   console.log("aa");
//   $("html").removeClass("no-scroll");
// });
$(".toggle_menu_home").click(function(){
  $("html").toggleClass("toogle_menu");
});

// 

$(document).ready(function(){

  $('.Drawer__Content .Collapsible__Button').on('click', function() {
    const href = $(this).attr('href');
    if (href.indexOf('#') != -1) {
      const hrefSection = href.split('#')[1];
      const section = $('#' + hrefSection);      
      if (section.length > 0) {
        $('html').removeClass('toogle_menu');
        $('html, body').animate({
          scrollTop: section.offset().top - 200
        }, 1000);
        return false;
      }
    }
  });


  $(".unique_balls_text").hover(
    function () {
      $(this).parents(".unique_balls_main").find(".unique_balls_img_block").addClass("unique_balls_img_hover");
    },
    function () {
      $(this).parents(".unique_balls_main").find(".unique_balls_img_block").removeClass("unique_balls_img_hover");
    }
  );

  $('.you_answers_acc_container .you_answers_acc:nth-child(1) .you_answers_acc_head').addClass('active');
  $('.you_answers_acc_container .you_answers_acc:nth-child(1) .you_answers_acc_content').slideDown();
  $('.you_answers_acc_head').on('click', function() {
      if($(this).hasClass('active')) {
        $(this).siblings('.you_answers_acc_content').slideUp();
        $(this).removeClass('active');
      }
      else {
        $('.you_answers_acc_content').slideUp();
        $('.you_answers_acc_head').removeClass('active');
        $(this).siblings('.you_answers_acc_content').slideToggle();
        $(this).toggleClass('active');
      }
  });  
  
  $(".best_seller_main").slick({
   slidesToShow: 4,
   infinite:false,
   slidesToScroll: 1,
   autoplay: false,
   arrows: true,
   prevArrow: '<div class="slick-prev slick-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 12H3.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
   nextArrow: '<div class="slick-next slick-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 12H20.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
   responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding:'40px',
        }
      }
    ]
  });
  
  $(".bestsellers_slider").slick({
   slidesToShow: 5,
   infinite:false,
   slidesToScroll: 1,
   autoplay: false,
   arrows: false,
   prevArrow: '<div class="slick-prev slick-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 12H3.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
   nextArrow: '<div class="slick-next slick-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 12H20.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
   responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          centerMode: false,
          centerPadding:'140px',
          infinite:false
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding:'140px',    
            infinite:false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding:'80px',  
            infinite:false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding:'40px', 
            infinite:false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding:'100px',
            infinite:false
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding:'50px',
            infinite:false
        }
      }
    ]
  });

  $(".homepage-bundle-slider").slick({
   slidesToShow: 3,
   infinite:false,
   slidesToScroll: 1,
   autoplay: false,
   arrows: false,
   prevArrow: '<div class="slick-prev slick-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 12H3.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
   nextArrow: '<div class="slick-next slick-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 12H20.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
   responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding:'140px',
          infinite:false
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding:'140px',    
            infinite:false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding:'80px',  
            infinite:false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding:'100px',
            infinite:false
        }
      }
    ]
  });
  
  //  $(".new_hero_banner_balls_slider").slick({
  //    slidesToShow: 3,
  //    infinite:true,
  //    slidesToScroll: 1,
  //    autoplay: false,
  //    autoplaySpeed: 4000,
  //    rtl:true,
  //    pauseOnHover: false,
  //    arrows: false,
  //    responsive: [
  //       {
  //         breakpoint: 767,
  //         settings: {
  //           slidesToShow: 1,
  //           infinite:true,
  //           centerMode: true,
  //           centerPadding:'150px',
  //         }
  //       },
  //       {
  //         breakpoint: 576,
  //         settings: {
  //           slidesToShow: 1,
  //           infinite:true,
  //           centerMode: true,
  //           centerPadding:'65px',
  //         }
  //       }
  //     ]
  // });

   $(".new_hero_banner_logo_slide").slick({
     slidesToShow: 3,
     infinite:true,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 0,
     speed: 8000,
     variableWidth: true,
     pauseOnHover: false,
     cssEase: 'linear',
     arrows: false,
  });


   $(".as_seen_main").slick({
     slidesToShow: 3,
     infinite:false,
     slidesToScroll: 1,
     autoplay: false,
     arrows: false,
     responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            infinite:true,
            centerMode: true,
            centerPadding:'150px',
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            infinite:true,
            centerMode: true,
            centerPadding:'65px',
          }
        }
      ]
  });

});


function isNumberKey(evt){
     var charCode = (evt.which) ? evt.which : evt.keyCode
     if (charCode > 31 && (charCode < 48 || charCode > 57))
       return false;
     return true;   }  


		$(".MegaMenu--spacingEvenly").parent(".HorizontalList__Item").addClass("active_megamenu");



$('.Header__Icon ').click(function(){
  $('body ').addClass('active_menu');
});


$('.Drawer__Close ').click(function(){
     $('body ').removeClass('active_menu');
    $('body').addClass('active_zindex');
});

if (navigator.userAgent.match(/(iPod|iPhone|iPad|Mac)/)) {
jQuery('html').addClass('mac');
}

// $('.header_center_box_text').slick({
//   infinite: true,
//   slidesToShow: 1,
//   arrows:false,
//    variableWidth: true,
//    cssEase: 'cubic-bezier(.15,.5,.5,0.4)',
//   dots:false,
//   autoplay:true,
//    autolpaySpeed:1200,
//    autoplay: true,
//     autoplaySpeed: 0,
//     speed: 7000,
//     pauseOnHover: false,
//     // cssEase: 'linear',
// });


$('.bundle_scrollbar_text').slick({
  infinite: true,
  slidesToShow: 2,
  arrows:false,
   variableWidth: true,
   // cssEase: 'cubic-bezier(.15,.5,.5,1.2)',
  dots:false,
  autoplay:true,
   autolpaySpeed:1200,
   autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    pauseOnHover: false,
    cssEase: 'linear',
});



   $(".made_athletes_img_slider").slick({
     slidesToShow: 3,
     infinite:false,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 2000,
     dots: false, 
     arrows: false,     
     responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding:'60px',
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding:'40px',
          }
        }
      ]
    });


$(window).scroll(function(){
    if ($(this).scrollTop() > 40) {
       $('.product_sticky_bar_bottom').addClass('fixed_tab');
       $('.product_sticky_bar_bottom').removeClass('fixed_tab_remove');
    } else {
       $('.product_sticky_bar_bottom').removeClass('fixed_tab');
       $('.product_sticky_bar_bottom').addClass('fixed_tab_remove');
    }
});

$(document).ready(function() {
  $(".bundle_tab_sub_heading a").click(function() {
    // Remove the "active_border" class from all links first
    $('.bundle_tab_sub_heading a').removeClass("active_border");
    
    // Add the "active_border" class to the clicked link
    $(this).addClass("active_border");
  });
});




$(window).scroll(function() {
var scrollDistance = $(window).scrollTop() + 500;
    $('.bundle_common_scroll').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.bundle_tab_sub_heading a.active_border').removeClass('active_border');
                    $('.bundle_tab_sub_heading a').eq(i).addClass('active_border');
            }
    });
}).scroll();


 $(".bundle_tab_sub_heading a").hover(
    function() {
      $(this).addClass("active_border");
    },
    function() {
      $(this).removeClass("active_border");
    }
  );


$(window).scroll(function(){
 //  var main_height = $("#shopify-section-header").height()
 //  console.log(main_height)
 //  if($(window).scrollTop() >= main_height){
	// // $(".shopify-section--header").addClass("header-sticky-fix");
 //    $("main").css({"position":"sticky","top":main_height,"bottom":"0"});
 //  }else{
 //    // $(".shopify-section--header").removeClass("header-sticky-fix");
 //  }
});




$(window).scroll(function(){
 //  if($(window).scrollTop() >= 20){
	// $(".bundle_marquee_col").addClass("animation_start");
 //  }else{
 //    $(".bundle_marquee_col").removeClass("animation_start");
 //  }
  
  if($(window).scrollTop() >= 1000){
	$(".sticky_product_name").addClass("show_add_to_cart");
  }else{
    $(".sticky_product_name").removeClass("show_add_to_cart");
  }
});


$(document).ready(function() {
  function toggleClassWithDelay() {
    $(".new_hero_banner_balls_video_2").addClass("highlight");
    setTimeout(function() {
      $(".new_hero_banner_balls_video_2").removeClass("highlight");
    }, 3000);
  }
  function checkAndRun() {
    if ($(".new_hero_banner_balls_slide_block").hasClass("swiper-slide-active")) {
      toggleClassWithDelay();
    }
  }
  checkAndRun();
  setInterval(checkAndRun, 5000);
});






// $(document).ready(function() {
// var $inputElement = $(".dev_contact_form_Input,.dev_contact_form_Textarea");

// $inputElement.on("focus", function() {
// $(this).parent(".dev_contact_form_Item").addClass("active");
// });

// $inputElement.on("blur", function() {
// $(this).parent(".dev_contact_form_Item").removeClass("active");
// });
// });



$(document).ready(function() {
// Get the input element by its ID
const $inputElement = $(".dev_contact_form_Input,.dev_contact_form_Textarea");

// Add an event listener to listen for the "focus" event
$inputElement.on("focus", function() {
// Add the "active" class when the input receives focus
$(this).parent(".dev_contact_form_Item").addClass("active");
});

// You can also remove the class when the input loses focus if needed
$inputElement.on("blur", function() {
// Remove the "active" class when the input loses focus
$(this).parent(".dev_contact_form_Item").removeClass("active");
});
});



$(".Drawer__Footer_upsell").click(function() {
     $('.upsell-drawer-list').animate({
         scrollTop: $(".upsell-drawer-item:last-child").offset().top
     }, 1500);
 });




$(document).ready(function() {
  var scrollTimer;
  $(window).scroll(function() {
    clearTimeout(scrollTimer);
    $('.bundle_marquee_col').addClass('scroll_animation_play');
    scrollTimer = setTimeout(function() {
      $('.bundle_marquee_col').removeClass('scroll_animation_play');
    }, 500); 
  });
});


if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
jQuery('html').addClass('mac');
}
if (navigator.userAgent.indexOf('Mac OS X') != -1) {
jQuery("html").addClass("mac");
} else {
jQuery("html").addClass("pc");
}

// Product Page Sticky sidebar
$(function() {
    var $gallery = $('.Product__Gallery--withThumbnails');
        if ($gallery.length > 0) {
            var top = $gallery.offset().top - parseFloat($gallery.css('marginTop').replace(/auto/, 0));
        }
  
    var footTop = $('.tiktok_wrapper').offset().top - parseFloat($('.tiktok_wrapper').css('marginTop').replace(/auto/, 0));

    var maxY = footTop - $('.Product__Gallery--withThumbnails').outerHeight();

    $(window).scroll(function(evt) {
        var y = $(this).scrollTop();
        if (y >= top - $('.bundle_banner_sec').height()) {
            if (y < maxY) {
                $('.Product__Gallery--withThumbnails').addClass('fixed').removeAttr('style');
            } else {
                $('.Product__Gallery--withThumbnails').removeClass('fixed').css({
                    position: 'absolute',
                    top: (maxY - top) + 'px'
                });
            }
        } else {
            $('.Product__Gallery--withThumbnails').removeClass('fixed');
        }
    });
});




 // const radioButtons = document.querySelectorAll('input[name="radios"]');
 //  const productPriceDisplay = document.getElementById('product-price');

 //  radioButtons.forEach(radioButton => {
 //    radioButton.addEventListener('change', () => {
 //      const selectedPrice = parseFloat(radioButton.value);
 //      productPriceDisplay.textContent = selectedPrice | money;

 //      // Calculate savings percentage based on selected product's compare_at_price and price
 //      const compareAtPrice = (radioButton.id === 'radio1') ? {{ section.settings.first_product.compare_at_price }} : {{ section.settings.second_product.compare_at_price }};
 //      const savingsPercentage = 100 | times: compareAtPrice | minus: selectedPrice | divided_by: compareAtPrice;

 //      const savingsElement = document.querySelector('.save_bg_color');
 //      if (savingsPercentage > 0) {
 //        savingsElement.textContent = `Save ${savingsPercentage}%`;
 //      } else {
 //        savingsElement.textContent = ''; // Hide savings if there are none
 //      }
 //    });
 //  });




/* bundle product page */

$(document).ready(function(){
  
  var prices = $(".bundle_pick_ball_box_in.active").data("price");

        $(".product_prices_sum").text(prices);
        $(".show_add_to_cart .sticky_product_name_after_current").text(prices);
  
    // Get the value of the checked radio button
  //   var vals = parseFloat($(".bundle_pick_ball_box_in input[type='radio']:checked").val());
  //   console.log(vals);

  //   // Extract the price text
  //   var priceText = $(".percentage_price_col .product_prices").text();
  //   console.log(priceText);

  //   // Remove currency symbol and comma, then parse as a float
  //   var priceNumeric = parseFloat(priceText.replace(/[^0-9\.-]+/g,""));
  //   console.log(priceNumeric); // Outputs: 94.55 (assuming "€94,55")

  //   // Calculate the sum
  //   var sum = vals + priceNumeric;
  //   console.log(sum);

  //   // Format the sum as currency and log it
  //   // var formattedSum = sum.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
  //   // console.log(formattedSum); // Outputs: "€94.55"

  //   //  formattedSum = formattedSum.replace(".00", "");

  // var formattedSum = (sum / 100).toFixed(2).replace('.', ',');
  //       console.log(formattedSum);

  //   $(".ProductMeta__PriceList .percentage_price_col .product_prices_sum").text('€' +formattedSum);
});



// $(document).ready(function(){
// $(".bundle_pick_ball_box_in").click(function () {
//     console.log("adasdasdasdasda");
//     // Uncheck all radio buttons within .bundle_pick_ball_box_in
//     $(".bundle_pick_ball_box_in input").prop("checked", false);
  
//     // Check the clicked radio button
//     $(this).find("input").prop("checked", true);
  
//     // Get the value of the selected radio button
//     var val_data = parseFloat($(".bundle_pick_ball_box_in input[type='radio']:checked").val());
//     console.log(val_data);
//     // Extract the price text
 
//     var priceTexts = $(".percentage_price_col .product_prices").text();
  
//     // Remove currency symbol and comma, then parse as a float
//     var priceNumerics = parseFloat(priceTexts.replace(/[^0-9\.-]+/g, ""));
//     console.log(priceNumerics);
     
//     // Calculate the sum
//      var sums = val_data + priceNumerics;
//      // console.log(sum);

//     // Format the sum as currency and log it
//     var formattedSums = sums.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
//      console.log(formattedSums);
  
    
//     // Update the displayed price with the formatted sum
//      $(".ProductMeta__PriceList .percentage_price_col .product_prices").text(formattedSums);
//   });
// });


 // $(document).ready(function(){
 //            $(".bundle_pick_ball_box_in").click(function () {
 //                console.log("adasdasdasdasda");
 //                // Uncheck all radio buttons within .bundle_pick_ball_box_in
 //                $(".bundle_pick_ball_box_in input").prop("checked", false);

 //                // Check the clicked radio button
 //                $(this).find("input").prop("checked", true);

 //                // Get the value of the selected radio button
 //                var val_data = parseFloat($("input[type='radio']:checked").val());
 //                console.log(val_data);

 //                // Extract the price text
 //                var priceTexts = $(".percentage_price_col .product_prices").text();

 //                // Remove currency symbol and comma, then parse as a float
 //                var priceNumerics = parseFloat(priceTexts.replace(/[^0-9\.-]+/g, ""));
 //                console.log(priceNumerics);

 //                // Calculate the sum
 //                var sums = val_data + priceNumerics;

 //                // Format the sum as currency and log it
 //             //   var formattedSums = sums.toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
 //                // console.log(formattedSums);

 //                // var formattedSums = sums.map(function(sum) {
 //                //   return sum.toLocaleString('en-US', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 });
 //                // });

 //                //  formattedSums = formattedSums.replace(".00", "");

 //                // Update the displayed price with the formatted sum
 //                $(".percentage_price_col .product_prices_sum").text(sums);
 //            });
 //        });


$(document).ready(function(){

        // var vals = $(".bundle_pick_ball_box_in.active").find(".com_price").attr("data");
        // console.log(vals);
        // $(".product_right_total_price span").text(vals);
   setTimeout(function(){
        var vals = $(".bundle_pick_ball_box_in.active").find(".com_price").attr("data");

        $(".product_right_total_price span").text(vals);
        //$(".product_right_total_price").text(vals);
      }, 10000);  
  
    $(".bundle_pick_ball_box_in").click(function () {

        $(".bundle_pick_ball_box_in").removeClass("active");
        $(this).addClass("active");

        var prices = $(".bundle_pick_ball_box_in.active").data("price");

        $(".product_prices_sum").text(prices);

        $(".show_add_to_cart .sticky_product_name_after_current").text(prices);
        $(".sticky_product_name_after span.sticky_product_name_after_current").text(prices);
      
        var vals = $(".bundle_pick_ball_box_in.active").find(".com_price").attr("data");

        $(".product_right_total_price span").text(vals);

        //$(".ProductMeta__PriceLis_save .sticky_product_name_after_old").html("<b>was</b> " +vals);
      
        // console.log("adasdasdasdasda");
        // // Uncheck all radio buttons within .bundle_pick_ball_box_in
        // $(".bundle_pick_ball_box_in input").prop("checked", false);

        // // Check the clicked radio button
        // $(this).find("input").prop("checked", true);

        // // Get the value of the selected radio button
        // var val_data = parseFloat($("input[type='radio']:checked").val());
        // console.log(val_data);

        // // Extract the price text
        // var priceTexts = $(".percentage_price_col .product_prices").text();

        // // Remove currency symbol and comma, then parse as a float
        // var priceNumerics = parseFloat(priceTexts.replace(/[^0-9\.-]+/g, ""));
        // console.log(priceNumerics);

        // // Calculate the sum
        // var sums = val_data + priceNumerics;

        // // Format the sum with two decimal places and remove trailing zeros
        // // var formattedSums = sums.toFixed(2).replace(/\.?0+$/, '');
        // //console.log(formattedSums);
        // var formattedSums = (sums / 100).toFixed(2).replace('.', ',');
        // console.log(formattedSums);
        //  // var formattedSums = sums.replace('.', ',');
        // // console.log(formattedSums);
      
        // // Update the displayed price with the formatted sum
        // $(".percentage_price_col .product_prices_sum").text('€' + formattedSums);
    });

});

window.onload = function() {
    var element = document.querySelector('.firstclick');
    if (element) {
        element.click();
    }
};

/* starter product add to cart in product page */
// $(document).ready(function(){
// $(".ProductForm__AddToCart").click(function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     e.stopImmediatePropagation();
    
//     var ids = $(this).parents(".Product__Info").find('.bundle_pick_ball_box_in.active input[name="id"]').val();
//     console.log(ids);

//     var qty = $(this).parents(".Product__Info").find('.bundle_pick_ball_box_in.active input[name="quantity"]').val();
//     console.log(qty);

//     $.ajax({
//        type: "POST",
//        url: "/cart/add.js",
//        data: {
//          "id": ids,
//          "quantity": qty
//        },
//        success: function(){
//           console.log("success");
//           window.location.href="https://brightsport.com/cart"; 
//        },
//        error: function(){
//         console.log("error");
//      },
//     });
// });
// });

// $(document).ready(function(){
//     $(".bundle_pick_ball_box_in").click(function () {
//         console.log("adasdasdasdasda");

//         // Uncheck all radio buttons within .bundle_pick_ball_box_in
//         $(".bundle_pick_ball_box_in input").prop("checked", false);

//         // Check the clicked radio button
//         $(this).find("input").prop("checked", true);

//         // Get the value of the selected radio button
//         var val_data = parseFloat($("input[type='radio']:checked").val());
//         console.log(val_data);

//         // Extract the price text
//         var priceText = $(".percentage_price_col .product_prices").text();

//         // Remove currency symbol and comma, then parse as a float
//         var priceNumeric = parseFloat(priceText.replace(/[^0-9\.-]+/g, ""));
//         console.log(priceNumeric);

//         // Calculate the sum
//         var sum = val_data + priceNumeric;

//         // Format the sum as currency and log it
//         var formattedSum = sum.toLocaleString('en-US', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2});
//         console.log(formattedSum);

//         // Update the displayed price with the formatted sum
//         $(".percentage_price_col .product_prices_sum").text(formattedSum);
//     });
// });




var windowWidth = $(window).width();
if (windowWidth < 768) {
$(".bundle_product_page .Product__Slideshow").slick({
    arrows: false,
    centerPadding: "0px",
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    infinite: false
  });
}
