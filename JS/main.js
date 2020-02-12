// Developer: Anubhav Singh
// Project: Capstone-Project-1 
// Task By: Novasemita
// Technologies used: HTML5, CSS3, JavaScript
// File: JS/main.js [JavaScript]

var input = document.getElementById("screen");
var answer = document.getElementById("answer");
var key = document.querySelector('.inputbuttons').addEventListener('click', keyPress);
var operators = ['x', '-', '+', '/', 'C', '=', '%', 'AC'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

function keyPress(event) {

    var BUTTONPRESS = event.target.innerHTML;

    if (['/', 'X', '+'].includes(BUTTONPRESS) && input.value === "" || event.target.tagName != 'BUTTON' || "AC" === BUTTONPRESS) {
        if (BUTTONPRESS === "AC") {
            // Clear
            input.value = "";
            answer.innerHTML = "";
        }
        return;
    }

    if (BUTTONPRESS != 'C' && BUTTONPRESS != '=' && BUTTONPRESS != "AC") {
        if (operators.includes(BUTTONPRESS) && operators.includes(input.value[input.value.length - 1])) {
            input.value = input.value.substring(0, input.value.length - 1) + BUTTONPRESS;

        }
        else {
            input.value = input.value + BUTTONPRESS;
        }
        eval_expr();
    }
    else if (BUTTONPRESS === "C") {
        if (input.value.length > 1) {
            input.value = input.value.substring(0, input.value.length - 1);
            eval_expr();
        }
        else {
            input.value = "";
            answer.innerHTML = "";
        }
    }
    else if (BUTTONPRESS === '=') {
        input.value = answer.innerHTML;
        answer.innerHTML = "";
    }
}

function eval_expr() {
    try {
        if (input.value.match(/[0-9]*%/g)) {
            answer.innerHTML = eval(input.value.replace(/%/g, '/100'));
            input.value = "";
        }
        else {
            answer.innerHTML = eval(input.value.replace(/X/g, '*'));
        }

        if (answer.innerHTML === input.value) {
            answer.innerHTML = "";
        }
    }

    catch (err) {
        if (eval(input.value.substring(0, input.value.length - 1).replace(/X/g, '*')) == input.value.substring(0, input.value.length - 1)) {
            answer.innerHTML = "";
        }
    }
    if (input.value.length * 80 > window.screen.width) {
        input.style.fontSize = "10vh";
    }
    else {
        input.style.fontSize = "20vh";
    }
    input.focus();
}
