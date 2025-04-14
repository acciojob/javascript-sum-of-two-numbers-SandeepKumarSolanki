let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Write your code here and print the output using alert function

function addNumber(input1 , input2){
	input1 = +input1;
	input2 = +input2;

	if(!input1 || input2 || NaN(input1) || NaN(input2)){
		return "Invalid input. Please enter a valid number.");
		
	}

	return input1+input2;
}

console.log(addNumber(input1,input2));
