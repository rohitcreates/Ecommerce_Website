const text = ["Changed The World", "Drives Emotion"];
let index = 0;


function changeText() {
    const typeWriter = document.querySelector(".type-text");

    typeWriter.innerText = text[index];
    index = (index + 1) % text.length;
}

setInterval(changeText,7000);