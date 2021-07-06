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

// Lab 3.1
// const path = 'c:\\Users\\Admin\\Desktop';
// console.log(path);

// Lab 3.2
// console.log('Welcome to Thailand'.length);
// console.log("Don'n be afraid\n".length);
// console.log('สวัสดีประเทศไทย'.length);

// Lab 3.3
// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst('sDoa'));

// Lab 3.4
// function checkSpam(str) {
//   if (!str) return str;
//   return str.toLowerCase().includes('xxx') || str.toLowerCase().includes('sex') || str.toLowerCase().includes('porn');
// }
// console.log(checkSpam('Dang'));

// Lab 3.5
// function truncate(str, length) {
//   if (!str) return str;
//   if (str.length < length) return str;
//   return str.slice(0, length - 1) + '...';
// }
// console.log(truncate("What I'd like to tell on this topic is:", 20));

// Lab 3.6
// function extractCurrencyValue(str, rate) {
//   if (!str) return str;
//   return str.slice(1) * rate;
// }
// console.log(extractCurrencyValue('$120', 30));

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

// Lab 4.1
// const friends = ['Jom', 'Jame', 'Ploy', 'Som', 'Bom'];
// const friends = new Array('Jom', 'Jame', 'Ploy', 'Som', 'Bom');

// Lab 4.3
// const styles = ['Jazz', 'Blues'];
// // styles[2] = 'Rock-n-Roll'
// styles[styles.length] = 'Rock-n-Roll';
// styles[1] = 'Classic';
// delete styles[0];
// console.log(styles);
// console.log(styles.length);

// Lab 4.4
// let arr = [];
// while (1) {
//   let num = prompt('Enter number');
//   // if (!num || !num.trim() || isNaN(num)) break;
//   if (num === null || num === '' || num.trim() === '' || isNaN(num)) break;
//   arr[arr.length] = +num;
// }
// let sum = 0;
// for (let i=0;i<arr.length;i++) {
//   sum += arr[i];
// }

// Lab 4.5
// function squareArr(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i] ** 2;
//   }
//   return result;
// }

// Lab 4.6
// const sales = [{ price: 1000, discount: 0.1 }, { price: 500, discount: 0.05 }, { price: 100 }];

// const summary = [];
// for (let i = 0; i < sales.length; i++) {
//   let netPrice = sales[i].price * (1 - (sales[i].discount ? sales[i].discount : 0)); // #1

//   // let netPrice = 0;
//   // if (sales[i].discount) {
//   //   netPrice = sales[i].price * (1 - sales[i].discount);
//   // } else {
//   //   netPrice = sales[i].price;
//   // } // #2

//   // let netPrice = sales[i].price * (1 - sales[i].discount || 0); // #3
//   // let netPrice = sales[i].price * (1 - sales[i].discount ?? 0); // #4
//   summary[i] = { netPrice };
// }
// console.log(summary);

// array push demo
// let fruits = ['Apple', 'Orange'];
// const ret = fruits.push('Pear');
// console.log(ret);
// console.log(fruits);

// array splice demo
// let arr = ['I', 'study', 'JavaScript', 'right', 'now'];
// // remove 3 first elements and replace them with another
// console.log(arr.splice(0, 3, "Let's", 'dance'));
// console.log(arr); // now ["Let's", "dance", "right", "now"]

// array concat demo
// let arr = [1, 2];
// const newArr = arr.concat([3, [4, 5]]);
// console.log(newArr);
// console.log(arr);

// วิธี loop element array แบบที่ 1
// const names = ['Boon', 'Team', 'May'];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// วิธี loop element array แบบที่ 2
// for (let ele of names) {
//   console.log(ele);
// }

// Array forEach demo
// const ret = ['Boon', 'Team', 'May'].forEach((item, index, array) => {
//   console.log(`${item} is at index ${index} in ${array}`);
// });

// console.log(ret);

// const log = (item, index, array) => {
//   console.log(`${item} is at index ${index} in ${array}`);
// };

