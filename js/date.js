var myVar = setInterval(myTimer, 1000);

let time = 60;

function myTimer() {
	if(time >= 0){
        document.getElementById("date").innerHTML = "Time left:" + time;
	time--;
}
}



