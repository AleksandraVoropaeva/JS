'use strict';

class Option{
    constructor(height, width, bg, fontSize, textAlign){
            this.height = height;
            this.width = width; 
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
    }

    div(){
            let div = document.createElement("div");
            div.id = "main";
            div.innerHTML = "Проверка";
            div.style.cssText = (`height : ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align : ${this.textAlign}`);
            document.body.appendChild(div);
    }
}
const thisDiv = new Option('100px', '100px', '#eee', '18px', 'center');

thisDiv.div();