/*Defining Table
*Input: Get city, state, and zip code from user.
*Processing: Combine city, state, and zip code,
*Output: Display address in standard US format
*/
function addNumbers() {
    let city= (document.getElementById('city').value) ;
    let state= (document.getElementById('state').value);
    let zipCode= (document.getElementById('zip code').value);
    
  let sum= city + ", " + state + ", " + zipCode;
  
  document.getElementById('output').innerHTML = sum; 
  }
  
  // Get Current Date
  let today = new Date(); // new Date object
  // now concatenate formatted output
  let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
  document.getElementById('currentdate').innerHTML = date;