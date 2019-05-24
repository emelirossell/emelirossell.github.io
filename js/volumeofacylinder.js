// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Defining Table
/*Input: radius and height of cylinder
*Processing: Calculate volume of cylinder
*Output: volume of cylinder
*/
 
function volumeofcylinder() {
	let height = parseFloat(document.getElementById('height').value);
	let radius = parseFloat(document.getElementById('radius').value);
	
	let volume = Math.PI*Math.pow(radius,2)*height
  volume = volume.toFixed(2);
	document.getElementById('output').innerHTML= volume
	
	
	
}