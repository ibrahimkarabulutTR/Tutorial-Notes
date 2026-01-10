const now = new Date();

console.log(now);
console.log(typeof now);
console.log(now.getFullYear());
console.log(`we are in the ${now.getMonth()}`);
console.log(`face on the ${now.getDate()} of the month`);
console.log(`face on the ${now.getDay()} of the week`);
console.log(`hour is ${now.getHours()}`);
console.log(`minute is ${now.getMinutes()}`);
console.log(`second is ${now.getSeconds()}`);

console.log(`Time Stamp ${now.getTime()}`);
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleTimeString());
console.log(now.toLocaleString());





const startDate = new Date('08/15/2018 8:45:00');

const diff = now.getTime() - startDate.getTime();

console.log(diff);

const min = Math.round(diff/1000);
const hour = Math.round(min/60);
const day = Math.round(hour/24);
const year = Math.round(day/365);

console.log(`Video shooting started ${min} minutes ago`);
console.log(`Video shooting started ${hour} hour ago`);
console.log(`Video shooting started ${day} day ago`);
console.log(`Video shooting started ${year} year ago`);


const timeStamp = 164685465521;
console.log(new Date(timeStamp));