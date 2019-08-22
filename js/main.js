let money;
let time;
let name;
let price = 100;
let sale;

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: price
};

function Money() {
    while (isNaN(money) || money == '' || money == null){
        money = prompt('Сколько у вас денег?');
        mainList.budget = money;
    }
}

function shopName() {
    name = prompt('Название вашего магазина?');
    mainList.shopName = name;
}

function chooseGoods() {
    for (let b = 0; b < 3; b++){
        let a = prompt('Какой товар?');
        if ((typeof(a)) === "string" && a != null && a != '' && a.length < 50){
            console.log('Все верно!');
            mainList.shopGoods[b] = a;
        }
    }
}

function clock() {
    time = prompt('Сколько сейчас времени?');
    if (9 < time < 18){
        mainList.open = true;
        if (15 < time < 18){
            sale = true;
            price = price * 0.8;
            mainList.discount = price;
        }
    }
}

function Employers() {
    for (let i = 1; i < 5; i++){
        let n = prompt('Имя сотрудника ' + i);
        let number = prompt('Номер сотрудника ' + i);
        mainList.employers[i] = 'Номер: ' + number + ', Имя: ' + n;
    }
}

function Budhet() {
   console.log(mainList.budget / 30);
}

/*
shopName();
Employers();
clock();
Money();
chooseGoods();
Budhet();
console.log(mainList);*/
