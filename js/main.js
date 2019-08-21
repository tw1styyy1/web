let money = prompt('ваш бюджет');
let name = prompt('название вашего магазина');

let mainList = {
    dengi: money,
    shopName: name,
    shopGoods:[],
    employers:{},
    open: false
};

for (let i = 0; i < 3; i++){
    mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать");
}

console.log(mainList);
