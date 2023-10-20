let timeoutId;

$('.part').hover(
    function () {
        timeoutId = setTimeout(function () {
            $('.description').html($(this).attr('description-data'));
            $('.description').fadeIn();
        }.bind(this), 200);
    },
    function () {
        clearTimeout(timeoutId);
        $('.description').fadeOut(50);
    }
);
