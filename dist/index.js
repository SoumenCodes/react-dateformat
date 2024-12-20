"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = formatDate;
function formatDate(date, format) {
  const hours12 = date.getHours() % 12 || 12; // Convert to 12-hour format
  const ampm = date.getHours() >= 12 ? "PM" : "AM"; // Determine AM/PM
  const map = {
    YYYY: date.getFullYear().toString(),
    YY: date.getFullYear().toString().slice(-2), // Two-digit year
    MM: (date.getMonth() + 1).toString().padStart(2, "0"),
    DD: date.getDate().toString().padStart(2, "0"),
    HH: date.getHours().toString().padStart(2, "0"), // 24-hour format
    hh: hours12.toString().padStart(2, "0"), // 12-hour format
    mm: date.getMinutes().toString().padStart(2, "0"),
    ss: date.getSeconds().toString().padStart(2, "0"),
    at: ampm, // AM/PM
    month: getMonthName(date.getMonth()), // Abbreviated month
    fullMonth: getFullMonthName(date.getMonth()), // Full month
  };
  return format.replace(
    /YYYY|YY|MM|DD|HH|hh|mm|ss|at|month|fullMonth/g,
    (matched) => map[matched]
  );
}
// Helper function to get the abbreviated month name
function getMonthName(monthIndex) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[monthIndex];
}
// Helper function to get the full month name
function getFullMonthName(monthIndex) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[monthIndex];
}
