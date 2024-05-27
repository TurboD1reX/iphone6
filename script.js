function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const timeString = `${hours}:${minutesStr} ${ampm}`;
    document.getElementById('time').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();