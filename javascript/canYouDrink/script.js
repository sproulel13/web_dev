//console.log(this);
var x=this.prompt("how old are you");

function drink(){
  if (parseInt(x) > 20){
    console.log("you can drink alcohol")
  }
  else{
    console.log("you are too young to drink alcohol")
  }
}

function smoke(){
  if (parseInt(x) > 17){
    console.log("you can smoke cancer sticks")
  }
  else {
    console.log("you are too young to buy cigarettes")
  }
}

function weed(){
  var state=this.prompt("What state do you live in? ")
    if (state === "CA" || state === "CO" || state === "WA" || state ==="OR" || state ==="NV" || state ==="AK" || state ==="MI" || state ==="VT" || state ==="MA" || state ==="ME" || state ==="DC" && parseInt(x) > 20){
      console.log("puff puff")
    }
}

drink();
smoke();
weed();
