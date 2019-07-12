// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

 /*Defining Table
* Input:Use array already created
* Processing: Get first and last number in array and add them together.
* Output: Display the sum of the first and last number in the array. 
*/

//Input
function addends(list) {
  list= [1,3,5,7,9,11];
  //Processing
  let firstNumber= list[0];
  let lastNumber=list[list.length-1];
  let addNumber= firstNumber+lastNumber;
  //Output
  document.getElementById("output").innerHTML=addNumber;
  document.getElementById("showArray").innerHTML=list;
}