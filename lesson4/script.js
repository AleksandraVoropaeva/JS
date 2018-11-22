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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.money / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);

    },
    detectLevel: function() {
        if(appData.moneyPerDay < 500) {
            console.log("Минимальный уровень достатка");
        }  else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }

    },
    chooseOptExpenses: function() {
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
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
            
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);  
        }

        
      
    },
    chooseIncome: function() {

        for (let i = 1; i < 2; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
    
            if ( (typeof(items)) === 'string' && (typeof(items)) != null && items != '') {
                appData.income = items.split(', ');
            } else {
                i--;
                // i = i - 1;
            }  

            for (let i = 0; i < 1; i++) {
             let extraItems = prompt('Может, что-то еще?');
                if ( (typeof(extraItems)) === 'string' && (typeof(extraItems)) != null && extraItems != '') {   
                appData.income.push(extraItems);
                }  
        };
            appData.income.sort();

    };

    appData.income.forEach(function(item, i, income){ 
        console.log('Способы доп. заработка: ' + (i+1) + ': ' + item);

        });
    }  
};

appData.chooseIncome();
console.log(appData);


for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
};