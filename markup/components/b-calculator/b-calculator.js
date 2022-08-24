import Vue from "vue";

import bCalculatorVue from './b-calculator.vue'

const BCalculator = function () {
    if ($('#calculator').length == 0) {
        return
    }
    var calculator = new Vue({
        el: '#calculator',
        render: h => h(bCalculatorVue),

    })
}
window.BCalculator = BCalculator
export default BCalculator
