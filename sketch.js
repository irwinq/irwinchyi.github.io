let bg;
let mainc;
//scene size is bigger than the camera
let SCENE_W = 2500; //the size of the whole scene
let SCENE_H = 2500;
let boxa,boxb,boxc,boxd,boxe,boxf,boxg,boxh,boxi,boxj,boxk,boxl,boxm,noo,never,whore,nobody,vain,freak,youmup;

function preload() {
    bg = createSprite(800,800,1600,1600);
    mainc = createSprite(0,0,30,50)
    let myAnimation = mainc.addAnimation('floating', 'assets/what/what001.png', 'assets/what/what003.png');
}

function setup() {
  createCanvas(800, 800);
    bg.addImage(loadImage('assets/background.png'));
    
    //the following sprite is coll
    boxa = createSprite();
    boxa.shapeColor = color(255);
    boxa.draw = function() {};
    boxa.setCollider('rectangle',605,88,834,182);
    
    boxb = createSprite();
    boxb.shapeColor = color(255);
    boxb.draw = function() {};
    boxb.setCollider('rectangle',232,518,461,447);
    
    boxc = createSprite();
    boxc.shapeColor = color(255);
    boxc.draw = function() {};
    boxc.setCollider('rectangle',826,447,392,540);
    
    boxd = createSprite();
    boxd.shapeColor = color(255);
    boxd.draw = function() {};
    boxd.setCollider('rectangle',688,920,111,409);
    
    boxe = createSprite();
    boxe.shapeColor = color(255);
    boxe.draw = function() {};
    boxe.setCollider('rectangle',415,1060,434,191);
    
    boxf = createSprite();
    boxf.shapeColor = color(255);
    boxf.draw = function() {};
    boxf.setCollider('rectangle',473,1350,981,33);
    
    boxg = createSprite();
    boxg.shapeColor = color(255);
    boxg.draw = function() {};
    boxg.setCollider('rectangle',961,1156,26,432);
    
    boxh = createSprite();
    boxh.shapeColor = color(255);
    boxh.draw = function() {};
    boxh.setCollider('rectangle',1165,947,440,23);
    
    boxi = createSprite();
    boxi.shapeColor = color(255);
    boxi.draw = function() {};
    boxi.setCollider('rectangle',1308,577,153,729);
    
    boxj = createSprite();
    boxj.shapeColor = color(255);
    boxj.draw = function() {};
    boxj.setCollider('rectangle',1373,1231,454,211);
    
    boxk = createSprite();
    boxk.shapeColor = color(255);
    boxk.draw = function() {};
    boxk.setCollider('rectangle',1618,800,29,1571);
    
    //this section start with words
    
    noo = createSprite(525,290,121,75);
    noo.addImage(loadImage('assets/No.png'));
    noo.setCollider('rectangle',0,0,121,75);
    
    never = createSprite(228,226,30,97);
    never.addImage(loadImage('assets/never.png'));
    never.setCollider('rectangle',0,0,30,97);
    
    whore = createSprite(800,799,250,113);
    whore.addImage(loadImage('assets/whore.png'));
    whore.setCollider('rectangle',0,0,250,113);
    
    nobody = createSprite(100,1019,170,101);
    nobody.addImage(loadImage('assets/Nobody.png'));
    nobody.setCollider('rectangle',0,0,170,101);
    
    vain = createSprite(745,1209,213,86);
    vain.addImage(loadImage('assets/vain.png'));
    vain.setCollider('rectangle',0,0,213,86);
    
    freak = createSprite(1010,813,448,113);
    freak.addImage(loadImage('assets/FREAK.png'));
    freak.setCollider('rectangle',0,0,448,113);
}

function draw() {
    background('black');
    
    mainc.velocity.x = (camera.mouseX-mainc.position.x)/20;
    mainc.velocity.y = (camera.mouseY-mainc.position.y)/20;
    camera.position.x = mainc.position.x;
    camera.position.y = mainc.position.y;
    drawSprites();
    
    mainc.collide(boxa);
    mainc.collide(boxb);
    mainc.collide(boxc);
    mainc.collide(boxd);
    mainc.collide(boxe);
    mainc.collide(boxf);
    mainc.collide(boxg);
    mainc.collide(boxh);
    mainc.collide(boxi);
    mainc.collide(boxj);
    mainc.collide(boxk);
    
    mainc.displace(noo);
    mainc.displace(never);
    mainc.displace(whore);
    mainc.displace(nobody);
    mainc.displace(vain);
    mainc.displace(freak);
    
    push();
    strokeWeight(4);
    stroke(255, 204, 100);
    noFill();
    rect(0,0,1600,1600);
    pop();
    
    //this section is using to limit the object won't be push out the canvas
    limitthemain(mainc);
    limitthemain(boxa);
    
    //camera Zoom function
    camerachange();
}

function limitthemain(passtheobject) {
    if(passtheobject.position.x < 0)
    passtheobject.position.x = 0;
  if(passtheobject.position.y < 0)
    passtheobject.position.y = 0;
  if(passtheobject.position.x > SCENE_W)
    passtheobject.position.x = SCENE_W;
  if(passtheobject.position.y > SCENE_H)
    passtheobject.position.y = SCENE_H;
}

function camerachange () {
    if(mouseIsPressed)
   camera.zoom = 0.6;
   else
   camera.zoom = 1;
}

