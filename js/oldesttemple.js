// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Defining Table
* Input: Get Instructions from table rows and cells
* Process: use looping structure to process each data row of the table
* Output: Display oldest temple to user. 
*/

function oldestTemple(){
let table = document.getElementById('templeData');
let name = table.rows[1].cells[0].innerHTML;
let dedYear = parseInt(table.rows[1].cells[1].innerHTML);

for (let i = 2; i < table.rows.length; i++){
	let tTest = parseInt(table.rows[i].cells[1].innerHTML);
	if (tTest < dedYear){
		dedYear = tTest;
		name = table.rows[i].cells[0].innerHTML;
	}
}

document.getElementById("output").innerHTML = name;
}