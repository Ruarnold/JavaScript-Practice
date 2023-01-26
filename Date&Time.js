/* JavaScript program to display the current day and time in the following format. 
Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

function datetime() {
    let d = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date();
    let day = date.getDay();
    console.log("Today is : ", d[day])
    let hour = date.getHours();
    if (hour > 12) {
        console.log("Current time is : ", hour, "PM",":", date.getMinutes(), ":", date.getSeconds())
    } else {
        console.log("Current time is : ", hour, "AM", ":", date.getMinutes(), ":", date.getSeconds())
    }
}

datetime()