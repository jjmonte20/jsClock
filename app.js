const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
    const now =  new Date();

    // seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // minutes
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    // hours
    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + 90;
    minuteHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);