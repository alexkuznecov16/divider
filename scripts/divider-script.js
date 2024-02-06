// main (manager) function - create variables, send variables to check, write result in result area
const mainFunction = () => {
	const num1 = document.getElementById('userInput1').value; // user numbers
	const num2 = document.getElementById('userInput2').value; // user letter
	const resultArea = document.getElementById('textArea'); // Area for result
	const checkResult = checkFunction(num1, num2); // send arguments to check

	if (checkResult[0]) {
		resultArea.style.color = 'green'; // result area color
		resultArea.innerHTML = checkResult[1]; // write result in result area
	} else {
		resultArea.style.color = 'red'; // result area color
		resultArea.innerHTML = checkResult[1]; // write result in result area
	}
};

// Function, check user data
const checkFunction = (x1, x2) => {
	let result; // variable for result
	if (isNaN(x1) || isNaN(x2)) {
		result = [false, 'Invalid data: please enter only numbers'];
	} else if (x1 && x2) {
		x1 = Math.abs(parseInt(x1));
		x2 = Math.abs(parseInt(x2));
		if (x1 != 0 && x2 != 0) {
			while (x2 != 0) {
				y1 = x2; // make new variable for x2 saving
				x2 = x1 % x2; // divide and get remainder
				x1 = y1; // refresh x1 for next work in loop
			}
			result = [true, `Valid data: divider equals ${x1}`];
		} else {
			result = [true, 'Valid data: divider equals 0'];
		}
	}
	return result; // return result to main function
};
