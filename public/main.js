/*jslint browser: true, devel: true, closure: true */
var gameModule = (function (document) {
    "use strict";
    var counter = 0,
        ballX,
        ballY,
        ballR,
        scores,
        sum;

    function touchEvent(evt) {
        var x = evt.clientX,
            y = evt.clientY,
            tmp = (ballX - x) * (ballX - x) + (ballY - y) * (ballY - y);
        console.log("Clienked: " + x + "," + y);
        if (tmp < ballR * ballR) {
            scores = 100 - ballR;
            sum = sum + scores;
            console.log("Hit!Your scores:" + scores);
        }
        //ctx.clearRect(0,0,canvas.width,canvas.height);
        //ctx.restore();
    }

    function print() {
        console.log("Final: " + sum);
    }

    function startGame() {
        var canvas = document.getElementById('game'),
            ctx = canvas.getContext('2d'),
            a = Math.floor(Math.random() * 255),
            b = Math.floor(Math.random() * 255),
            c = Math.floor(Math.random() * 255);

        ballX = Math.floor(Math.random() * 600);
        ballY = Math.floor(Math.random() * 450);
        ballR = Math.floor(Math.random() * 80);
        canvas.width = 640;
        canvas.height = 480;

        ctx.fillStyle = "rgb(" + a + "," + b + "," + c + ")";
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.font = "40px Arial";
        ctx.fillStyle = 'Tomato ';
        ctx.fillText("炘 ", 600, 470);

        if (counter >= 10) {
            print();
        } else {
            setTimeout(startGame, 1000);
            counter = counter + 1;
            console.log("Counter = " + counter);
        }
    }

    function start() {
        scores = 0;
        sum = 0;
        document.getElementById('main').addEventListener("click", touchEvent, false);
        startGame();
    }
    return {
        start : start
    //  print:print
    };
}(document));

gameModule.start();
//gameModule.print();