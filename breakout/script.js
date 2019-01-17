var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRad = 10;
var padHeight = 10;
var padWidth = 75;
var padX = (canvas.width-padWidth)/2;
var keyRight = false;
var keyLeft = false;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  if(e.keyCode == 39){
    keyRight = true;
  }
  else if(e.keyCode == 37){
    keyLeft = true;
  }
}

function keyUpHandler(e) {
  if(e.keyCode == 39){
    keyRight = false;
  }
  else if(e.keyCode == 37){
    keyLeft = false;
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRad, 0, Math.PI*2);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
}

function drawPad(){
  ctx.beginPath();
  ctx.rect(padX, canvas.height-padHeight, padWidth, padHeight);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();

}

function draw(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  drawBall();
  drawPad();
  if (y + dy < ballRad) {
    dy = -dy;
  }
  else if (y + dy > canvas.height-ballRad){
    alert("Game Over!");
    document.location.reload();
    x = canvas.width/2
    y = canvas.height-30
  }

  if (x + dx < ballRad || x + dx > canvas.width-ballRad) {
    dx = -dx;
  }

  if(keyRight && padX < canvas.width-padWidth){
    padX += 7;

  }
  else if(keyLeft && padX > 0){
    padX -= 7;
  }

  x += dx;
  y += dy;
}

setInterval(draw, 10);
