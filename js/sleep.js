// DEFINING TABLE
/*Input:Get date from computer
*Processing: Determine whether user can wake up or sleep in
//Output: Tell the user if they need to wake up or sleep in. 
*/

let today = new Date();
let day = today.getDay();
let month = today.getMonth();
let date = today.getDate();
	
document.getElementById('todayIs').innerHTML = today;
		
	if ( ( month == 0 && date == 1) || (month = 6 && date == 4) || (month == 11 && date == 25) || day == 6 || day == 0) {		
message = "sleep in!"; 
}
else {
	message = "wake up!";
}

document.getElementById('schedule').innerHTML= message;

	
	
