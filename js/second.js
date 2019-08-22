let str = 'урок-3-был слишком легким';
str = str[0].toUpperCase().concat(str.substring(1,25));
str1 = ' ' + str[4];
str2 = str.substring(0,4);
str3 = ' ' + str.substring(5,6);
str4 = ' ' + str.substring(7,25);
str5 = str.substring(0,19);
str6 = 'о';
str7 = str5.substring(0,17);

console.log(str2.concat(str3).concat(str4));
console.log(str5);
console.log(str7.concat(str6));

let arr = [20,30,1,'Человек',2,3];
let numbers = arr[0] + arr[1] + arr[2] + arr[4] + arr[5];
numbers = Math.sqrt(numbers);
console.log(numbers);