// const newLog = () => console.log(`Hello Test}`);

// ['Boon', 'Team', 'May'].forEach(newLog);

// Lab 5.3
// const animals = ['Dog', 'Cat', 'Rat'];
// animals.push('Fish');
// animals.unshift('Horse');
// animals.push('Giraffe', 'Snake');
// animals.shift();
// animals.pop();
// animals.shift();
// console.log(animals);

// Lab 5.5
// const clone = arr => arr.slice();

// // Lab 5.6
// const a = [1, 5, 7, 11];
// const b = [2, 3, 6];
// const c = a.concat(b);
// console.log(c);

// // Lab 5.7
// let fish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// fish.splice(0);

// // Lab 5.8
// const person = ['John', 'Jay', 'Jim', 'Jame'];
// person.splice(1, 1, 'Jack', 'Joe');

// // Lab 5.9
// const sports = ['football', 'volleyball', 'tennis', 'basketball', 'judo'];
// const subSports = sports.slice(1, 4);

// // Lab 5.10
// const cars = ['volvo', 'toyota', 'honda', 'ford'];
// cars.splice(3, 0, 'mazda', 'bmw', 'nissan');

// Lab 5.11
// const array = [29, 17, 13, 47, 23, 31];
// let sum = 0;
// array.forEach(item => (sum += item));
// console.log(sum);

// // Lab 5.12
// const names = ['Mike', 'Sid', 'Jack', 'Bill'];
// names.forEach((item, index) => console.log(`${index + 1}. ${item}`));

// const products = ['Coke', 'Pepsi', 'Coke', 'Mirinda'];
// const founded = products.find((item, index, array) => {
//   return item.includes('z');
// });

// const idx = products.findIndex((item, index, array) => {
//   return item === 'Coke';
// });

// const nums = [1, 3, 8, 11, -2];
// const even = nums.filter(function (item, index, arr) {
//   if (item % 2 === 0) {
//     return true;
//   }
// });

// Lab 5.14
// const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]

// const indexes = [];
// for (let i = 0; i < alphabets.length; i++) {
//   if (alphabets[i] === 'a') {
//     indexes.push(i);
//   }
// }

// let idx = alphabets.indexOf('a');

// while (idx !== -1) {
//   indexes.push(idx);
//   idx = alphabets.indexOf('a', idx + 1);
// }

// Lab 5.16
// const nums = [7, 9, -5, -1, 0, 3];
// const firstNegativeNum = nums.find(item => item < 0);

// // Lab 5.17
// const inventory = [
//   { name: 'apples', quantity: 2 },
//   { name: 'bananas', quantity: 0 },
//   { name: 'cherries', quantity: 5 }
// ];
// // expected result: { name: 'cherries', quantity: 5 }
// const result = inventory.find(item => item.name === 'cherries');

// // Lab 5.18
// const tasks = [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Shopping' },
//   { id: 3, name: 'Swimming' }
// ];

// const idx = tasks.findIndex(item => item.id === 2);

// const tasks = [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Shopping' },
//   { id: 3, name: 'Swimming' }
// ];

// Lab 5.19
// function updateTask(id, newName) {
//   const idx = tasks.findIndex(item => item.id === id);
//   if (idx !== -1) {
//     tasks[idx].name = newName;
//   }
// }

// updateTask(2, 'Travelling');
// console.log(tasks);

// Lab 5.20
// function deleteTask(id) {
//   const idx = tasks.findIndex(item => item.id === id);
//   if (idx !== -1) {
//     tasks.splice(idx, 1);
//   }
// }

// deleteTask(1);
// console.log(tasks);

// Lab 5.21.1
// const array = [9, 17, 23, 5];
// // ค่าที่มากกว่า 10
// const result = array.filter(item => item > 10);
// console.log(result);

// Lab 5.21.2
// const array = [1, 2, 3, 4];
// // ค่าที่เป็นเลขคี่
// const result = array.filter(item => item % 2 === 1);
// console.log(result);

