// Start of Chapter 31 to 34

// Answer no 1:
// var currentDate = new Date();
// document.write(`Current Date: ${currentDate}`);

// Answer no 2:
// let months = [
//     "january",
//     "febraury",
//     "march",
//     "april",
//     "may",
//     "june",
//     "july",
//     "august",
//     "september",
//     "october",
//     "november",
//     "december"
// ];
// let currentDate = new Date();
// let month = "";
// for (let i = 0; i < months.length; i++) {
//     month = months[currentDate.getMonth()];
// }
// alert(`The current month is: ${month[0].toUpperCase() + month.slice(1)}`);

// Answer no 3:
// let days = [
//     "sunday",
//     "monday",
//     "tuesday",
//     "wednesday",
//     "thursday",
//     "friday"
// ];
// let currentDay = new Date();
// let day = "";
// for (let i = 0; i < days.length; i++) {
//     day = days[currentDay.getDay()];
// }
// document.write(`The current day is: ${day[0].toUpperCase()}${day.slice(1,3)}`);

// Answer no 4:
// let days = [
//     "sunday",
//     "monday",
//     "tuesday",
//     "wednesday",
//     "thursday",
//     "friday",
//     "saturday"
// ];
// let currentDay = new Date();
// let day = "";
// for (let i = 0; i < days.length; i++) {
//     day = days[currentDay.getDay()];
//     if (day === "sunday" || day === "saturday") {
//         day = "It\'s Fun day";
//     }
// }
// document.write(`${day}`);

// Answer no 5:
// let currentDate = new Date().getDate();
// let text = "";
// if (currentDate >= 16) {
//     text = "Last days of the month.";
// } else {
//     text = "First fifteen days of the months";
// }
// document.write(`${text}`);

// Answer no 6:
// var todayDate = new Date();
// var todayMilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = todayMilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);
 
// document.write(`Current Date: ${todayDate}<br>`);
// document.write(`Elapsed milliseconds since midnight, Jan 1, 1970: ${todayMilli}`);
// document.write(`Elapsed minutes since midnight, Jan 1, 1970: ${accurateMin}`);

// Answer no 7:
// let date = new Date();
// let currentHour = date.getHours();
// let currentMinutes = date.getMinutes();
// let hour = "";
// if (currentHour <= 12 && currentMinutes <= 59) {
//     hour = "Its AM";
// } else {
//     hour = "Its PM";
// }
// document.write(hour);

// Answer no 8:
// let date = new Date();
// date.setDate(30);
// document.write(`Later date: ${date}`);

// Answer no 9:


// End of Chapter 31 to 34