export default function() {
    let context = 'page-header';
    if ($(`.${context}`).length == 0) {
        return
    }

    $(`.js-menu`).on('click', function (e) {
        e.stopPropagation();
        const $ctx = $(this).closest(`.${context}`)
        const burgerClass = 'page-header__mobile-menu'
        const $burger = $ctx.find(`.${burgerClass}`)
        const heightHeader = $ctx.height()
        const screenHeight = window.screen.height
        const heightMobileMenu = screenHeight - heightHeader
        if ($burger.is(`.${burgerClass}_open`)) {
            $burger.removeClass(`${burgerClass}_open`)
            $burger.slideUp(600, function () {
                $burger.removeClass(`${burgerClass}_from-sticky`)
            })
            //setTimeout(() => { ;}, 1000)
            $(`.gamburger`).removeClass(`open`)
            $('body, html').removeClass('menu-open')

        } else {
            const isSticky = $ctx.is('.fixed-header')
            if (isSticky) {
                $burger.addClass(`${burgerClass}_from-sticky`)
            }
            $burger.addClass(`${burgerClass}_open`)
            $burger.css({'top' : `${heightHeader}px`, 'height' : `${heightMobileMenu}px`})
            $(`.gamburger`).addClass(`open`)
            $('body, html').addClass('menu-open')

            $burger.slideDown()
            $(window).trigger('resize')
        }
        return false
    })

    $(".page-header__link").click(function(event) {
        event.preventDefault();
        const to = $(this).attr('href');


        $('html, body').animate({
            scrollTop: $(to).offset().top - 200
        }, 2000);
    });


}
