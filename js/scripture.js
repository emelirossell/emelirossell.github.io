//Defining Table
/*Input: Get name from user.
*Processing:Insert name into scripture.
*Output: Scripture with users name inserted into it.
*/
function insertName(){
    let Name= document.getElementById("Name").value;
    
    let scripture="D&C 10:5 Pray always, " + Name +", that you may come off conqueror; yea, that you may conquer Satan, and that you may escape the hands of the servants of Satan that do uphold his work.";
    
   document.getElementById("output").innerHTML= scripture;
  }
  
  // Get Current Date
  let today = new Date(); // new Date object
  // now concatenate formatted output
  let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
  document.getElementById('currentdate').innerHTML = date;
  