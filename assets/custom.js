/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 */

var paddingFuntion = null;
var tryCount = 0;

document.addEventListener("DOMContentLoaded", function (event) {
  var lastScrollTop = 0;

  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  window.addEventListener(
    "scroll",
    function () {
      // or window.addEventListener("scroll"....
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st < 4) {
        var element = document.getElementById("shopify-section-header");
        element.classList.add("transparent-header");

        var classContent = document.getElementById(
          "shopify-section-header"
        ).className;
        document.getElementById("shopify-section-header").className =
          classContent.replace("header-no-shadow", "").trim();
      } else {
        var classContent = document.getElementById(
          "shopify-section-header"
        ).className;
        document.getElementById("shopify-section-header").className =
          classContent.replace("transparent-header", "").trim();

        var element = document.getElementById("shopify-section-header");
        element.classList.add("header-no-shadow");
      }
      
      if (st > lastScrollTop) {
        var classContent = document.getElementById(
          "shopify-section-header"
        ).className;
        document.getElementById("shopify-section-header").className =
        classContent.replace("sticky-header", "").trim();
        $('.last_chance_bar').css('-webkit-transform', 'translate3d(0, 0px, 1px)');
        $("#shopify-section-header").addClass("header-bottom-sticky");
        $('.Product__InfoWrapper').css('top', '60px');
      } else if(st == 0){
        $('.last_chance_bar').css('-webkit-transform', 'translate3d(0, 0px, 1px)');
        $(".Product__InfoWrapper").css('top', '0');
      } else {
        var element = document.getElementById("shopify-section-header");
        var newtop = $("#shopify-section-header").height();
        var newtopsticky = newtop + 70;
        element.classList.add("sticky-header");
        $('.Product__InfoWrapper').css('top', newtopsticky);
        $('.last_chance_bar').css('-webkit-transform', 'translate3d(0, ' + newtop + 'px, 1px)');
        classContent.replace("header-bottom-sticky", "").trim();
        $("#shopify-section-header").removeClass("header-bottom-sticky");
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      
    },
    false
  );

  var paddingFuntion = setInterval(adjustPaddingTop, 500);
});

function adjustPaddingTop() {
  if (
    document.querySelector(
      ".template-product #shopify-section-header .aph_bar_bar"
    )
  ) {
    var innerHeigt = document
      .querySelector("#shopify-section-header .aph_bar_bar")
      .getBoundingClientRect().height;
    var paddingTop = innerHeigt + 50 + "px";
    document.getElementById("main").style.paddingTop = paddingTop;

    clearInterval(paddingFuntion);
  } else {
    tryCount = tryCount + 1;
    if (tryCount > 100) {
      clearInterval(paddingFuntion);
    }
  }
}

/*
$("body").on('click','.btn-add-item',function(e){
  alert('aaaaaaaaaaa');
});
*/

$(".ad_to_cart_coll").click(async function () {
  document.dispatchEvent(new CustomEvent("theme:loading:start"));
  var ID = $(this).attr("data-var_id");

  if (!$(this).is("[disabled=disabled]")) {
    await fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        items: [{ id: ID, quantity: 1 }],
      }),
    });
  }

  const FREE_PRODUCT_ID = 39700555169880;
  
  fetch('/cart.js')
    .then(res => res.json())
    .then(cart => {
      const bogoCount = cart.items.filter(item => item.handle.includes('bogo')).length;
      const hasFreeProduct = cart.items.some(item => item.variant_id === FREE_PRODUCT_ID);
  
      if (bogoCount >= 2 && !hasFreeProduct) {  
        return fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items: [{ id: FREE_PRODUCT_ID, quantity: 1 }]
          })
        });
      }
    })
    .then(res => {
      if (res && res.ok) {
        console.log('Gift added🎁');
        rerenderCart();
      }
    })
    .catch(err => console.error('Error:', err));

  openCart();
  updateTopCartCount();
  rerenderCart();
});

