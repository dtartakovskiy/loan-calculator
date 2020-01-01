// Define UI variables
const form = document.querySelector('#loan-form');
const amount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const results = document.querySelector('#results');
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');
const loading = document.querySelector('#loading')

// Listen for submit btn
form.addEventListener('submit', function(e) {
	e.preventDefault();

	// Hide the results
	results.style.display = 'none';
	 
	// Show the loading
	loading.style.display = 'block';

	setTimeout(() => {
		calculateResults();
	}, 2000);
	
});

// Functions
function calculateResults() {
	const principal = parseFloat(amount.value);
	const calculatedInterest = parseFloat(interest.value) / 100 / 12;
	const calculatedPayments = parseFloat(years.value) *  12;

	// Compute monthly paymants
	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = (principal * x * calculatedInterest) / (x-1);

	if (isFinite(monthly)) {
		monthlyPayment.value = monthly.toFixed();
		totalPayment.value = (monthly * calculatedPayments).toFixed(2);
		totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

		// Show results 
		results.style.display = 'block';
		// Hide loader
		loading.style.display = 'none';

	} else {
		showError('Please, check your numbers');
	}
};

// Show error function 
function showError(error) {
	// Show results 
	results.style.display = 'none';
	// Hide loader
	loading.style.display = 'none';
	
	// Create a div
	const errBlock = document.createElement('div');
	// Get elements
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');
	// Add class
	errBlock.className = 'alert alert-danger';
	// Create a text node and append to div
	errBlock.appendChild(document.createTextNode(error));
	// Insert an error above the heading
	card.insertBefore(errBlock, heading);
	// Clear error after 3s
	setTimeout(clearError, 3000);
}

// Clear error
function clearError () {
	document.querySelector('.alert').remove();
}
