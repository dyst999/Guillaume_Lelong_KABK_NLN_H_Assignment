var allDiv = document.getElementsByClassName("bouge");
console.log(allDiv, allDiv.length);

var fps = 1000 / 60;
var ani = true;
var x = [];
var y = [];

var dirX = [];
var dirY = [];

for (var i = 0; i < allDiv.length; i++) {
    // x[i] = [i] * 10;
    // y[i] = [i] * 10;

    // dirX[i] = [i + 1] / 1;
    // dirY[i] = [i + 1] / 1;

    // dirX[i] = [i + 1] /3;
    // dirY[i] = [i + 1] /3;

    x[i] = getRandomFromTo(0, window.innerWidth - 300);
    y[i] = getRandomFromTo(200, window.innerHeight - 200);

    dirX[i] = getRandomFromTo(0.5, 10);
    dirY[i] = getRandomFromTo(0.5, 10);
}

window.addEventListener("keypress", onClick); 
function onClick() {
    if (ani == true) {
        ani = false;
    }
    else {
        ani = true;
    }
}

setInterval(update, fps);

function update() {

    if (ani === true) {
        for (var i = 0; i < allDiv.length; i++) {
            if (x[i] > window.innerWidth - allDiv[i].offsetWidth) {
                x[i] = window.innerWidth - allDiv[i].offsetWidth;
                dirX[i] = -dirX[i];
            }
            if (x[i] < 0) {
                x[i] = 0;
                dirX[i] = -dirX[i];
            }
            console.log(dirX[i]);
            x[i] += dirX[i];

            if (y[i] > window.innerHeight - allDiv[i].offsetHeight) {
                y[i] = window.innerHeight - allDiv[i].offsetHeight
                dirY[i] = -dirY[i];
            }
            if (y[i] < 0) {
                y[i] = 0;
                dirY[i] = -dirY[i];
            }
            y[i] = y[i] + dirY[i];

            allDiv[i].style.left = x[i] + "px";
            allDiv[i].style.top = y[i] + "px";
            // allDiv[i].style.transform = "translate(" + x +"px," + y + "px)";
        }
    }
}

function getRandomFromTo(from, to) {
    var result = Math.random() * (to - from) + from;
    return result;
}