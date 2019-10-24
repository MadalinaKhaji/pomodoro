
let totalTime = 0;

function startTimer() {
    let seconds = 1500; // 25 minutes
    timerId = setInterval(myTimer, 1000);

    toggleButton("startButton", false);
    toggleButton("cancelButton", true);

    function myTimer() {
        seconds--;
        displayTimer(seconds);
        if(seconds === 900) { // 15 minutes
            document.getElementById("tomatoImg").src = "img/yellow-tomato.png";
        }
        if(seconds === 300) { // 5 minutes
            document.getElementById("tomatoImg").src = "img/red-tomato.png";
        }
        if(seconds === 0) {
            clearInterval(timerId);
            displayTimer(1500);
            displayTotalTime("0 : 0");
            toggleButton("startButton", true);
            toggleButton("cancelButton", false);
            alert("Time is up!");
        }
    }
}

function cancelTimer() {
    let currentTime = document.getElementById("timer").innerText;
    displayTotalTime(currentTime);
    clearInterval(timerId);
    displayTimer(1500);
    toggleButton("startButton", true);
    toggleButton("cancelButton", false);
}

function displayTimer(currentSeconds) {
    let minutes = Math.floor(currentSeconds/60);
    let seconds = currentSeconds%60;
    document.getElementById("timer").innerText = "";
    document.getElementById("timer").innerText = minutes + " : " + seconds; 
}

function displayTotalTime(theTime) {
    let min = theTime.trim().slice(0,2);

    totalTime += (25 - min);

    document.getElementById("totalTime").innerText = "";
    document.getElementById("totalTime").innerText = "Total time: " + totalTime + " minutes";
}

function toggleButton(buttonId, isDisplayed) {
    if(isDisplayed === true) {
        document.getElementById(buttonId).style.display = "initial";
    } else {
        document.getElementById(buttonId).style.display = "none";
    }
}

toggleButton("cancelButton", false);