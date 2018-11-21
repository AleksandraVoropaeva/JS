'use strict';

let money, time; 

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');

    }
}
start();

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этот месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");    
            appData.expenses[a] = b;
        } else {
            i--;
            // i = i - 1;
        }   
    }
}
chooseExpenses();


function detectLevel() {

    function detectDayBudget() {
        let days = 30;
        appData.moneyPerDay = (appData.money / days).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
        return appData.moneyPerDay
        }
        detectDayBudget();

    if(appData.moneyPerDay < 500) {
    console.log("Минимальный уровень достатка");
    }  else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
    } else {
    console.log("Произошла ошибка");
    }
} 
detectLevel();


function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt("Статья необязательных расходов", '');

        if ( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
    console.log("done");    
    appData.optionalExpenses[i] = a;
        } else {
            i--;
            // i = i - 1;
}  
}
}
chooseOptExpenses();


function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');
        
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);  
    }
}
checkSavings();


console.log(appData);