var AVG_YEAR_DAYS = 365.25;

var yearsOld = prompt("How many years old are you?");

var daysOld = Math.round(yearsOld * AVG_YEAR_DAYS);

alert("On your most recent birthday, you were " + daysOld + " days old.")
