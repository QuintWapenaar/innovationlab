$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 380) {
        $('.extra-info').fadeIn(800);
    } else {
        $('.extra-info').fadeOut(800);
    }
});