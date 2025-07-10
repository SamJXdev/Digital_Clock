function updateTime(){
    const now=new Date();
    const hours= String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');

    document.getElementById('time').innerHTML = `${hours}<span class="colon">:</span>${minutes}<span class="colon">:</span>${seconds}`;
}

updateTime();
setInterval(updateTime,1000);