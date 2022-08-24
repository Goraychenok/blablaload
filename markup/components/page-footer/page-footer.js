export default function () {
    let context = 'page-footer';
    if ($(`.${context}`).length == 0) {
        return
    }

    $(".page-footer__link").click(function(event) {
        event.preventDefault();
        const to = $(this).attr('href');


        $('html, body').animate({
            scrollTop: $(to).offset().top - 200
        }, 2000);
    });
}
