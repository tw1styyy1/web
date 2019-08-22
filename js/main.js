let money, time, name, price = 100, sale, items, mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: price,
    shopItems: [],
    chooseGoods: function chooseGoods() {
        for (let b = 0; b < 3; b++) {
            let a = prompt('Какой товар?');
            if ((typeof (a)) === "string" && a != null && a != '' && a.length < 50) {
                console.log('Все верно!');
                mainList.shopGoods[b] = a;
            }
        }
    },
    clock: function clock() {
        time = prompt('Сколько сейчас времени?');
        if (9 < time < 18) {
            mainList.open = true;
            if (15 < time < 18) {
                sale = true;
                price = price * 0.8;
                mainList.discount = price;
            }
        }
    },
    Budhet: function Budhet() {
        console.log('Ежедневный бюджет: ' + mainList.budget / 30);
    },
    Money: function Money() {
        while (isNaN(money) || money == '' || money == null) {
            money = prompt('Сколько у вас денег?');
            mainList.budget = money;
        }
    },
    shopName: function shopName() {
        name = prompt('Название вашего магазина?');
        mainList.shopName = name;
    },
    Employers: function Employers() {
        for (let i = 1; i < 5; i++) {
            let n = prompt('Имя сотрудника ' + i);
            let number = prompt('Номер сотрудника ' + i);
            mainList.employers[i] = 'Номер: ' + number + ', Имя: ' + n;
        }
    },
    chooseShopItem: function chooseShopItem() {
        while ((typeof (items)) != "string" || items == '' || items == null) {
            items = prompt('Перечислите ваши товары через запятую. Пример: "Машина, Масло, Ключ"');
        }
        if ((typeof (items)) === "string" && items != null && items != '' && items.length < 50) {
            mainList.shopItems = items.split(',');
            mainList.shopItems.push(prompt('Подождите еще'));
            mainList.shopItems.sort();
            mainList.shopItems.forEach(function (item, i) {
                alert('Вы можете купить у нас: '+ (i+1) + ' - ' + item);
            })
        }
    }
};

/*for (let key in mainList){
    console.log('Наш магазин включает в себя: ' + key);
}*/

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix[2][1]);
