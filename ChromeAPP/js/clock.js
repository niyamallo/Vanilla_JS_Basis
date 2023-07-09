const clock = document.querySelector("h2#clock");

// interval: 일정 조건마다 '매번' 일어나야하는 무언가
// setInterval(실행하고자 하는 함수, ms단위의 시간)
// setInterval(sayHello, 5000);
// setTimout(함수, ms단위의 시간)은 'ms단위의 시간' 뒤에 1번 함수호출.

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}: ${minutes}: ${seconds}`)
}

// 페이지를 띄울 때 바로 시간이 표시될 수 있도록 함수 한번 호출하고 인터벌을 넣었음.
getClock();
setInterval(getClock, 1000);

// String.padStart(자릿수, 임의의 문자) : 자릿수를 만족하지 못할 경우 문자열의 앞을 임의의 문자로 채움
// String.padEnd(자릿수, 임의의 문자) : 자릿수를 만족하지 못할 경우 문자열의 뒤를 임의의 문자로 채움
