$(document).ready(function () {
   $('.thumbnails img').on('click',function () {
       $(this).addClass('selected').siblings('img').removeClass('selected');
       $('.master-img img').attr('src', $(this).attr('src'));
    });

    //controling by arrows
    $('.gallery button.right').on('click', function () {
        if( $('.thumbnails .selected').is(':last-child') ) {
            $('.thumbnails img').eq(0).click();
        } else {
            $('.thumbnails .selected').next().click();
        }
    });
    $(document).keydown(function (e) {
        if( e.keyCode === 	39 ) {
            if( $('.thumbnails .selected').is(':last-child') ) {
                $('.thumbnails img').eq(0).click();
            } else {
                $('.thumbnails .selected').next().click();
            }
        }
    });
    
    $('.gallery button.left').on('click', function () {
        if( $('.thumbnails .selected').is(':first-child') ) {
            $('.thumbnails img:last').click();
        } else {
            $('.thumbnails .selected').prev().click();
        }
    });
    $(document).keydown(function (e) {
        if( e.keyCode === 	37 ) {
            if( $('.thumbnails .selected').is(':first-child') ) {
                $('.thumbnails img:last').click();
            } else {
                $('.thumbnails .selected').prev().click();
            }
        }
    });

    // adjust width of thumbnail images
    let widthOfThumbnails =  $('.thumbnails').width();
    let numberOfThumbnails = $('.thumbnails img').length;
    $('.thumbnails img').css({
        'width': ( widthOfThumbnails/numberOfThumbnails )
    });
           
});
