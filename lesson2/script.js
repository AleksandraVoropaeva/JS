'use strict';

let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');
let days = 30;

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этот месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log("done");    
        appData.expenses[a] = b;
    } else {

    }   
};

appData.moneyPerDay = appData.money / days;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 500) {
    console.log("Минимальный уровень достатка");
}  else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
};
console.log(appData);



// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этот месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50) {  
//         console.log("done");  
//         i++;  
//         appData.expenses[a] = b;
//     }  else {
//         break;

//     }     
// };


// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этот месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50)    
//         console.log("done");  
//         i++;  
//         appData.expenses[a] = b;
// }
// while (i < 2);