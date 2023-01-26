/* Get the current date in following formats
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

let d = new Date();
let m = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();
let month = m +1;
if (month<10){
    month="0"+month
}
if (date <10 ) {
    date = "0"+ date
}
console.log("Today's date is :(mm/dd/yy) " + month +"/"+ date+ "/" + year)
console.log("Today's date is :(dd/mm/yy) " + date + "/" + month+ "/" + year)