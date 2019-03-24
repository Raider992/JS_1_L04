"use strict";

for (let i = 1; i <= goods.length; i++) {
    if (i % 2 === 0) {
        basket.putProduct(goods[i]);
    } else {
        basket.putProduct(goods[i]);
        basket.putProduct(goods[i]);
    }
}

console.log(basket.countTotalNumber);
console.log(basket.countTotalPrice);