// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/* Defining Table
*Input: Get a number between 1-10 from user. 
* Processing: Calculate the times table from input.
* Output: Display times table to user.
*/ 

function timesTable() {
	let num = parseInt(document.getElementById("number").value);
	let Table = "";
	
	if(num < 1 ^ num > 10){
		alert("Please choose a number between 1 - 10.");
		return;
	}
	for (let i = 1; i <= 12; i++) {
		let result = i * num;
		Table += num + " x " + i + " = " + num * i + "<br>";
	}
	document.getElementById("output").innerHTML = Table;
}
