function updateClock() {
    const clockElement = document.getElementById("clock");
    const dateElement = document.getElementById("date");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}`;
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    dateElement.textContent = now.toLocaleDateString('pt-BR', options);
}
setInterval(updateClock, 1000);
updateClock();

document.getElementById("homeBar").addEventListener("click", function () {
    document.getElementById("lockScreen").style.transform = "translateY(-100%)";
    document.getElementById("homeScreen").style.transform = "translateY(-100%)";
});

document.getElementById("unlockButton").addEventListener("click", function () {
    document.getElementById("lockScreen").style.transform = "translateY(0)";
    document.getElementById("homeScreen").style.transform = "translateY(100%)";
});
