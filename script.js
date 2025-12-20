let keyboard = document.querySelector(".keyboard");
let display = document.querySelector(".display");


let num1 = "";
let num2 = "";
let oper = "";
let isSecond = false;

keyboard.addEventListener('click', function (event) {
	if (!event.target.matches('button')) return;
	display.value = display.value + event.target.textContent;

	if (event.target.dataset.digit) {
		if (!isSecond) {
			num1 += event.target.dataset.digit;
		} else {
			num2 += event.target.dataset.digit;
		}
	}
	if (event.target.dataset.operator && event.target.dataset.operator !== "equal") {
		oper = event.target.dataset.operator;
		isSecond = true;
	}

	if (event.target.dataset.operator == "equal") {
		display.value = calculate(Number(num1), Number(num2), oper)
		num1 = "";
		num2 = "";
		isSecond = false;
	}

	if (event.target.dataset.action) {
		display.value = "";
	}
});



function calculate(num1, num2, operator) {
	if (operator == "add") {
		return num1 + num2;
	} else if (operator == "subtract") {
		return num1 - num2;
	} else if (operator == "multiply") {
		return num1 * num2;
	} else if (operator == "divide") {
		return num1 / num2;
	} 
}



console.log(calculate(3, 6, "multiply"))