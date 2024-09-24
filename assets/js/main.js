'use strict';

//ЗАДАНИЕ 1

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
//let sum = Number(`${salaries.John} + ${salaries.Ann} + ${salaries.Pete}`);
//let sum = (shop[key])
let sum = 0;
for(let key in salaries){
    sum += salaries[key]
}
console.log(sum);

//ЗАДАНИЕ 2

function multiplyNumeric(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);
console.log(menu);

//ЗАДАНИЕ 3

let calculator = {
    a: null,
    b: null,
    read: function() {
        this.a = parseFloat(prompt("Введите первое число."));
        this.b = parseFloat(prompt("Введите второе число."));
    },
    sum: function() {
        return this.a + this.b;
    },
    mul: function() {
        return this.a * this.b;
    }
};
calculator.read();
alert(calculator.sum());
alert( calculator.mul() );

//ЗАДАНИЕ 4

function extractCurrencyValue(str) {
    const value = str.split('$')[1];
    return parseInt(value);
}

let currencyValue = extractCurrencyValue("$120");
console.log(currencyValue); 

//ЗАДАНИЕ 5

let users = [
    { name: 'Вася', age: 25 },
    { name: 'Петя', age: 30 },
    { name: 'Маша', age: 28 }
];

let names = users.map(function (user) {
    return user.name;
});

alert( names.toString().split(',') ); 

//ЗАДАНИЕ 6

function getAverageAge(users) {
    let sum = 0;

    for (const user of users) {
        sum += user.age;
    }

    return sum / users.length;
}

let userss = [
    { name: 'Вася', age: 25 },
    { name: 'Петя', age: 30 },
    { name: 'Маша', age: 28 }
];

let averageAge = getAverageAge(userss);
console.log(averageAge);
