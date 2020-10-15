var priyanshu=3;
var gg;


function setup() {
  createCanvas(400, 400);
  gg=createInput("enter value");
  
}

function draw() {
  background(220);
  
 if (keyIsDown(ENTER)) {
if(priyanshu<gg.value()){
    text("Value is greater than priyanshu",200,200);
  } else{
    text("Value is less than or equal priyanshu",200,200);
   }
 }
  
}