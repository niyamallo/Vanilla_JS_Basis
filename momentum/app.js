// alert("hi");

// const는 상수. 값이 바뀔 수 없음.
// const a = 5;
// const b = 2;

// const myName = "niyamallo";

// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("hello " + myName); 

// const a = 5;
// const b = 2;

// // let은 업데이트 될 수 있는 변수에 사용.
// // 기본적으로는 const를 사용하고 let을 필요한 곳에 사용
// // var는 사용하지 말자
// let myName = "niyamallo";

// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("hello " + myName); 

// // let은 처음 선언할 때 사용하면 됨.
// myName = "niya";

// // let 대신에 const로 선언했었다면,
// // app.js:25 Uncaught TypeError: Assignment to constant variable. 에러발생
// console.log("your new name is " + myName);

// boolean (true or false)
// null은 아무것도 없다는 것을 뜻함. ('아무것도 없음'으로 채운 것.)
// undefined는 존재하지 않는, 어떠한 데이터 타입도 아닌 것
// const amIFat = null;
// // 선언만 하고 값을 주지 않을 수 있음. 그러면 출력시 undefined
// let something;
// console.log(something, amIFat); // undefined null
// 기억할 것! null은 절대 자연적으로 발생하지 않는다.
// variable 안에 어떤 것이 없다는 것을 확실히 하기 위해 쓰는 것.

// array

// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(daysOfWeek); // ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']

// // Get Item from Array
// console.log(daysOfWeek[4]); // fri

// // Add one more day to the array
// daysOfWeek.push("sun");
// console.log(daysOfWeek); // ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

// const playerName = "niya";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

// Objects
// const player = {
//     name: "niya",
//     points: 10,
//     fat: true,
// };
// console.log(player); // {name: 'niya', points: 10, fat: true}
// console.log(player.name); // niya
// console.log(player["name"]); // niya

// // const로 만든 object 안의 property를 수정하는 것이지 const를 건드리는 것이 아님.
// player.fat = false;
// console.log(player); // {name: 'niya', points: 10, fat: false}

// // const 전체를 하나의 값으로서 업데이트하려고 하면 에러발생.
// // player = false;
// // console.log(player); // Uncaught TypeError: Assignment to constant variable.

// player.lastName = "potato";
// console.log(player);

// functions
// function은 어떤 코드를 캡슐화해서, 실행을 여러 번 할 수 있게 해준다.
// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("niya", 10);
// sayHello("junghee", 23);
// sayHello("eungyung", 21);

// function plus(firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber);

// }
// plus(); // NaN
// plus(8, 60); // 68

// function divide(firstNumber, secondNumber) {
//     console.log(firstNumber / secondNumber);
// }
// divide(98, 20);

// // 블록 안에서 선언된 함수는 블록 밖에서 존재할 수 없어서 에러발생
// console.log(firstNumber); // Uncaught ReferenceError: firstNumber is not defined

// const player = {
//     name: "niya",
//     sayHello: function(otherPersonsName){
//         console.log("Hello " + otherPersonsName + " nice to meet you");
//     },
// }

// console.log(player.name);
// player.sayHello("lynn");

// returns

const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);

console.log(KrAge);