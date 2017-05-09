function ClockController(){

    function displayTime() {

    var time = new Date();
    var hours = time.getHours()
    var minutes = time.getMinutes()
    var ampm = "";
    var clockDiv = document.getElementById('clock');
    
        if(hours == 0) {
            ampm = " am";
            hours = 12;
        } else if(hours < 12) {
            ampm = " am";
        } else if(hours == 12) {
            ampm = " pm";
        } else if(hours > 12) {
            ampm = " pm";
            hours -= 12;
        }

        if(minutes <= 9) { 
            minutes = "0" + minutes;
        }
    clockDiv.innerHTML = hours + ":" + minutes + ampm;
    }

    setInterval(displayTime, 1000);

}