var months = [{
    name: 'January',
    days: 31
},{
    name: 'February',
    days: 28
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
},{
    name: 'December',
    days: 31
}];

/* PROBLEM ONE: */


for (var name = 0; name < months.length; name++) { // this create a variable to store the months in 'name' for the length of the object, which is 12/
    for (var j = 1; j < months[name].days + 1; j++) {  // this loops the months and days specified in the object together so that each month will have the correct # of days. the + 1 gives us the last day of each month or else the loop would stop one days short.
        console.log(months[name].name + ' ' + j);  // this will print out months and days with a space between.
    }
}

/* PROBLEM 2: */

// for (var hour = 0; hour < 24; hour++) { // this loops gives us each hour of the day in the variable 'hour'
//     for (var minute = 0; minute < 60; minute ++) { // this loop gives us 60 minutes in the variable 'minute'
//         for(var seconds = 0; seconds < 60; seconds ++) { // this loop gives us 60 seconds in the variable 'seconds'
//             console.log((hour + ':') + (minute + ':') + (seconds)); // this will print hour:minute:seconds for each hour, minute and second of each day.
//         }
//     }
// }

/* BONUS PROBLEM */

// Raphael Solution Shown In Class
// var formatHours = function (){
//     hour = hour % 12;
//     if ( hour < 10 ) {
//         hour = '0' + hour;
//     }
//     return hour;
// };
// var formatMinSec = function (){
//     if ( time < 10 ) {
//        time = '0' + time;
//    }
//    return time;
// };
// var amOrPm = function () {
//     if ( hour > 11 ) {
//        return 'PM';
//    }
//    else {
//        return 'AM';
//    }
// };
// for (var hour = 0; hour <24; hour++) {
//     for (var minute = 0; minute < 60; minute ++){
//         for(var second = 0; second < 60; second ++) {
//             console.log(`${formatHours(hour)} : ${formatMinSec(minute)}; : ${formatMinSec(second)} ${amOrPm(hour)}`);
//         }
//     }
// }
