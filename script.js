// Current day of the week
function updateDayOfWeek() {
  const Weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const recent = new Date();
  const day = Weekdays[recent.getUTCDay()];
  document.getElementById("day-of-week").textContent = day;
}
//  This is a function to get the current time in UTC
function updateTimeUTC() {
  const now = new Date();
  const hours = String(now.getUTCHours()).padStart(2, "0");
  const minutes = String(now.getUTCMinutes()).padStart(2, "0");
  const seconds = String(now.getUTCSeconds()).padStart(2, "0");
  document.getElementById(
    "time"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}
// Updating time every second
setInterval(updateTimeUTC, 1000);

// Updating time and day of the week on page load
updateTimeUTC();
updateDayOfWeek();
