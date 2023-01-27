//to find how many days are left until next Christmas


future  = Date.parse("december 25");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
console.log(days)
