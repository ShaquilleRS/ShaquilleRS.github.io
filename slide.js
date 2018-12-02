function openNav(){
    document.getElementById('overlay', 'mezelf', 'periode', 'gallerij', 'contact', 'opleiding').style.width = "100%";
}

function closeNav(){
    document.getElementById('overlay', 'mezelf', 'periode', 'gallerij', 'contact', 'opleiding').style.width = "0%";
}

function sendForm() {
    alert("Je bericht is verzonden, bedankt!")
}

var naam = prompt("Wat is je naam?");

document.getElementById("welkom").innerHTML =
    "Welkom " + naam + "";

while (!naam) {
    var naam = prompt("Wat is je naam?");

    document.getElementById("welkom").innerHTML =
        "Welkom " + naam + "";
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('klok').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i;
}
