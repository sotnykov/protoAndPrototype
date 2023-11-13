console.log({}.prototype === {}.prototype); // false
// объект не имеет собственного свойства prototype. Доступ к прототипу осуществляется через Object.prototype

function sayHello() { };
console.log(sayHello.prototype === sayHello.__proto__); // false
// у функции sayHello есть свойство prototype, но у нее нет собственного свойства __proto__

function sayHello() { };
function sayGoodBye() { };
console.log(sayHello.__proto__ === sayGoodBye.__proto__); // true
// обе функции, sayHello и sayGoodBye, имеют общий прототип Function.prototype

console.log(sayHello.prototype === sayGoodBye.prototype); // false
// у функций sayHello и sayGoodBye разные объекты прототипа, так как у них разные свойства prototype

let arrowFunc = () => { };
console.log(arrowFunc.prototype === Object.prototype); // false
// стрелочные функции не имеют свойства prototype, так что их прототипом является Object.prototype

let age = 22;
console.log(age.prototype === Number.prototype); // false
// у примитивного типа данных нет собственного свойства prototype

console.log(age.__proto__ === Number.prototype); // true
// примитив типа данных имеет свойство __proto__, которое указывает на прототип соответствующего объекта, в данном случае Number.prototype

function Test() { }
console.log(Test.__proto__ === Function.prototype); // true
// у функций свойство __proto__ указывает на Function.prototype

let num = 77;
console.log(num.__proto__ === Number.prototype); // true
// примитив числа имеет свойство __proto__, которое указывает на Number.prototype