const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var background

function preload(){
  background = "snow1.png"
}



function setup() {
  createCanvas(800,400);


  background = new (150, 305, 300, 170);

}

function draw() {
  background(255,255,255);  

  bg.display()
  drawSprites();

}