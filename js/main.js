ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2, canv.height/2, 20, 20);
setInterval(function() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  snake.push({x:px, y:py});
  for (let i=0; i<snake.length-1; i++) {
    ctx.fillRect(snake[i].x*SIZE, snake[i].y*SIZE, SIZE-2, SIZE-2);
    if (snake[i].x == px && snake[i].y == py) {
      tail = MIN;
      score = 0;
    }
    if (snake[i].x*SIZE < 0 || canv.width <= snake[i].x*SIZE) {
      gameOver();
    }
    if (snake[i].y*SIZE < 0 || canv.height <= snake[i].y*SIZE) {
      gameOver();
    }
  }
  while (snake.length > tail) {
    snake.shift();
  }
  if (appleX == px && appleY == py) {
    tail++;
    score = score + 100;
    applePosition();
    poisonApplePosition();
  }
  ctx.fillStyle = "red";
  ctx.fillRect(appleX*SIZE, appleY*SIZE, SIZE-2, SIZE-2);

  if (p_appleX == px && p_appleY == py) {
    if (tail > MIN) {
      tail--;
      score = score - 100;
    } else {
      gameOver();
    }
    applePosition();
    poisonApplePosition();
  }
  ctx.fillStyle = "purple";
  ctx.fillRect(p_appleX*SIZE, p_appleY*SIZE, SIZE-2, SIZE-2);
}, 1000/FPS);

function applePosition() {
  let r;
    do {
      r = Math.floor(Math.random()*canv.width/SIZE);
    } while (appleX == r || p_appleX == r);
    appleX = r;
    do {
      r = Math.floor(Math.random()*canv.height/SIZE);
    } while (appleY == r || p_appleY == r);
    appleY = r;
}

function poisonApplePosition() {
  let r;
    do {
      r = Math.floor(Math.random()*canv.width/SIZE);
    } while (p_appleX == r || appleX == r);
    p_appleX = r;
    do {
      r = Math.floor(Math.random()*canv.height/SIZE);
    } while (p_appleY == r || appleY == r);
    p_appleY = r;
}

function gameOver() {
  location.reload();
  alert("GAME OVER!!\n" + score + "点");
}
