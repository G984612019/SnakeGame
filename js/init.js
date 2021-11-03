document.addEventListener('keydown', keyPush);

const canv = document.getElementById("canvas");
const ctx = canv.getContext("2d");
const SIZE = 20;
const FPS = 15;
const MIN = 5;

let px = py = SIZE/2;
let xd = yd = 0;
let snake = [];
let tail = MIN;
let appleX = Math.floor(Math.random()*SIZE);
let appleY = Math.floor(Math.random()*SIZE);
let p_appleX = 0;
let p_appleY = 0;
do {
    p_appleX = Math.floor(Math.random()*SIZE);
    p_appleY = Math.floor(Math.random()*SIZE);
} while (appleX == p_appleX || appleY == p_appleY);
let score = 0;
let key = 0;
