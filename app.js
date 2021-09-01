let max = 10;
let min = 1;
let random = Math.floor((Math.random() * max - 1) + min);
if (random == 0) {
    random += 1
}
console.log(random);

const input = document.getElementById("guess-input");
const submit = document.getElementById("guess-btn");
const message = document.getElementById("message");

let lives = 3
submit.addEventListener("click", function(e) {
    e.preventDefault();
    let val = Number(input.value)
    // console.log(val);
    message.classList.add("red")
    input.value;
    if (val != random && lives > 1) {
        lives--;
        message.textContent = "It's wrong, you have " + lives + " try"
        input.style.border = "2px solid red"
        setTimeout(function () {
            message.textContent = ""
            // border: 1px solid #D1D1D1;
            input.style.border = "1px solid #D1D1D1"
        }, 3000)
    }
    else if (val != random && lives == 1) {
        message.textContent = "You lost, the number was " + random
        submit.value = "Try again"
        submit.addEventListener("mousedown", function () {
            window.location.reload();
        })
    }
    if (val == random) {
        message.classList.remove("red")
        message.classList.add("green")
        input.style.border = "2px solid lime"
        message.textContent = "You win!!!"
        submit.value = "Play again"

        submit.addEventListener("mousedown", function () {
            window.location.reload();
        })
    }
})