$(document).on("click", ".ctm-addcart", function () {
  document.dispatchEvent(new CustomEvent("theme:loading:start"));
  var variant_id = $(this).data("id");
  var qty = $(this)
    .parents(".upsell-drawer-item")
    .find(".QuantitySelector__CurrentQuantity")
    .val();
  if (!$(this).is("[disabled=disabled]")) {
    addItemToCartCheckout(variant_id, qty);

    var parentDiv = $(this).parents(".upsell-drawer-item");
    parentDiv.find(".atc-text").hide();
    parentDiv.find(".added-text").show();
    setTimeout(function () {
      parentDiv.find(".atc-text").show();
      parentDiv.find(".added-text").hide();
    }, 2000);
  }
});

function updateTopCartCount() {
  jQuery.getJSON("/cart.js", function (cart) {
    $(".js_cart_count").text(cart.item_count);
    $(".Header__CartDot").addClass("is-visible");

    // Function to fetch cart data and update progress bar
    function fetchCartAndUpdateProgressBar() {
      fetch('/cart.js')
          .then(response => response.json())
          .then(data => {
              var currentTotal = data.total_price;
              updateProgressBar(currentTotal);
          });
    }
    
  });
}

function rerenderCart() {
  GLOBAL_RENDERCART._rerenderCart();
}

function openCart() {
  GLOBAL_RENDERCART._onCollectionProductAdded();
  document.dispatchEvent(new CustomEvent("theme:loading:end"));
}


      
async function addItemToCart(variant_id, qty) {
  data = {
    id: variant_id,
    quantity: qty,
  };

  return new Promise((r) => {
    jQuery.ajax({
      type: "POST",
      url: "/cart/add.js",
      data: data,
      dataType: "json",
      success: function () {
        openCart();
        updateTopCartCount();
        rerenderCart();
       function updateProgressBar(currentTotal) {

      var thresholdInCents = 5000;
      var progressValue = document.querySelector('.progress-value');
      var percentage = (currentTotal / thresholdInCents) * 100;
    
      percentage = Math.min(percentage, 100);
      progressValue.style.width = percentage + '%';
    }
        // Function to fetch cart data and update progress bar
    function fetchCartAndUpdateProgressBar() {
      fetch('/cart.js')
          .then(response => response.json())
          .then(data => {
              var currentTotal = data.total_price;
              updateProgressBar(currentTotal);
          });
    }
    
    // Listen for changes to the cart using Shopify's built-in API
    document.addEventListener('cart.requestComplete', function() {
      fetchCartAndUpdateProgressBar();
    });
    
    // Initial fetch and update when the page loads
    fetchCartAndUpdateProgressBar();  
      },
    });
  });
}

function addItemToCartCheckout(variant_id, qty) {
  data = {
    id: variant_id,
    quantity: qty,
  };
  jQuery.ajax({
    type: "POST",
    url: "/cart/add.js",
    data: data,
    dataType: "json",
    success: function () {
      openCart();
      updateTopCartCount();

      function updateProgressBar(currentTotal) {

        var thresholdInCents = 5000;
        var progressValue = document.querySelector('.progress-value');
        var percentage = (currentTotal / thresholdInCents) * 100;
      
        percentage = Math.min(percentage, 100);
        progressValue.style.width = percentage + '%';
      }
    
    // Function to fetch cart data and update progress bar
    function fetchCartAndUpdateProgressBar() {
      fetch('/cart.js')
          .then(response => response.json())
          .then(data => {
              var currentTotal = data.total_price;
              updateProgressBar(currentTotal);
          });
    }
    
    // Listen for changes to the cart using Shopify's built-in API
    document.addEventListener('cart.requestComplete', function() {
      fetchCartAndUpdateProgressBar();
    });
    
    // Initial fetch and update when the page loads
    fetchCartAndUpdateProgressBar();  
      
      /*
      if($(window).width() <= 575){
          window.location = '/checkout';
      }
      */
    },
  });
}

