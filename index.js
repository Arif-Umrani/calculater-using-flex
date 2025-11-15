let value1 = "";
let value2 = "";
let operator = "";

//  clear "C" button
function clearScreen() {
    document.getElementById("screen").value = "";
    value1 = "";
    value2 = "";
    operator = "";
}

// for display "keys values"
function press(num) {
    document.getElementById("screen").value += num;
}

function setOp(op) {
    value1 = document.getElementById("screen").value;
    operator = op;
    let lastChar = document.getElementById("screen").value.slice(-1);

    if (["+", "-", "*", "/"].includes(lastChar)) {
      return; 
    }
   
    document.getElementById("screen").value += op;
}

function calculate() {
    value2 = document.getElementById("screen").value.split(/[\+\-\*\/]/)[1];

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

    document.getElementById("screen").value = result.toFixed(2);
}