// Lab 5.21.3
// const array = [1, '1', 2, {}];
// // ค่าที่ประเภทข้อมูลเป็น Number
// const result = array.filter(item => typeof item === 'number');
// console.log(result);

// Lab 5.21.4
// const array = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// // ค่าที่มีตัวอักษรมากกว่า 6 ตัว
// const result = array.filter(item => item.length > 6);
// console.log(result);

// Lab 5.21.5
// const array = [1, -3, 2, 8, -4, 5];
// // ค่าที่เป็นเลขบวก
// const result = array.filter(item => item > 0);
// console.log(result);

// Lab 5.21.6
// const array = [1, 3, 4, 5, 6, 7, 8];
// // ค่าที่หาร 3 ลงตัว
// const result = array.filter(item => item % 3 === 0);
// console.log(result);

// Lab 5.21.7
// const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// // ค่าที่ขึ้นต้นด้วยตัว E
// const result = array.filter(item => item.startsWith('E'));
// console.log(result);

// Lab 5.21.8
// const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
// const result = array.filter(item => item === item.toUpperCase());
// console.log(result);

// Lab 5.21.9
// const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi', 'Phrae'];
// // ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
// const result = array.filter(item => item.toLowerCase().includes('buri'));
// console.log(result);

// Lab 5.21.10
// const array = [
//   { name: 'Ben', age: 14 },
//   { name: 'Phil', age: 18 },
//   { name: 'John', age: 32 },
//   { name: 'Ann', age: 16 },
//   { name: 'Paul', age: 24 }
// ];
// // อายุไม่น้อยกว่า 18
// const result = array.filter(item => item.age >= 18);
// console.log(result);

// Lab 5.21.11
// const array = [
//   { id: 1, name: 'Pepsi' },
//   { id: 2, name: 'Mirinda' },
//   { id: 3, name: 'Coke' },
//   { id: 4, name: 'Fanta' },
//   { id: 5, name: 'Sprite' }
// ];
// // id ไม่เท่ากับ 4
// const result = array.filter(item => item.id !== 4);
// console.log(result);

// Lab 5.21.12
// const array = [
//   { name: 'John', birth: '2001-07-31' },
//   { name: 'Jack', birth: '1990-06-24' },
//   { name: 'Jim', birth: '1984-12-13' },
//   { name: 'Jeff', birth: '1996-02-05' },
//   { name: 'Joe', birth: '2002-06-13' }
// ];
// // เกิดเดือน 6
// const result = array.filter(item => item.birth[6] === '6');
// console.log(result);

// Lab 5.22
// function filterRange(arr, a, b) {
//   return arr.filter(item => item > a && item < b);
// }
// console.log(filterRange([1, 7, 11, 15, 9, 6], 5, 10));

// Lab 5.23.1
// const array = [1, 2, 30, 400];
// // result: [2, 4, 60, 800]
// const result = array.map(item => item * 2);
// console.log(result);

// Lab 5.23.2
// const array = [1, 2, 3, 4];
// // result: ["1", "2", "3", "4"]
// const result = array.map(item => '' + item);
// console.log(result);

// Lab 5.23.3
// const array = [1, '1', 2, {}];
// // result: ["number", "string", "number", "object"]
// const result = array.map(item => typeof item);

// Lab 5.23.4
// const array = ['apple', 'banana', 'orange'];
// // result: ["APPLE", "BANANA", "ORANGE"]
// const result = array.map(item => item.toUpperCase());
// console.log(result);

// Lab 5.23.5
// const array = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
// const result = array.map(item => (item % 2 ? 'odd' : 'even'));
// console.log(result);

// Lab 5.23.6
// const array = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]
// const result = array.map(item => Math.abs(item));
// console.log(result);

// Lab 5.23.7
// const array = [100, 200.25, 300.84, 400.3];
// // result: ["100.00", "200.25", "300.84", "400.30"]
// const result = array.map(item => item.toFixed(2));
// console.log(result);

// Lab 5.23.8
// const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// const array = [0, 5, 10, 7, 6, 5, 0];
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
// const result = array.map(item => MONTHS[item]);
// console.log(result);

