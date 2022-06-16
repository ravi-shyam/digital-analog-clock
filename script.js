
window.addEventListener('DOMContentLoaded',setInterval(()=>{
    document.body.style.display='inline-block';
    document.body.style.marginTop='20vh';
    let now= new Date();
    let seconds = now.getSeconds();
    let minutes = (now.getMinutes()<10?'0':'') + now.getMinutes();
    let hours = now.getHours();
    const secondHand=document.querySelector('.second-hand');
    const minuteHand=document.querySelector('.min-hand');
    const hourHand=document.querySelector('.hour-hand');
    secondHand.style.transform = `rotate(${seconds*6+90}deg)`;
    minuteHand.style.transform = `rotate(${minutes*6+90}deg)`;
    hourHand.style.transform=`rotate(${hours*30+90}deg)`;
    console.log(`rotate(${minutes/10}deg)`);
    document.querySelector('.time').textContent=`${hours}:${minutes}`;
},1000))