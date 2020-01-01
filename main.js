// Define UI variables
const form = document.querySelector('#loan-form');
const amount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const results = document.querySelector('#results');
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');

// Listen for submit btn
form.addEventListener('submit', calculateResults);

// Functions
function calculateResults(e) {
	e.preventDefault();

	const principal = parseFloat(amount.value);
	const principal = parseFloat(amount.value);
	
	
	 
};
