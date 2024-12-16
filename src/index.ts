export function formatDate(date: Date, format: string): string {
  const map: { [key: string]: string } = {
    YYYY: date.getFullYear().toString(),
    MM: (date.getMonth() + 1).toString().padStart(2, "0"),
    DD: date.getDate().toString().padStart(2, "0"),
    HH: date.getHours().toString().padStart(2, "0"),
    mm: date.getMinutes().toString().padStart(2, "0"),
    ss: date.getSeconds().toString().padStart(2, "0"),
    month: getMonthName(date.getMonth()),
    fullMonth: getFullMonthName(date.getMonth()),
  };

  return format.replace(
    /YYYY|MM|DD|HH|mm|ss|month|fullMonth/g, // Add 'fullMonth' here
    (matched) => map[matched]
  );
}

// Helper function to get the month name
function getMonthName(monthIndex: number): string {
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

// Helper function to get the month name
function getFullMonthName(monthIndex: number): string {
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
