export default function (){
    let context = 'b-auestions-item';
    if ($(`.${context}`).length == 0) {
        return
    }

    const allItems = $(".b-auestions-item__header");
    $(allItems).each(function (i, item) {
        $(item).closest('.b-auestions-item').find('.b-auestions-item__body').removeClass('b-auestions-item__body_active').slideUp()
    })

    $(".b-auestions-item__header").click(function () {
        const self  = $(this);
        const body = $(this).closest('.b-auestions-item').find('.b-auestions-item__body')
        const arrow = $(this).closest('.b-auestions-item').find('.b-auestions-item__arrow')
        if($(body).hasClass('b-auestions-item__body_active')) {
            $(self).removeClass('b-auestions-item__header_active')
            $(body).removeClass('b-auestions-item__body_active').slideUp()
            $(arrow).removeClass('b-auestions-item__arrow_active')
        }else {
            $(self).addClass('b-auestions-item__header_active')
            $(body).addClass('b-auestions-item__body_active').slideDown()
            $(arrow).addClass('b-auestions-item__arrow_active')
        }
    })
}
