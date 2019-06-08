//Defining Table
/*Input: Get subtotal from user.
*Processing: Determine whether it is tuesday or wednesday. Compute discount and add tax. 
*Output: Return total-including tax- to user.
*/

//INPUT
let d = new Date(); 
let dayOfWeek = d.getDay();
let day = new Array(7); 
    day[0] = "Sunday"
    day[1] = "Monday"
    day[2] = "Tuesday"
    day[3] = "Wednesday"
    day[4] = "Thursday"
    day[5] = "Friday"
    day[6] = "Saturday"

document.getElementById("wd").innerHTML = day[dayOfWeek];

//PROCESSING 
function calculate() {
let salestax = .06;
let sub = parseFloat(document.getElementById("subtotal").value);

if (day[dayOfWeek] == "Tuesday" || day[dayOfWeek] == "Wednesday" )  {
let disc = .10;
let subdisc = sub * disc;
let newsub = sub - subdisc; 
let taxsub = newsub * salestax;
let fintot = newsub + taxsub;

//OUTPUT
document.getElementById("finalsum").innerHTML = "Total after sales tax: $" + fintot.toFixed(2);
} else {
let taxsub = sub * salestax;
let fintot = sub + taxsub;

//OUTPUT
document.getElementById("finalsum").innerHTML = "Total after sales tax: $" + fintot.toFixed(2);
}
}

// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;