$(document).ready(function () {
  $(".shopify-currency-form select").on("change", function (e) {
    $(this).closest("form").submit();
  });
});

$(".plus-wc").click(function () {
  var plus_val = $(this)
    .parent(".QuantitySelector")
    .find(".QuantitySelector__CurrentQuantity")
    .val();
  $(this)
    .parent(".QuantitySelector")
    .find(".QuantitySelector__CurrentQuantity")
    .val(+plus_val + 1);

  var itemPrice = parseInt(
    $(this).parents(".upsell-drawer-item").find(".money").attr("data-price")
  );
  var itemoffer2qty2 = parseInt(
    $(this)
      .parents(".upsell-drawer-item")
      .find(".money")
      .attr("data-offer2qty2")
  );
  var itemoffer2qty3 = parseInt(
    $(this)
      .parents(".upsell-drawer-item")
      .find(".money")
      .attr("data-offer2qty3")
  );

  var itemQty = parseInt(
    $(this)
      .parent(".QuantitySelector")
      .find(".QuantitySelector__CurrentQuantity")
      .val()
  );

  if ($(this).hasClass("discount_offer_hallowen")) {
    if (itemQty == 1) {
      var itemPrice_discount = parseFloat((itemPrice * 30) / 100).toFixed();
      var main_itemPrice_discount = parseFloat(itemPrice - itemPrice_discount);
      var itemTotal = main_itemPrice_discount;
    } else if (itemQty == 2) {
      var itemPrice_discount = Math.floor(parseFloat((itemPrice * 35) / 100));
      var main_itemPrice_discount = parseFloat(itemPrice - itemPrice_discount);
      var multiply_val = itemQty * main_itemPrice_discount;
      var itemTotal = multiply_val;
    } else {
      var itemPrice_discount = parseFloat((itemPrice * 40) / 100.0).toFixed();
      var main_itemPrice_discount = parseFloat(itemPrice - itemPrice_discount);
      var multiply_val = itemQty * main_itemPrice_discount;
      var itemTotal = multiply_val;
    }
  } else {
    if ($(this).hasClass("discount_price")) {
      if (itemQty == 1) {
        var itemTotal = itemQty * itemPrice;
      } else if (itemQty == 2) {
        var itemTotal = itemQty * itemoffer2qty2;
      } else {
        var itemTotal = itemQty * itemoffer2qty3;
      }
    } else {
      var itemTotal = itemQty * itemPrice;
    }
  }

  $(this)
    .parents(".upsell-drawer-item")
    .find(".money")
    .html(Shopify.formatMoney(itemTotal, window.theme.moneyFormat));

  var original_qty_plus = parseInt(+plus_val + 1);

  var changeItemprice = parseInt(
    $(this)
      .parents(".upsell-drawer-item")
      .find(".Normalprice")
      .attr("data-price")
  );
  var changeItemcomapreprice = parseInt(
    $(this)
      .parents(".upsell-drawer-item")
      .find(".Compareprice")
      .attr("data-comparePrice")
  );
  var totalPrice = changeItemprice * original_qty_plus;
  var totalcomparePrice = changeItemcomapreprice * original_qty_plus;

  $(this)
    .parents(".upsell-drawer-item")
    .find(".Normalprice")
    .html(Shopify.formatMoney(totalPrice, window.theme.moneyFormat));
  $(this)
    .parents(".upsell-drawer-item")
    .find(".Compareprice")
    .html(Shopify.formatMoney(totalcomparePrice, window.theme.moneyFormat));
});

