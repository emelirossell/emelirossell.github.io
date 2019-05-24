// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Defining Table
/*Input: Get Hours and wages from user.
*Processing: Compute gross pay and take out taxes.
*Output: Display users pay after taxes.
*/

function payAfterTaxes() {
  //get input from users
  let hours= parseFloat(document.getElementById("Hours").value);
  let wages= parseFloat(document.getElementById("Wages").value);
  
  //compute pay after taxes
  let pay= 0.85*(hours * wages)
  
  //display pay after taxes
  document.getElementById("output").innerHTML= "You Earned $" + pay.toFixed(2);
  
}