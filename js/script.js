$(function () {
    //this code will execute after the DOM is loaded
    var carouselList = $('#carousel ul');

    var moveFirstSlide = function () {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});

    };

    var changeSlide = function () {
        carouselList.animate({
            'marginLeft': -400
        }, 500, moveFirstSlide);
    };

    setInterval(changeSlide, 3000);
});