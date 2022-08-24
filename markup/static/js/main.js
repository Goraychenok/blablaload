'use strict';


import base from 'components/page/page'
import header from 'components/page-header/page-header'
import form from 'static/js/base/send-form'
import calk from 'components/b-calculator/b-calculator'
import dropText from 'components/b-auestions-item/b-auestions-item'
import pageFooter from "../../components/page-footer/page-footer";

$(document).ready(function() {
    base();
    header();
    form();
    calk();
    dropText()
    pageFooter()

    $("body").css("opacity", "1").addClass("body-ready");
})
