



var height=150;
var width = 150;
var color = "blue";


var opacity = 1;


document.getElementById("button1").onclick = boxSize;

function  boxSize (){

  for (let i = 0; i < height;i++){
    height = 300;
    width = 150;
    width = width + i
    document.getElementById("box").style = "width:" + width.toString()+"px;" + "height:"+width.toString()+"px;" +"background-color:orange";

  }
}

document.getElementById("button2").onclick = boxColor;

function boxColor (){
  document.getElementById('box').style="height:150px; width:150px; background-color:blue; margin:25px"
}



document.getElementById("button3").onclick = boxFade;

function boxFade (){
  document.getElementById('box').style="height:150px; width:150px; background-color:blue; margin:25px"
}



document.getElementById("button4").onclick = boxReset;

function boxReset (){
  document.getElementById('box').style="height:150px; width:150px; background-color:orange; margin:25px"

}
