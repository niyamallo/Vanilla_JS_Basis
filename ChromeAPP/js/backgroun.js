const images = [
    // img 폴더에 있는 이미지의 이름과 같게 만들어야함.
    "0.jpg",
    "1.jpg",
    "2.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement: JavaScript에서 html에 element를 추가하는 방법
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// 마지막에 추가하고 싶으면 appendChild, 맨 앞에 추가하고 싶으면 prependChild
document.body.appendChild(bgImage);