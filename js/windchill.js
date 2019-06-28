// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

 /*Defining Table
* Input: Get temperature and wind speed from user.
* Processing: Calculate wind chill
* Output: Return Windchill factor to user. 
*/

function doInputOutput() {
    let temp= parseInt(document.getElementById('temperature').value);
		let speed= parseInt(document.getElementById('speed').value);
	
if (temp>50 || speed<3) {
	let output="N/A";
	document.getElementById("output").innerHTML=output;
}
	else{
		let out=windChill(temp,speed);
		document.getElementById("output").innerHTML= out +"&degF";
	}}
function windChill(tempF, speed) {
  let chill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (tempF * Math.pow(speed, 0.16)));
  return Math.round(chill);
      }