$(".minus-wc").click(function () {
  var minus_val = $(this)
    .parent(".QuantitySelector")
    .find(".QuantitySelector__CurrentQuantity")
    .val();

  if (minus_val > 1) {
    if (minus_val > 1)
      $(this)
        .parent(".QuantitySelector")
        .find(".QuantitySelector__CurrentQuantity")
        .val(+minus_val - 1);

    var itemPrice = parseInt(
      $(this).parents(".upsell-drawer-item").find(".money").attr("data-price")
    );
    var itemoffer2qty2 = parseInt(
      $(this)
        .parents(".upsell-drawer-item")
        .find(".money")
        .attr("data-offer2qty2")
    );
    var itemoffer2qty3 = parseInt(
      $(this)
        .parents(".upsell-drawer-item")
        .find(".money")
        .attr("data-offer2qty3")
    );
    var itemQty = parseInt(
      $(this)
        .parent(".QuantitySelector")
        .find(".QuantitySelector__CurrentQuantity")
        .val()
    );

    if ($(this).hasClass("discount_offer_hallowen")) {
      if (itemQty == 1) {
        var itemPrice_discount = parseFloat((itemPrice * 30) / 100).toFixed();
        var main_itemPrice_discount = parseFloat(
          itemPrice - itemPrice_discount
        );
        var itemTotal = main_itemPrice_discount;
      } else if (itemQty == 2) {
        var itemPrice_discount = Math.floor(parseFloat((itemPrice * 35) / 100));
        var main_itemPrice_discount = parseFloat(
          itemPrice - itemPrice_discount
        );
        var multiply_val = itemQty * main_itemPrice_discount;
        var itemTotal = multiply_val;
      } else {
        var itemPrice_discount = parseFloat((itemPrice * 40) / 100.0).toFixed();
        var main_itemPrice_discount = parseFloat(
          itemPrice - itemPrice_discount
        );
        var multiply_val = itemQty * main_itemPrice_discount;
        var itemTotal = multiply_val;
      }
    } else {
      if ($(this).hasClass("discount_price")) {
        if (itemQty == 1) {
          var itemTotal = itemQty * itemPrice;
        } else if (itemQty == 2) {
          var itemTotal = itemQty * itemoffer2qty2;
        } else {
          var itemTotal = itemQty * itemoffer2qty3;
        }
      } else {
        var itemTotal = itemQty * itemPrice;
      }
    }

    $(this)
      .parents(".upsell-drawer-item")
      .find(".money")
      .html(Shopify.formatMoney(itemTotal, window.theme.moneyFormat));

    var original_qty_plus = parseInt(+minus_val - 1);

    var changeItemprice = parseInt(
      $(this)
        .parents(".upsell-drawer-item")
        .find(".Normalprice")
        .attr("data-price")
    );
    var changeItemcomapreprice = parseInt(
      $(this)
        .parents(".upsell-drawer-item")
        .find(".Compareprice")
        .attr("data-comparePrice")
    );
    var totalPrice = changeItemprice * original_qty_plus;
    var totalcomparePrice = changeItemcomapreprice * original_qty_plus;

    $(this)
      .parents(".upsell-drawer-item")
      .find(".Normalprice")
      .html(Shopify.formatMoney(totalPrice, window.theme.moneyFormat));
    $(this)
      .parents(".upsell-drawer-item")
      .find(".Compareprice")
      .html(Shopify.formatMoney(totalcomparePrice, window.theme.moneyFormat));
  }
});

$(".wc-final-checkout").on("click", function () {
  //window.location = '/checkout';
  $(".Cart__Checkout.Button--primary.Button--full.checkout-btn-hide").trigger(
    "click"
  );
});

var Shopify = Shopify || {};
// ---------------------------------------------------------------------------
// Money format handler
// ---------------------------------------------------------------------------
Shopify.money_format = "€{{amount_with_comma_separator}}";
Shopify.formatMoney = function (cents, format) {
  if (typeof cents == "string") {
    cents = cents.replace(".", "");
  }
  var value = "";
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = format || this.money_format;

  function defaultOption(opt, def) {
    return typeof opt == "undefined" ? def : opt;
  }

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ",");
    decimal = defaultOption(decimal, ".");

    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);

    var parts = number.split("."),
      dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousands),
      cents = parts[1] ? decimal + parts[1] : "";

    return dollars + cents;
  }

  switch (formatString.match(placeholderRegex)[1]) {
    case "amount":
      value = formatWithDelimiters(cents, 2);
      break;
    case "amount_no_decimals":
      value = formatWithDelimiters(cents, 0);
      break;
    case "amount_with_comma_separator":
      value = formatWithDelimiters(cents, 2, ".", ",");
      break;
    case "amount_no_decimals_with_comma_separator":
      value = formatWithDelimiters(cents, 0, ".", ",");
      break;
  }

  return formatString.replace(placeholderRegex, value);
};

