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

// const age = 96;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }

// const KrAge = calculateKrAge(age);

// console.log(KrAge);

// conditionals

// prompt()는 사용자에게 창을 띄울 수 있도록 해줌
// prompt()를 사용하면 사용자가 입력할 때 까지 페이지의 자바스크립트가 멈춰서 더이상 사용하지 않음.
// prompt()는 메시지도 별로 안예쁨... CSS를 적용시킬 수가 없음.
// const age = prompt("How old are you?")

// console.log(age);

// // age의 타입이 보고싶을때는 console.log(type of age);

// console.log(typeof "15", typeof parseInt("15")); // string number
// // string이면 숫자의 크기를 비교 할 수 없다. 그래서 parseInt로 바꾸는 과정이 필요.
// console.log(typeof "fsdbflsdbfsdlf"); // NaN: Not a Number

// const age = parseInt(prompt("How old are you?"));
//숫자를 입력하면 number, 문자를 입력하면 NaN

// console.log(isNaN(age));

// if (condition){
//     /// condition === true 
// } else {
//     /// condition === false
// }

// if (isNaN(age) || age < 0){
//     console.log("Please write a real positive number"); 
// } else if(age < 18){
//     console.log("You are too young.");
// } else if(age >= 18 && age <= 50){ // %%: and ||: or
//     console.log("You can drink");
// } else if(age > 50 && age <= 80){
//     console.log("You should exercise");
// } else if(age === 100) { // ===: is !==: is not
//     console.log("wow you are wise");
// } else if(age > 80) {
//     console.log("You can do whatever you want.");
// }

// document는 Javascript 관점에서의 HTML을 뜻한다.
// const title = document.getElementById("title");

// // console.dir(title);

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

// 많은 Elements를 한번에 array 형식으로 불러올 때
// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// const title = document.getElementsByTagName("h1");

// console.log(title);

// querySelector: element를 CSS 방식으로 검색. 가장많이 쓰는 방식.
// class는 앞에 .을 붙이고 id는 앞에 #을 붙인다.
// querySelector를 사용할 때, 조건을 만족시키는 첫번째 element만 가져오게됨.
// const title = document.querySelector(".hello h1")
// // querySelectorAll을 사용하면 조건에 부합하는 모든 element를 array 형태로 가져옴.

// console.log(title); // <h1>Grab me!</h1>

// const title = document.querySelector(".hello:first-child h1");

// console.log(title); // <h1>Grab me!</h1>

// // console.log 대신에 console.dir를 사용하면 property들을 볼 수 있다.
// // console.dir(title); 

// // title.innerText = "Hello";

// title.style.color = "blue";

// Evenvts
// const title = document.querySelector(".hello:first-child h1");

// function handleTitleClick() {
//     title.style.color = "blue";
//     // Javascript로 style을 변경하는 것은 가능하나, style은 가급적 CSS를 이용해서 변경하는 것이 좋음
// }

// // console.dir(element);를 사용한 뒤 on으로 시작하는 property를 찾으면
// // 해당하는 상황에서 작동하게 할 수 있음. 실제 사용할 때는 on을 떼고 사용.
// // 예를 들어 onclick을 사용하고 싶다면 "click" 입력.
// title.addEventListener("click", handleTitleClick);
// // title.onclick = handleTitleClick; 이렇게 쓸 수도 있는데
// // addEventListener를 사용하는 것이 나중에 removeEventListener를 사용하기 편함


// function handleMouseEnter() {
//     title.innerText = "Mouse is here!";
// }
// function handleMouseLeave() {
//     title.innerText = "Mouse is gone!";
// }

// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// // document와 window는 기본적으로 JavaScript가 제공

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("copier!");
// }

// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//     alert("ALL Good!");
// }


// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// 2.6 CSS in JavaScript

 const h1 = document.querySelector("div.hello:first-child h1");

 function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
 }

 h1.addEventListener("click", handleTitleClick);