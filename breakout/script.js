var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height - 30;
var dx = 1.5;
var dy = -2;
var ballRad = 10;
var padHeight = 10;
var padWidth = 75;
var padX = (canvas.width-padWidth)/2;
var keyRight = false;
var keyLeft = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;

var bricks = [];
for (c=0; c<brickColumnCount; c++){
  bricks[c] = [];
  for (r=0; r<brickRowCount; r++){
    bricks[c][r] = {x:0,y:0, status:  1};
  }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function drawBricks(){
  for(c=0; c<brickColumnCount; c++){
    for(r=0; r<brickRowCount; r++){
      if(bricks[c][r].status == 1){
        var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY =(r*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x=brickX
        bricks[c][r].y=brickY
        ctx.beginPath();
        ctx.rect(brickX,brickY,brickWidth,brickHeight);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
      }

    }
  }
}

//key handler
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
//draws the ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRad, 0, Math.PI*2);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
}
//draws the paddle
function drawPad(){
  ctx.beginPath();
  ctx.rect(padX, canvas.height-padHeight, padWidth, padHeight);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();

}

function cDect(){
  for(c=0; c<brickColumnCount; c++){
    for(r=0; r<brickRowCount; r++){

      var b = bricks[c][r];

      if(b.status == 1){
        if(x>b.x && x < b.x +brickWidth && y > b.y && y< b.y+ brickHeight){
          dy = -dy;
          b.status = 0;
          score++
          if (score == brickColumnCount * brickRowCount){
            alert('you win!')
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawScore(){
  ctx.font = "16px Arial"
  ctx.fillStyle = "black"
  ctx.fillText("Score: "+score,8,20)
}

function draw(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  drawBall();
  drawPad();
  drawBricks();
  cDect();
  drawScore();
  if (y + dy < ballRad) {
    dy = -dy;
  }
  else if (y + dy > canvas.height-ballRad){
    if(x > padX && x < padX + padWidth){
      dy = -dy;
      dx += .1;
    }
    else {
        alert("Game Over!");
        document.location.reload();
    x = canvas.width/2
    y = canvas.height-30
    }
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
