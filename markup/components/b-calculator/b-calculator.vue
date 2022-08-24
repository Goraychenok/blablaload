<template lang="pug">
    include ./template
</template>

<script>
import vSelect from "vue-select";
//import 'vue-select/dist/vue-select.css';

export default{
    components: {
        vSelect,
    },
    data() {
        return {
            long: '',
            weight: '',
            cities: [
                'Тула',
                'Новомосковск',
                'Донской',
                'Щёкино',
                'Узловая',
                'Киреевск',
                'Ясногорск',
                'Болохово',
                'Калуга',
                'Обнинск',
                'Малоярославец',
                'Балабаново',
                'Жуков',
                'Белоусово',
                'Боровск',
                'Кремёнки',
                'Ермолино',
                'Полотняный завод',
                'Товарково',
                'Детчино',
                'Добрино',
                'Серпухов',
                'Пущино',
                'Чехов',
                'Протвино',
                'Санкт -Петербург'
            ],
            typeOfSize: 1,
            longName: 'Метры',
            typeLongInSearch: 0,
            filterData: [
                {
                    'id': 1,
                    'name': 'Откуда',
                    'code': 'from',
                    'type': 'select',
                    'value': 'Откуда',
                    'options': [],
                },
                {
                    'id': 2,
                    'name': 'Куда',
                    'code': 'to',
                    'type': 'select',
                    'value': 'Куда',
                    'options': []
                },
                {
                    'id': 3,
                    'name': 'Длинна',
                    'code': 'long',
                    'type': 'select',
                    'value': 'Длинна',
                    'options': [
                        'Метры по полу',
                        'Евро палеты (1,2 на 0,8)',
                        'Финские палеты (1,2 на 1)',
                        'Американский (1,2 на 1,2)'
                    ],
                },
                {
                    'id': 4,
                    'name': 'Метры',
                    'code': 'meters',
                    'value': '',
                    'type': 'meters'
                },
                {
                    'id': 6,
                    'name': 'Высота',
                    'code': 'height',
                    'value': '',
                    'type': 'text',
                },
                {
                    'id': 7,
                    'name': 'Вес',
                    'code': 'weight',
                    'value': '',
                    'type': 'text'
                },
            ],
            items: JSON.parse(window.api).items,
            result: 'Введите все параметры'
        };
    },
    methods: {
        getFilterValueByCode(code) {
            return (this.filterData.find(n => n.code == code) || {}).value
        },
        checkValue(arr) {
            for(let i = 0; i < arr.length; i ++){
                if(arr[i] === '' || arr[i] === null) {
                    return false
                }
            }
            return  true
        },

        checkLong(long, meters) {
            if((long !== '' || long!= null) && meters === '') {
                switch (long) {
                    case 'Метры по полу':
                        this.longName = 'Метры'
                        break;
                    case 'Евро палеты (1,2 на 0,8)':
                        this.longName = 'Шт'
                        break
                    case 'Финские палеты (1,2 на 1)':
                        this.longName = 'Шт'
                        break
                    case 'Американский (1,2 на 1,2)':
                        this.longName = 'Шт'
                        break
                }
            }else if((long !== '' || long!= null) && meters !== '') {
                switch (long) {
                    case 'Метры по полу':
                        this.longName = 'Метры'
                        break;
                    case 'Евро палеты (1,2 на 0,8)':
                        this.longName = 'Шт'
                        break
                    case 'Финские палеты (1,2 на 1)':
                        this.longName = 'Шт'
                        break
                    case 'Американский (1,2 на 1,2)':
                        this.longName = 'Шт'
                }
                const met = Number(meters);
                switch (long) {
                    case 'Метры по полу':
                        if (met === 0 || met > 5 || met < 0) {
                            return 'Длинна от 4,2 до 5 метров'
                        }
                        this.typeLongInSearch = 1
                        break;
                    case 'Евро палеты (1,2 на 0,8)':
                        if(met === 0 || met > 4 || met < 0) {
                            return 'Колличество палет от 1 до 4'
                        }
                        this.typeLongInSearch = 2
                        break
                    case 'Финские палеты (1,2 на 1)':
                        if(met === 0 || met > 2 || met < 0) {
                            return 'Колличество палет от 1 до 2'
                        }
                        this. typeLongInSearch = 3
                        break
                    case 'Американский (1,2 на 1,2)':
                        if(met === 0 || met > 2 || met < 0) {
                            return 'Колличество палет от 1 до 2'
                        }
                        this.typeLongInSearch = 4
                        break
                }
            }
            return false
        },
        checkHeight(height) {

            if(height !== '' && height !== null) {
                height = Number(height)
                if(height <= 210 && height > 0) {
                    return 210
                }else if(height > 210 && height < 250) {
                     return 210
                }else {
                    return 'Максимальная высота 250м и указывается в числах'
                }
            }
            return false
        },
        checkWeight(weight) {
            if(weight !== '' && weight !== null) {
                weight = Number(weight)
                if(weight < 500 && weight > 0) {
                    return 500
                }else if(weight >= 500 && weight < 600) {
                    return 600
                }else if(weight >= 600 && weight < 700) {
                    return 700
                }else if(weight >=700 && weight < 700) {
                    return 800
                }else if(weight >= 800 && weight < 900) {
                    return 900
                }else if(weight >= 900 && weight < 1000) {
                    return 1000
                }else if(weight >= 1000 && weight < 1100) {
                    return 1100
                }else if(weight >= 1100 && weight < 1200) {
                    return 1200
                }else if(weight >= 1200 && weight < 1300) {
                    return 1300
                }else if(weight >= 1300 && weight < 1400) {
                    return 1400
                }else if(weight >= 1400 && weight < 1500) {
                    return 1500
                }else {
                    return 'Максимальный груз 1500кг'
                }
            }
            return false
        },
        isEmptyObject(obj) {
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    return false;
                }
            }
            return true;
        },
        checkMeters(long) {
            if(long === 0 || long < 0 || long === '') {
                return 'Длинна должна быть больше 0 и больше 5'
            }else if(long <= 4.2) {
                return 4.2
            }else if(long > 4.2 && long <= 5) {
                return 5
            }
            return false
        },
        priceFormatter: (v) => {    //добавляет пробелы в цену
            v = Math.round(v)
            v = v + '';
            v = v.split('').reverse().map((item, i) => i % 3 == 0 ? item + ' ' : item)
            v = v.reverse().join('');
            return v
        },
        checkCity(city) {
            switch (city) {
                case 'Новомосковск':
                    return 3000
                break
                case 'Донской':
                    return 3000
                break
                case 'Щёкино':
                    return 1000
                break
                case 'Узловая':
                    return 2500
                break
                case 'Киреевск':
                    return 2000
                break
                case 'Болохово':
                    return 1000
                break
            }
            return false
        }
    },
    computed: {
        getCost() {
            const cityFirst = this.getFilterValueByCode('from')
            const citySecond = this.getFilterValueByCode('to')
            const typeLong = this.getFilterValueByCode('long')
            let meters = this.getFilterValueByCode('meters')
            let weight = this.getFilterValueByCode('weight')
            let height = this.getFilterValueByCode('height')
            if(cityFirst === citySecond) {
                return this.result = 'Выберите два разных пункта'
            }

            if(this.checkLong(typeLong, meters)) {
                return this.checkLong(typeLong, meters)
            }

            if(this.checkHeight(height)) {
                height = this.checkHeight(height)
                if(typeof(height) != 'number') {
                    return height
                }
            }

            if(this.checkWeight(weight)) {
                weight = this.checkWeight(weight)
                if(typeof(weight) != 'number') {
                    return weight
                }
            }




            if(!this.checkValue([cityFirst, citySecond, typeLong, meters, weight, height])){
                return this.result
            }

            if (this.typeLongInSearch === 1) {
                if(this.checkMeters(meters)) {
                    meters = this.checkMeters(meters)
                    if(typeof(meters) != 'number') {
                        return meters
                    }
                }
            }

            let price = {}

            switch (this.typeLongInSearch) {
                case 1 :
                    price = this.items.find(n => {
                        return (n.metr ==  meters &&
                        n.weight == weight &&
                        n.height == height)
                    },)
                    break
                case 2 :
                    price = this.items.find(n => {
                        return (n.evro ==  meters &&
                            n.weight == weight &&
                            n.height == height)
                    },)
                    break
                case 3 :
                    price = this.items.find(n => {
                        return (n.fin ==  meters &&
                            n.weight == weight &&
                            n.height == height)
                    },)
                    break
                case 4 :
                    price = this.items.find(n => {
                        return (n.amerika ==  meters &&
                            n.weight == weight &&
                            n.height == height)
                    },)
                    break
            }
            if(price !== undefined) {
                let finalCost = price.cost
                if(this.checkCity(citySecond)) {
                    finalCost = finalCost + this.checkCity(citySecond)
                }

                return  this.result = `Стомость <span>${this.priceFormatter(finalCost)}</span> ₽`
            }else {
                return  this.result = 'К сожалению по вашим параметрам ничего не найдено'
            }




        }
    },
    mounted() {
        this.filterData[0].options = this.cities
        this.filterData[1].options = this.cities
    },
    filters: {

    }
}
</script>
