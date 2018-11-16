'use strict';

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let days = 30;
let expensesMustBe = prompt("Введите обязательную статью расходов в этот месяце");
let expensesHowMatch = prompt("Во сколько обойдется?");
let expensesMustBe2 = prompt("Введите еще одну обязательную статью расходов в этот месяце");
let expensesHowMatch2 = prompt("Во сколько обойдется?");

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.expenses[expensesMustBe] = expensesHowMatch;
appData.expenses[expensesMustBe2] = expensesHowMatch2;


console.log(appData);

alert( money / days );
