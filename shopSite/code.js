"use strict";
//Здесь объявляю некоторые переменные var'ом, так как это основные переменные в небольших по объёму кода функциях, так что риска перепутать или записать что-то не туда, куда надо, нет, а беспокоиться на счёт их видимости в циклах и условиях не хочу.
let goods = [
    {id: 1, name: 'Пылесос1', price: 300},
    {id: 2, name: 'Плита1', price: 600},
    {id: 3, name: 'Ноутбук1', price: 500},
    {id: 4, name: 'Клавиатура1', price: 150},
    {id: 5, name: 'Мышь1', price: 50},
    {id: 6, name: 'Монитор1', price: 250},
    {id: 7, name: 'Геймпад1', price: 100}
];

let basket = {
    goodList: [],

    putProduct (item) {
        var c = 0;                                  
        for (let i = 0; i < this.goodList.length; i++) {
            if (item.id === this.goodList[i].id) {
                this.goodList[i].quantity += 1;
                c += 1;
                return;
            }
        }
        if (c === 0) {
            let i = {};
            i.id = item.id;
            i.name = item.name;
            i.price = item.price;
            i.quality = 1;
            this.goodList.push(i);
            return;
        }
    },
    
    countTotalNumber () {
        var total = 0;
        for (let i = 0; i < this.goodList.length; i++) {
            total += this.goodList[i].quantity;
            return total;
        }
    },

    countTotalPrice () {
        var price = 0;
        for (let i = 0; i < this.goodList.length; i++) {
            price += this.goodList[i].price * this.goodlist[i].quantity;
        }
        return price;
    },

};

