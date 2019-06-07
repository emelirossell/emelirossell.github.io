// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;


/*Input:The Weather
*Processing: Determine what type of shoe works
*Output: The type of shoe
*/ 
function calculate() {
var weather = document.getElementById("weather").value;
      var a;       
        if (weather == "hot") {
                    a = "Sandals";
     } else if (weather == "rain") {
                    a = "Galoshes";
    } else if (weather == "snow") {
                    a = "Boots";
     } else {weather=="Cool"
                    a = "Shoes";
 }
 document.getElementById("answer").innerHTML = a;
            };
            
            submit.addEventListener("click", calculate);
