'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let days = 30;
let expensesMandatory = prompt("Введите обязательную статью расходов в этот месяце");
let expensesHowMatch = prompt("Во сколько обойдется?");
let expensesMandatory2 = prompt("Введите еще одну обязательную статью расходов в этот месяце");
let expensesHowMatch2 = prompt("Во сколько обойдется?");

let appData = {
    money: money,
    timeData: time,
    expenses: {
        "expensesMandatory" : "expensesHowMatch"
    },
    optionalExpenses: {},
    income: [],
    savings: false
}

console.log(appData["money"]);
console.log(appData["timeData"]);
console.log(appData["expenses"]);


alert( +money / days );
