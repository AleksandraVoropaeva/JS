

// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId); 
// используется, чтобы остановить setTimeout

// let timerId = setInterval(sayHello, 3000);
// // наша функция будет повторяться через каждые 3 секунды
// clearTimeout(timerId); 

// function sayHello() {
//     console.log('Hello world');
// }

// let timerId = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log, 2000);
//     // задерджка в 2 секунды
//     // работает как setInterval
//     // это рекурсивный вывод setTimeout, func вызывает сама себя с задержкой 

// })

let timerId = setInterval(timer, 1000);

function timer() {
    let timer = new Date(),
        hours = timer.getHours(),
        minutes = timer.getMinutes(),
        seconds = timer.getSeconds();

    if (seconds < 10) {seconds = '0' + seconds;}
    if (minutes < 10) {minutes = '0' + minutes;}
    if (hours < 10) {hours = '0' + hours;}

    let now = document.getElementById('timer');
    now.innerHTML = hours + ':' + minutes + ':' + seconds;

    console.log(hours + ':' + minutes + ':' + seconds);

};


