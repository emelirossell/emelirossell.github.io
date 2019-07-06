/* Defining Table 
*Input:Get input from users
*Processing:Use formula to create future value.
*Output:Show future value of investments to user. 
*/

function doFV() {

	let principle = parseInt(document.getElementById("principle").value);
	let rate = parseFloat(document.getElementById("rate").value);
	let years = parseFloat(document.getElementById("years").value);
	let periods = parseFloat(document.getElementById("periods").value);
	let output = computeFutureValue(principle, rate, years, periods);
	document.getElementById("output").innerHTML = "$" + output.toFixed(2);
}
	
	function computeFutureValue(principle, rate, years, periods) {
	let fv = rate / years;
	let period = years * periods;
	let output = principle * Math.pow((1 + fv), period);
		return output;
}