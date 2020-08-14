const Engine = Matter.Engine;
const World = Matter.World;

const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var static = [];
var divisionHeight = 300;
var frame;
var score = 0;
var count = 0;

var particle;

var gameState ="start";
var backgroundImg;
function preload(){
  backgroundImg = loadImage("bg1.jpg");
}
function setup() {
  createCanvas(900,800);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 10; j <=900; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,55,35));
    }
   for (var j = 30; j <=885; j=j+40) 
    {
    
       static.push(new Static(j,105,25));
    } 
    for (var j =10; j <=900; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,155,5));
    }
     for (var j = 30; j <=885; j=j+40) 
    {
    
       static.push(new Static(j,205,25));
    } 
    for (var j = 10; j <=900; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,255,35));
    }
    for (var j = 30; j <=885; j=j+40) 
    {
    
      static.push(new Static(j,305,25));
    } 

}

function draw() {
  background(backgroundImg); 
 
        textSize(25)
        fill("orange")
        text("Score  " + score,20, 20)
        text("500  ",35, 600);
        text("500  ",105, 600);
        text("500  " ,190, 600)
        text("500  " ,270, 600);
        text("100  " ,350, 600)
        text("100  " ,430, 600)
        text("100  " ,510, 600)
        text("200  " ,590, 600)
        text("200  ",670, 600)
        text("200  ",745, 600)
        text("200  " ,830, 600)

  Engine.update(engine);


  if ( gameState ==="end") {
    
    textSize(100);
    strokeWeight(4);
    stroke("purple");
    fill("white");
    text("GameOver", 150, 400);
  
  }

  
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  for (var i = 0; i < static.length; i++) {
     
    static[i].display();
    
  }

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
 

  if(particle != null){

     
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

  

      ground.display();
}


function mousePressed(){

if(gameState!=="end"){
 
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  
  }  
}




