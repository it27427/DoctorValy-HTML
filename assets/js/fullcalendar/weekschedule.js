const name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const now = Date.now();
const DAY = 60 * 60 * 24 * 1000;
const today = new Date(now).getDay();

for (let i = today; i >= 0; i--) {
  const date = new Date(now - DAY * i);
  console.log("*",name[date.getDay()], date.getDate());
}
for (let i = 1; i < 7 - today; i++) {
  const date = new Date(now + DAY * i);
  console.log(name[date.getDay()], date.getDate());
}