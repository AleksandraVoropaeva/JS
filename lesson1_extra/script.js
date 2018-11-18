var num = 33721;
let N = Math.log(num) * Math.LOG10E + 1 | 0;
let i = 0;
var M = 1;
while (i < N) {
    i++;
    let qi = ((num  / Math.pow(10,i-1)) % 10);
    var M = M * qi;
    var num = num - (qi * Math.pow(10,i-1));
}
console.log(M);

let pow = M ** 3;
let n = Math.log(pow) * Math.LOG10E + 1 | 0;

alert(parseInt(pow * Math.pow(10,2-n)));