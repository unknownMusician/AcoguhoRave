
function getTimeout(char) {
    switch (char) {
        case '.':
            return 700;
        case ' ':
            return 200;
        default:
            return 70;
    }
}

function drawChar() {
    let currentChar = fullText[index];
    about.innerHTML = fullText.substring(0, index+1);

    index++;
    if (index < fullText.length) {
        const timeMultiplier = 0.5;
        setTimeout(drawChar, getTimeout(currentChar) * timeMultiplier);
    }
    else{
        about.className = "";
    }
}

let about = document.getElementById("about");

about.className = "writing";

let fullText = about.innerHTML;
let index = 0;

drawChar();





// let start = Date.now();
// let timer = setInterval(function () {
//     // сколько времени прошло с начала анимации?
//     let timePassed = Date.now() - start;

//     let letterInterval = 70;

//     let index = timePassed / letterInterval;

//     let currentIndex = Math.min(fullText.length, index);

//     if (currentIndex >= fullText.length) {
//         clearInterval(timer);
//         about.className = "";
//         return;
//     }

//     document.getElementById("about").innerHTML = fullText.substring(
//         0,
//         currentIndex
//     );
// }, 100);
