document.querySelector("form").addEventListener("click", (e) => {
    e.preventDefault();
});

let currentDate = new Date();

document.querySelector("#date").innerText = currentDate.toDateString();

function startTimer(minutes) {
    let seconds = minutes * 60;

    displayTimer(seconds);

    let buttons = document.querySelectorAll(".startButton");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    document.querySelector(".cancelButton").style.display = "block";

    let imgs = document.querySelectorAll("img");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.add("rotating-tomato");
    }

    timerId = setInterval(myTimer, 1000);

    function myTimer() {
        seconds--;

        displayTimer(seconds);

        if (seconds === 0) {
            cancelTimer();
        }
    }
}

function customTimer() {
    let customNoOfMinutes = document.querySelector("#minutes").value;

    var regex = /^[0-9]+$/;

    if (regex.test(customNoOfMinutes)) {
        startTimer(customNoOfMinutes);
    } else {
        document.querySelector("#status").innerText = "enter a number";
    }
}

function displayTimer(currentSeconds) {
    let minutes = Math.floor(currentSeconds / 60);

    let seconds = currentSeconds % 60;

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    document.querySelector("#status").innerText = "";

    document.querySelector("#status").innerText = minutes + " : " + seconds;
}

function cancelTimer() {
    clearInterval(timerId);

    let buttons = document.querySelectorAll(".startButton");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }

    document.querySelector(".cancelButton").style.display = "none";

    let imgs = document.querySelectorAll("img");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove("rotating-tomato");
    }

    document.querySelector("#status").innerText = "ready";
}
