let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

let h3 = document.querySelector(".text");
text = h3.innerHTML;
const DELAY = 1000;

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

setInterval(setDate, DELAY);
setInterval(() => {
   
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    h3.innerHTML = `${text}`;
}, 200);