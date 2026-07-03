function addTransaction(){
alert("거래 추가 기능 (확장 가능)");
}

const tripStart = new Date("2026-10-28");
function updateDday(){
const now = new Date();
const diff = Math.ceil((tripStart-now)/(1000*60*60*24));
document.getElementById("dDay").innerText = "D-" + diff;
}
updateDday();

const nextEvent = new Date("2026-10-31T09:20:00");
function updateCountdown(){
const now = new Date();
const diff = Math.ceil((nextEvent-now)/(1000*60*60*24));
document.getElementById("countdown").innerText = "D-" + diff;
}
updateCountdown();
