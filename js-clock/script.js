let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();
    const secondsDegree = (sec / 60) * 360 + 90;
    const minuteDegree = ((min / 60) * 360) + 90;
    const hourDegree = ((hour / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;


}

setInterval(setDate, 1000);