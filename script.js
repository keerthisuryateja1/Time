function updateTime() {
    const optionsTime = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const optionsDate = { timeZone: 'Asia/Kolkata', year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const now = new Date();

    const time = now.toLocaleTimeString('en-US', optionsTime);
    const date = now.toLocaleDateString('en-US', optionsDate);

    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}

window.onload = function() {
    updateTime();
    setInterval(updateTime, 1000);
};
