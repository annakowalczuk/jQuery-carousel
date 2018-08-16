$(function () {
    //this code will execute after the DOM is loaded
    var carouselList = $('#carousel ul');

    var moveFirstSlide = function () {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({
            marginLeft: 0
        });
    };

    var moveLastSlide = function () {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.css({
            marginLeft: -400
        });
    };

    var changeSlide = function () {
        carouselList.animate({
            'marginLeft': -400
        }, 500, moveFirstSlide);
    };

    var id = setInterval(changeSlide, 3000);
   

    $('.right-carousel-control').click(function () {
        clearInterval(id);
        changeSlide();
        id = setInterval(changeSlide, 3000);
    });

    $('.left-carousel-control').click(function () {
        clearInterval(id);
        moveLastSlide();
        carouselList.animate({
            'marginLeft': 0
        }, 500, );
        id = setInterval(changeSlide, 3000);
    });


});