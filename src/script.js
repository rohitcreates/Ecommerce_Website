const text = ["Changed The World", "Drives Emotion"];
let index = 0;


function changeText() {
    const typeWriter = document.querySelector(".type-text");

    typeWriter.innerText = text[index];
    index = (index + 1) % text.length;
}

setInterval(changeText,8000);

// This lines of code for carousel product items
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

nextBtn.addEventListener("click", function () {
  let products = document.querySelectorAll(".product");
  document.querySelector(".product-content").appendChild(products[0]);
});

prevBtn.addEventListener("click", function () {
  let products = document.querySelectorAll(".product");
  document
    .querySelector(".product-content")
    .prepend(products[products.length - 1]);
});