function Utils1() {}
Utils1.prototype = {
  constructor: Utils1,
  isElementInView: function (element, fullyInView) {
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();

    if (fullyInView === true) {
      return pageTop < elementTop && pageBottom > elementBottom;
    } else {
      return elementTop <= pageBottom && elementBottom >= pageTop;
    }
  },
};

var Utils1 = new Utils1();

$(window).scroll(function () {
  if ($(".ProductForm").length) {
    var isElementInView = Utils1.isElementInView($(".ProductForm"), false);
  
    if (isElementInView) {
      $("body").find(".product_sticky_bar_bottom").removeClass("active");
    } else {
      $("body").find(".product_sticky_bar_bottom").addClass("active");
    }
  }
});

$(".upsell_drawer_scrollbar .upsell-drawer-list").scroll(function () {
  // var MainpageTop = $('.upsell_drawer_scrollbar .upsell-drawer-list').scrollTop();
  //var Itemheight = $('.upsell-drawer-item').outerHeight();

  if ($(this).find(".upsell-drawer-item:last-child").position().top >= 375) {
    $(".upsell_show_more_upsell").removeClass("hide_bar");
  } else {
    $(".upsell_show_more_upsell").addClass("hide_bar");
  }
});

  $(".qty_selector_discount_old .single_quantity").click(function () {
    $(".qty_selector_discount_old .single_quantity").removeClass("selected");
    $(this).addClass("selected");
    var g_qty = $(this).data("qty");
    $(".pass_qty_hidden").val(g_qty);
  
    var final_price = $(this).find("h6").data("oprice");
    $(".changable_price_main").html($(this).data("price"));
    $(".compare_at_price_main").html($(this).data("old-price"));
  
    if (g_qty == "1") {
      $(".offer_two_three").hide();
    } else {
      $(".offer_two_three").show();
    }
  });

  $(".qty_selector_discount .single_quantity").click(function () {
    $(".qty_selector_discount .single_quantity").removeClass("selected");
    $(this).addClass("selected");
    var g_qty = $(this).data("qty");
    $(".pass_qty_hidden").val(g_qty);
  
    var final_price = $(this).find("h6").data("oprice");
    $(".changable_price_main").html(final_price);
  
    if (g_qty == "1") {
      $(".offer_two_three").hide();
    } else {
      $(".offer_two_three").show();
    }
  });

const element_single_quantity = document.querySelector('.single_quantity');
if (element_single_quantity) {
  document.querySelector(".single_quantity").addEventListener("click", () => {
    document.querySelector(".changable_price_main").innerText = document.querySelector(".quanity-price").innerText; //try this code
  });
}

// Video Slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  autoplay: {
    delay: 12000,
  },
  disableOnInteraction: false,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(".ugc-section-video").click(function () {
  this.paused ? this.play() : this.pause();
});

// Klarna modal 
 
