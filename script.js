let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;

function square(x1, x2, y1, y2) {
    let s = 0;
    s = (x2 - x1) * (y2 - y1);
    console.log(s);
}
square(10, 2, 5, 3);

let a = 13.123456789;
let b = 2.123;
let n = 5;

function fractionalPart(a, b, n) {
    let total = 0
    let total2 = 0
    total = a * (10 * n);
    total2 = b * (10 * n);
    console.log(total);
}
fractionalPart(a, b, n);

function randomize(m, n) {
    let max = Math.max(m, n);
    let min = Math.min(m, n);
    let difference = Math.abs(m - n);
    let random = Math.floor(Math.random() * difference + min);
    let Odd = random + 1 - Math.abs(random % 2);



    console.log(Odd);

}

randomize(100, 200);