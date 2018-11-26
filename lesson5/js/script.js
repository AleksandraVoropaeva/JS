let 
    li5 = document.createElement('li'),
    menu = document.querySelector('.menu'),
    li = document.getElementsByTagName('li'),
    header = document.getElementsByTagName('header'),
    column2 = document.getElementsByClassName('column')[1],
    adv = document.querySelector('.adv'),
    question = document.getElementById('prompt'),
    title = document.getElementById('title'),
    answer = prompt('Как вы относитесь к технике Apple?', '');



li5.classList.add('menu-item');
li5.textContent = 'Пятый пункт';

menu.insertBefore(li[2], li[1]);

title.textContent = 'Мы продаем только подлинную технику Apple';

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

question.textContent = answer;
 
column2.removeChild(adv);

// console.log(li5);
// console.log(menu);
// console.log(li);
// console.log(header);
console.log(column2);
console.log(adv);
// console.log(question);
// console.log(title);
// console.log(answer);