let clock = document.getElementById("clock");
let interval;
let isTimeShowed = false;
function timer() {
    let time = new Date();
    let h = time.getHours().toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();
    if(h.length < 2) {
        h = "0" + h;
    };
    if(m.length < 2) {
        m = "0" + m;
    };
    if(s.length < 2) {
        s = "0" + s;
    };
    clock.innerHTML = h + ":" + m + ":" + s;
    document.body.style.background = "#" + h + m + s;
    document.body.style.color = "#" + s + 'ffff';
}
function disableTimer() {
    clearInterval(interval);
    clock.innerHTML = "00:00:00";
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
}
function enableTimer() {
    interval = setInterval(timer, 1000);
}
function chameleonWatch() {
    isTimeShowed =!isTimeShowed;
    timer();
    isTimeShowed ? enableTimer() : disableTimer();
}