$(document).ready(function() {
  const quantityNumber = $(".product-atc__quantity__number");
  const minusAtc = $(".minus_atc");
  const comparePrice = $(".compare_at_price_main").data("compare") / 100;
  
  const metaTag = document.querySelector('meta[property="omega:tags"]');
      if (metaTag) {
          const getTags = metaTag.content;
      }
  
  $('.product-atc__quantity__button').on('click', function() {
    const datatype = $(this).data("type");
    let qntty = parseInt(quantityNumber.text());
    let finish_disk_price, finish_full_price, saleval;

    qntty = datatype === "minus" ? qntty - 1 : qntty + 1;

    minusAtc.prop('disabled', qntty <= 1);

    if (getTags.includes("BFCM_sale")) {
      
      switch(qntty) {
        case 1:
          finish_disk_price = comparePrice * .75;
          break;
        case 2:
          finish_disk_price = comparePrice * .7;
          break;
        default:
          finish_disk_price = comparePrice * .65;
          break;
      }
      
      finish_full_price = (comparePrice * qntty).toFixed(2);
      finish_disk_price = (finish_disk_price * qntty ).toFixed(2);
      saleval = 100 - (finish_disk_price * 100 / comparePrice);
    }else{
      const compaPrice = parseFloat(item['CompareAtPrice'].replace(",", ".").replace("€", ""));
      const normaPrice = parseFloat(item['Price'].replace(",", ".").replace("€", ""));
      
      finish_full_price = (compaPrice * qntty).toFixed(2);
      finish_disk_price = (normaPrice * qntty ).toFixed(2);
      saleval = 100 - (normaPrice * 100 / compaPrice);
    }

    $(".sticky_product_name_after_old").html("<b>was</b><p>€" + finish_full_price + "</p>");
    $(".sticky_product_name_after_current").html("€" + finish_disk_price);
    $(".sticky_product_name_percent").html( saleval + "%" );

    quantityNumber.text(qntty);
  });
});

function getLangInfo(){
  $.get("https://ipinfo.io", function(response) {
    const country = response.country;
    const wglang = localStorage.getItem('wglang');
  
    if (country === "AT" && wglang === "de") {
      $(".stock-section-content").append("🇦🇹");
    } else if (country === "DE" && wglang === "de") {
      $(".stock-section-content").append("🇩🇪");
    }
  }, "jsonp").fail(function(jqXHR, textStatus, errorThrown) {
    console.error("Error fetching IP info:", textStatus, errorThrown);
  });
}

$(document).ready(function() {
  var countDownDate = new Date(new Date().setHours(24, 0, 0, 0)).getTime();
  
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
  
    var hours = ('0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
    var minutes = ('0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
    var seconds = ('0' + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);
  
    $(".last_chance_bar__inner__hours").html(hours);
    $(".last_chance_bar__inner__mins").html(minutes);
    $(".last_chance_bar__inner__secs").html(seconds);
  
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);

});

$(document).ready(function() {
    const metaTag = document.querySelector('meta[property="omega:tags"]');
    let getTags = '';

    if (metaTag) {
        getTags = metaTag.content;
    }

    if (getTags && !getTags.includes("BFCM_sale")) {
        const compaPrice = parseFloat(item['CompareAtPrice'].replace(",", ".").replace("€", ""));
        const normaPrice = parseFloat(item['Price'].replace(",", ".").replace("€", ""));
        
        const finish_full_price = compaPrice.toFixed(2);
        const finish_disk_price = normaPrice.toFixed(2);

        $(".sticky_product_name_after_old").html("<b>was</b><p>€" + finish_full_price + "</p>");
        $(".sticky_product_name_after_current").html("€" + finish_disk_price);
    }
});

$(document).ready(function(){
$(".cart_add").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    
    var ids = $(this).parents(".Product__Info").find('.bundle_pick_ball_box_in.active input[name="id"]').val();
    var qty = $(this).parents(".Product__Info").find('.bundle_pick_ball_box_in.active input[name="quantity"]').val();

    $.ajax({
       type: "POST",
       url: "/cart/add.js",
       data: {
         "id": ids,
         "quantity": qty
       },
       success: function(){
         // window.location.href="https://brightsport.com/cart"; 
           openCart();
        updateTopCartCount();
        // r();
         function updateProgressBar(currentTotal) {
          var thresholdInCents = 5000;
          var progressValue = document.querySelector('.progress-value');
          var percentage = (currentTotal / thresholdInCents) * 100;
        
          percentage = Math.min(percentage, 100);
          progressValue.style.width = percentage + '%';
        }
       }
    });
});
});