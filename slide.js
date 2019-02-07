function openNav(){
    document.getElementById('overlay', 'mezelf', 'periode', 'gallerij', 'contact', 'opleiding').style.width = "100%";
}

function closeNav(){
    document.getElementById('overlay', 'mezelf', 'periode', 'gallerij', 'contact', 'opleiding').style.width = "0%";
}

function sendForm() {
    alert("Je bericht is verzonden, bedankt!")
}

while (!naam) {
    var naam = prompt("Wat is je naam?");

    document.getElementById("welkom").innerHTML =
        "Welkom " + naam + "";
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i;
}
