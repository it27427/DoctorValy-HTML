// if use this then use type="module" with script tag
// import dayjs from "https://cdn.skypack.dev/dayjs@1.10.3";

// const now = new Date();
// const today = dayjs(now).format("dddd, DD MMMM, YYYY");

function currentDateTime() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
  const current = new Date();
  const day = new Date();
  const dayName = days[day.getDay()] + ',';
  
  const monthName = monthNames[day.getMonth()];
  const date = current.getDate() + ' ' + monthName + ' ' + current.getFullYear();
  
  const dateTime = dayName + ' ' + date;

  return dateTime;
}

const dateToday = document.querySelector('.datetoday');
dateToday.innerHTML = currentDateTime();