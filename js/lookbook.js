
$(document).on('click', '.favorites', function (e) {
    e.preventDefault();
    var id = $(this).hasClass('favorites-active');

    if (!id) {

        $(this).addClass('favorites-active');

    } else {

        $(this).removeClass('favorites-active');

    }

});