// Lab 5.23.9
// const array = [1, 16, 81, 256, 625, 1296];
// // result: [1, 2, 3, 4, 5, 6]
// const result = array.map(item => Math.sqrt(Math.sqrt(item)));
// console.log(result);

// Lab 5.23.10
// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // result: ["apple", "banana", "watermelon"]
// const result = array.map(item => item.name);
// console.log(result);

// Lab 5.23.11
// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // result: [14, 18, 32]
// const result = array.map(item => item.age);
// console.log(result);

// Lab 5.23.12
// const array = [
//   { name: 'apple', surname: 'London' },
//   { name: 'banana', surname: 'Bangkok' },
//   { name: 'watermelon', surname: 'Singapore' }
// ];
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]
// const result = array.map(item => `${item.name} ${item.surname}`);
// console.log(result);

// Lab 5.23.13
// const array = [
//   { name: 'apple', birth: '2000-01-01' },
//   { name: 'banana', birth: '1990-10-01' },
//   { name: 'watermelon', birth: '1985-12-01' }
// ];
// // result: [
// //   { name: "apple", birth: "2000-01-01", age: 21 },
// //   { name: "banana", birth: "1990-10-01", age: 31 },
// //   { name: "watermelon", birth: "1985-12-01", age: 36 },
// // ]
// const result = array.map(item => ({ name: item.name, birth: item.birth, age: 2021 - item.birth.split('-')[0] }));
// console.log(result);

// Lab 5.23.14
// const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// const array = [
//   { name: 'apple', birth: '2000-01-01' },
//   { name: 'banana', birth: '1990-10-10' },
//   { name: 'watermelon', birth: '1985-12-30' }
// ];
// // result: [
// //     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
// //     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
// //     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// // ]
// const result = array.map(
//   item =>
//     `<tr><td>${item.name}</td><td>${item.birth.split('-')[2]} ${MONTHS[+item.birth.split('-')[1] - 1].toLowerCase()} ${
//       item.birth.split('-')[0]
//     }</td></tr>`
// );
// console.log(result);

// Lab 5.24
// function camelize(str) {
//   const splitted = str.split('-');
//   console.log(splitted);
//   const transform = splitted.map((item, index) => {
//     if (index === 0) return item;
//     return item[0].toUpperCase() + item.slice(1);
//   });
//   console.log(transform);
//   return transform.join('');
//   // return str
//   //   .split('-')
//   //   .map((item, index) => (index === 0 ? item : item[0].toUpperCase() + item.slice(1)))
//   //   .join('');
// }
// console.log(camelize('border-radius-top'));

// Lab 5.25
// const arr = [11, 17, 23, 13, 7, 19];
// arr.sort((a, b) => b - a);
// console.log(arr);

// Lab 5.26
// const arr = [-3, 2, 0, -7, 4, 6];
// arr.sort((a, b) => a ** 2 - b ** 2);
// console.log(arr);

// Lab 5.27
// const arr = [
//   { name: 'John', age: 25 },
//   { name: 'Leon', age: 26 },
//   { name: 'Mick', age: 29 },
//   { name: 'Pete', age: 30 },
//   { name: 'Mary', age: 28 }
// ];
// arr.sort((a, b) => a.age - b.age);
// console.log(arr);

// Lab 5.28
// function copySorted(arr) {
//   const result = arr.slice(0);
//   return result.sort();
//   // return arr.slice(0).sort();
// }

// let arr = ['React', 'Vue', 'Angular'];
// let sorted = copySorted(arr);

// console.log(sorted); // Angular, React, Vue
// console.log(arr); // React, Vue, Angular (no changes)

// Lab 5.29
// const nums = [-3, 2, 11, -7, 4, 6];
// const result = nums.reduce((acc, item) => acc * item); // #1
// const result = nums.reduce((acc, item) => acc * item, 1); // #2

