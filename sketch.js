const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var particles;
var plinkos = []
var divisions = []
var score = 0;
var turn = 11;
var divisionHeight = 300
var gameState = "PLAY"

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,500,20)

  for (a = 0; a<= width; a = a+80)
  {
    Bucket = new Division(a,height - divisionHeight/2,10,divisionHeight)
    divisions.push(Bucket)
  }

  for (b = 40;b<=width;b = b+50)
  {
    plinko = new Plinko(b,75)
    plinkos.push(plinko)
  }

  for (c = 15;c<=width;c=c+50)
  {
    plinko = new Plinko(c,175)
    plinkos.push(plinko)
  }
   
  for (d = 40;d<=width;d = d+50)
  {
    plinko = new Plinko(d,275)
    plinkos.push(plinko)
  }
   
  for (e = 15;e<=width;e = e+50)
  {
    plinko = new Plinko(e,375)
    plinkos.push(plinko)
  }
  
  mouseClicked();
  
  Engine.run(engine);
  
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();

  if (particles != null)
  {
    particles.display();
    if (particles.body.position.y > 760)
    {
      if(particles.body.position.x > 0 && particles.body.position.x < 80)
      {
        score = score + 500
        particles = null
      }
    }
  }
      
  if (particles != null)
  {
    particles.display();
    if (particles.body.position.y > 760)
    {
      if(particles.body.position.x > 80 && particles.body.position.x < 160)
      {
        score = score + 500
        particles = null
      }
    }
  }

  if (particles != null)
  {
    particles.display();
    if (particles.body.position.y > 760)
    {
      if(particles.body.position.x > 160 && particles.body.position.x < 240)
      {
        score = score + 100
        particles = null
      }
    }
  }

  if (particles != null)
  {
    particles.display();
    if (particles.body.position.y > 760)
    {
      if(particles.body.position.x > 240 && particles.body.position.x < 320)
      {
        score = score + 100
        particles = null
      }
    }
  }

  if (particles != null)
  {
    particles.display();
    if (particles.body.position.y > 760)
    {
      if(particles.body.position.x > 320 && particles.body.position.x < 400)
      {
        score = score + 300
        particles = null
      }
    }
  }

  if (particles != null)
  {
    particles.display();
    if (particles.body.position.y > 760)
      if(particles.body.position.x > 400 && particles.body.position.x < 480)
      {
        score = score + 300
        particles = null
      } 
  }

  if (turn == 0 )
  {
    gameState ="END"
  }
  if(gameState == "END")
    {
      textSize(25)
      fill("white")
      text("You Scored "+ score + " Points",140,125)
    }
  
  for (f = 0; f < divisions.length; f++ )
  {
   divisions[f].display();
  }

  for (g = 0; g < plinkos.length; g++ )
  {
   plinkos[g].display();
  }

  fill("white")
  textSize(25)
  text("500",20,525)
  text("500",100,525)
  text("100",180,525)
  text("100",260,525)
  text("300",340,525)
  text("300",420,525)
  textSize(21)
  text("Score : "+ score,20,40)
  text("Turns : "+ turn,380,40)
}

async function mouseClicked(){
  if (gameState !=="END")
  {
    turn--;
    particles = new Particle(mouseX,10,10)
  
  }
}


