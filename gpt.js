
let value1 = "";
let value2 = "";
let operator = "";

function press(num) {
    document.getElementById("screen").innerHTML += num;
}

function clearScreen() {
    document.getElementById("screen").innerHTML = "";
    value1 = "";
    value2 = "";
    operator = "";
}

function setOp(op) {
    value1 = document.getElementById("screen").innerHTML;
    operator = op;
    document.getElementById("screen").innerHTML = "";
}

function calculate() {
    value2 = document.getElementById("screen").innerHTML;

    let result;

    switch(operator) {
        case "+":
            result = Number(value1) + Number(value2);
            break;

        case "-":
            result = Number(value1) - Number(value2);
            break;

        case "*":
            result = Number(value1) * Number(value2);
            break;

        case "/":
            result = Number(value1) / Number(value2);
            break;

        default:
            result = "Error!";
    }

    document.getElementById("screen").innerHTML = result;
}

