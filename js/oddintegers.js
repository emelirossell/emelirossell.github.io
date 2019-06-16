/*Defining Table
*INPUT: Get any integer from the user
*PROCESSING: Add up all of the odd numbers between 1- integer.
*OUTPUT: Display results to user. 
*/

function Sum() {
    //input
      let n = parseInt(document.getElementById("number").value); 
      //processing
      let sum = 0;
      for (let i = 1; i <= n; i += 2) {
          sum += i
      }
      
      //output
    document.getElementById("text").innerHTML = "All odd integers add up to be: ";
    document.getElementById("output").innerHTML = sum;
      }
  
  // Get Current Date
  let today = new Date(); // new Date object
  // now concatenate formatted output
  let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
  document.getElementById('currentdate').innerHTML = date;