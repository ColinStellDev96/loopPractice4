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

for (var name = 0; name < months.length; name++) {
    for (var j = 1; j < months[name].days; j++) {
        console.log(months[name].name + ' ' + j);
    }
}

// fixed the error of that end by removing the = from <= since .length doesn't need a =

/* PROBLEM 2: */

// for (var hour = 0; hour <24; hour++) {
//     for (var minute = 0; minute < 60; minute ++) {
//         for(var second = 0; second < 60; second ++) {
//             console.log((hour + ':') + (minute + ':') + (second));
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
