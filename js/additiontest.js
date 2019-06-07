  
  // Get Current Date
  let today = new Date(); // new Date object
  // now concatenate formatted output
  let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
  document.getElementById('currentdate').innerHTML = date;

//Defining Table
/*Input: two integers from user
*Processing: compute math and see if user go the answer right or wrong
*Output: Display whether answer was right or wrong.
*/

//Get input from user.
cont MAX 100=;
let numberOne= Math.floor(Math.random() * Math.floor(MAX));
document.getElementById('numberOne').innerHTML = numberOne;

let numberTwo =  Math.floor(Math.random() * Math.floor(MAX));
document.getElementById('numberTwo').innerHTML = numberTwo;

function answer(){
  let numberOne=parseInt(document.GetElementById('numberOne').innerHTML)
   let numberTwo=parseInt(document.GetElementById('numberTwo').HTML)
   
   let= numberOne + numberTwo;
  let answer= parseInt(document.GetElementById('answer').value);
  
  let sum= numberOne + numberTwo
  let message="";
  
  if(answer==sum) {
    message= 'That is Correct!'
  }
  else{'That is incorrect. Try again.'; 
      }
  document.getElementById('result').innerHTML=message;
}

