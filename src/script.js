const typeWriter = document.querySelector(".type-text")

let newText = ["Changed The World"]

let index = 0;

function loopTextChange() {
    typeWriter.innerHTML = newText[0]
    index = (index + 1)%newText.length
    setTimeout(loopTextChange, 3500)
}