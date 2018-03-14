/* This Function Will Add Time Clock To The Page */

window.onload = function showTimer() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('timer').innerHTML = h + ":" + m + ":" + s;
        var t = setTimeout(showTimer, 500);
    
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
        /* The Weekday */
        var weekday = new Array(7);
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        weekday[7] = "Sunday";
         
        var weekdayDisplay = weekday[today.getDay()];



        /* The Year And Day */

        var month = new Array(12);
        
        month[1] = "January";
        month[2] = "February";
        month[3] = "March";
        month[4] = "April";
        month[5] = "May";
        month[6] = "June";
        month[7] = "July";
        month[8] = "August";
        month[9] = "September";
        month[10] = "Octomber";
        month[11] = "November";
        month[12] = "December";

        var monthDisplay = month[today.getMonth()];

        var dateDisplay = today.getDate();

        var yearDisplay = today.getFullYear();

        document.getElementById("month-day").innerHTML = weekdayDisplay + ", " + monthDisplay + " " + dateDisplay + " " + yearDisplay;
}

