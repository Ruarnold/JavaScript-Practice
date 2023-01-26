//Whether a given year is a leap year.

function leapYear(year) {
    var x = (year%100 == 0) ? (year%400 == 0) : (year%4 == 0)
    if (x == true){
        console.log("It is a leap year")
    } else {
        console.log("It is not a leap year")
    }
}
leapYear(2097)