console.log("hello from the console!");

// 25 min timer 
function startTimer() {
    let seconds = 1500;
    timerId = setInterval(myTimer, 1000);

    document.getElementById("startButton").className = "hideElement";
    document.getElementById("cancelButton").className = "";

    function myTimer() {
        seconds--;
        displayTimer(seconds);
        if(seconds === 0) {
            clearInterval(timerId);
            displayTimer(1500);
            document.getElementById("startButton").className = "";
            document.getElementById("cancelButton").className = "hideElement";
            alert("Time is up!");
        }
    }
}

function cancelTimer() {
    clearInterval(timerId);
    displayTimer(1500);
    document.getElementById("startButton").className = "";
    document.getElementById("cancelButton").className = "hideElement";
}

function displayTimer(currentSeconds) {
    let minutes = Math.floor(currentSeconds/60);
    let seconds = currentSeconds%60;
    document.getElementById("timer").innerText = "";
    document.getElementById("timer").innerText = minutes + " : " + seconds; 
}