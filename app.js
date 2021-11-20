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
// let currentDate = new Date();
// let ramazanDate = new Date('04/12/2021');
// let diffTime = Math.abs(ramazanDate - currentDate);
// let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// document.write(`${diffDays} days have passed since 1st ramazan, 2021`);

// Answer no 10:
// let firstDateOfDec = new Date('01/01/2015');
// let lastDateOfDec = new Date('12/05/2015 22:50:16');
// let diffTime = Math.abs(lastDateOfDec - firstDateOfDec);
// let diffSeconds = Math.ceil(diffTime / (1000 * 60));
// document.write(`On reference date ${lastDateOfDec}, ${diffSeconds} seconds had passed since beginning of 2015`);

// Answer no 11:
// let currentDate = new Date();
// let date = new Date();
// currentDate.setHours( currentDate.getHours() + 1 );
// document.write(`current date: ${date}<br> 1 hour ago, it was ${currentDate}`);

// Answer no 12:
// let currentYear = new Date();
// let pastCenturyYear = new Date();
// let pastYear = pastCenturyYear.getFullYear() - 100;
// pastCenturyYear.setFullYear(pastYear);
// document.write(`current date: ${currentYear}<br> 100 years back, it was ${pastCenturyYear}`);

// Answer no 13:
// let age = +prompt("Enter your age");
// let year = new Date().getFullYear();
// let calculateYear = year - age;
// document.write(`Your age is ${age}<br> Your birth year is ${calculateYear}`);

// Answer no 14:
// document.write(`<h1>K-Electric Bill</h1>`);
// let customerName = prompt("Enter your name");
// let monthsArr = ['january','febraury','march','april','may','june','july','august','september','october','november','december'];
// let date = new Date();
// let currentMonth = monthsArr[date.getMonth()];
// let numOfUnits = Math.floor(+prompt("Enter number of units"));
// let chargePerUnit = Math.floor(+prompt("Enter per unit charger"));
// let latePayableCharge = Math.floor(+prompt("Late payable charge"));
// let netAmountPayable = numOfUnits * chargePerUnit;
// let grossAmountPayable = netAmountPayable + latePayableCharge;

// document.write(`Customer Name: ${customerName}<br>`);
// document.write(`Month: ${currentMonth}<br>`);
// document.write(`Number of units: ${numOfUnits}<br>`);
// document.write(`Charge per unit: ${chargePerUnit}<br><br>`);
// document.write(`Net Amount Payable (within Due Date): ${netAmountPayable}<br>`);
// document.write(`Late payment surcharge: ${latePayableCharge}<br>`);
// document.write(`Gross Amount Payable (after Due Date): ${grossAmountPayable}<br>`);

// End of Chapter 31 to 34