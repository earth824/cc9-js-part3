// Lab 2.1
// const number = 1375000000000;
// const number = 1_375_000_000_000;
// const number = 1375e9;

// Lab 2.2
// const number = 255;
// console.log(number.toString(2));
// console.log(number.toString(8));
// console.log(number.toString(16));

// Lab 2.3
// const calcPoint = sale => Math.floor(sale / 100);

// Lab 2.4
// const printNumber = num => (Math.floor(num * 100) / 100).toFixed(2);
// console.log(printNumber(5.1));
// const printNumber = num => {
//   const spl = ('' + num).split('.');
//   if (!spl[1] || spl[1].length <= 2) return num.toFixed(2);
//   return `${spl[0]}.${spl[1].slice(0, 2)}`;
// };
// console.log(printNumber(5.567777777));

// Lab 2.5
// let i = 0;
// while (i != 10) {
//   i += 0.2;
//   console.log(i);
// }

// Lab 2.6
// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// Lab 2.7
// function rollDice() {
// return Math.floor(Math.random() * 6 + 1);
// หรือ
// return Math.floor(random(1, 7));
// }

// Lab 2.8
// function circumference(r) {
//   return Math.PI * 2 * r;
// }

// Lab 2.9
// function diagonal(w, l) {
// return Math.sqrt(Math.pow(w, 2) + Math.pow(l, 2));
// or
// return Math.sqrt(w ** 2 + l ** 2);
// }

// Lab 2.10
// const convertDegToRad = function (deg) {
//   return (deg / 180) * Math.PI;
// };

// For loop กับ Array
// const arr = ['Boon', 'Earth', 'Team', 'May', 'Toon', 'Pang'];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`${i + 1}. Hello ${arr[i]}`);
// }

// let i = 0;
// for (let item of arr) {
//   i++;
//   console.log(`${i}. Hello ${item}`);
// }

// add element to array
// const arr = [];
// arr[arr.length] = 1;
// arr[arr.length] = 4;
// console.log(arr);