// Lab 5.30
// const scores = [
//   { score: 90, subject: 'HTML', weight: 0.2 },
//   { score: 95, subject: 'CSS', weight: 0.3 },
//   { score: 85, subject: 'JavaScript', weight: 0.5 }
// ];
// // expected result: 89
// const result = scores.reduce((acc, item) => acc + item.score * item.weight, 0);
// console.log(result);

// Lab 5.31
// let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
// const result = arr.reduce(
//   (acc, item, index) => {
//     if (index === 0) return { min: item, max: item };
//     if (item > acc.max) acc.max = item;
//     if (item < acc.min) acc.min = item;
//     return acc;
//   },
//   { min: 0, max: 0 }
// );
// console.log(result);

// Array Reduce Example
// const nums = [-3, 2, 11, -7, 4, 6];
// const result = nums.reduce((accumulator, item, index, array) => {
//   console.log(`accumulator: ${accumulator}, item: ${item}, index: ${index}, array: ${array}`);
//   return accumulator + item;
// }, 0);
// first call callback function
// accumulator = initial value (0), item = first element of array (-3), index = array index (0)
// array = self ([-3, 2, 11, -7, 4, 6]) return accumulator + item (0 + -3 = -3)

// second call callback function
// accumulator = return value from first call (-3), item = second element of array (2), index = array index (1)
// array = self ([-3, 2, 11, -7, 4, 6]) return accumulator + item (-3 + 2 = -1)

// third call callback function
// accumulator = return value from second call (-1), item = third element of array (11), index = array index (2)
// array = self ([-3, 2, 11, -7, 4, 6]) return accumulator + item (-1 + 11 = 10)

// fourth call callback function
// accumulator = return value from third call (10), item = fourth element of array (-7), index = array index (3)
// array = self ([-3, 2, 11, -7, 4, 6]) return accumulator + item (10 + -7 = 3)

// fifth call callback function
// accumulator = return value from fourth call (3), item = fifth element of array (4), index = array index (4)
// array = self ([-3, 2, 11, -7, 4, 6]) return accumulator + item (3 + 4 = 7)

// sixth call callcback function
// accumulator = return value from fifth call (7), item = sixth element of array (6), index = array index (5)
// array = self ([-3, 2, 11, -7, 4, 6]) return accumulator + item (7 + 6 = 13)

// End of array no more call callback function then return value from last call (13) to result

// Lab 7.1
// const map = new Map();
// map.set('name', 'Thomas');
// map.set('age', 31);
// map.set('name', 'Dan');
// map.delete('age');
// console.log(map.has('birthDate'));
// console.log(map.size);
// map.clear();
// console.log(map);

// Lab 7.2
// const arr = [
//   ['email', 'codeisfun@example.com'],
//   ['isActive', true]
// ];
// const map = new Map(arr);
// console.log(map);

// Lab 7.3
// const set = new Set();
// set.add('Thailand');
// set.add('Japan');
// set.add('Thailand');
// set.add('China');
// set.add('India');
// set.add('Thailand');
// set.add('China');
// set.add('Singapore');
// set.add('Japan');
// set.delete('India');
// console.log(set.size);
// console.log(set);
// const arr = Array.from(set);
// const arr1 = new Array(...set);
// const arr2 = [...set];
// console.log(arr);
// console.log(arr2);

// Lab 7.4
// const arr = ['Dog', 'Giraffe', 'Bear', 'Dog', 'Giraffe'];
// const set = new Set(arr);
// console.log(set);
// const str = 'Thailand';
// console.log(new Set(str));

// Lab 7.5
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
// console.log(unique([1, 2, 1, 2, 3, 1]));

// Lab 8.1
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0;
// for (let key of Object.keys(salaries)) {
//   sum += salaries[key];
// }
// for (let value of Object.values(salaries)) {
//   sum += value;
// }
// for (let entry of Object.entries(salaries)) {
//   sum += entry[1];
// }
// console.log(sum);

// Lab 8.2
// function checkEmptyObj(obj) {
//   return Object.keys(obj).length === 0;
// }
