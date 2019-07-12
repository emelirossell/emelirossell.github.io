// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

//Defining Table
//Input- Get array from computer
//Processing- Use thr array and get the value of the middle number in the array. If number is even, return the average of the two middle elements.
//Output-Display the middle number of the array to the user. 

//Input
function getMiddle(list) {
  list= [1,3,5,7,9,11];
  let middleNumber= 0;
  numLength =list.length;
  if(numLength%2===0){
    middleNumber=(list[numLength/2-1]+list[numLength/2])/2;
  } else{ 
  answer =list[(numLength-1)/2];
  }
  document.getElementById("showArray").innerHTML= middleNumber; 
  return middleNumber;
  
}