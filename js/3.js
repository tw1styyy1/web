/*arr.pop(); // удаляет из массива последний элемент
arr.push(6); // добавляет в массив с конца
arr.shift(); // удаляет в массив с начала
arr.unshift(); // добавляет в массив с начала */

let soldier = {
    health: 400,
    armor: 100,
};

let john = {
    health: 100,
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);