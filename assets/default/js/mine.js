$(".txa").each(function(){
    $(this).html($(this).text().replace(/(.*[^\n])/g,"<p>$1</p>"));
});
$('.txa p').each(function() {
    var $p = $(this);
    if($.trim($p.html())==='') {
        $p.remove();
    }
});

$('.User-avtar').click(function () {
    if ($(".User-Dropdown").hasClass("U-open")) {
        $('.User-Dropdown').removeClass("U-open");
    }
    else {
        $('.User-Dropdown').addClass("U-open");
    }
});
$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
            countNum: countTo
        },

        {

            duration: 9000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }

        });


});
$(document).ready(function () {



    $('.sl-nav li').click(function () {
        $(this).find('ul').toggleClass('active');
    });
   
});

 // Cache selectors
    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight() + 15,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });
    
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
$('.referral_label').click(function () {
    $('#referral_code').slideToggle();
});
$('.promo_label').click(function () {
    $('#promo_code').slideToggle();
});





document.getElementById('press').addEventListener('click', function(){
    document.getElementById('vid').play();
    document.getElementById('press').style.opacity = 0;
    document.getElementById('press2').style.opacity = 0;
});
document.getElementById('vid').onended = function(){
    document.getElementById('press').style.opacity = 1;
    document.getElementById('press2').style.opacity = 1;
}
