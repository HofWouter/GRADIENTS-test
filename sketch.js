let c1;
let t;

let numX = 30;
let minhoogte_midden = 0;
let maxhoogte_midden = 300;

let KLEUR1;
let KLEUR2;

let sinCache = [];
let switch_imageSave = false;
let speed;
let switch_playCanvas = false;

let img;
let font;

let i;


// KNOPPEN UIT HTML
let slider = document.getElementById("slider");
let time = document.getElementById("time");
let button = document.getElementById("export");
let sharpness = document.getElementById("sharpness")
let colorInput = document.getElementById("colorpicker1");
let colorInput2 = document.getElementById("colorpicker2");
let speed_ini = document.getElementById("speed");
let textInput = document.getElementById("text");

let alphaValue = document.getElementById("alphaValue");

let imageUpload = document.getElementById("imageUpload");

function preload(){

 // font = loadFont('assets/PPNeueMontreal-Bold.otf')

}

function setup() {
  let c = createCanvas(568, 810,P2D);
  pixelDensity(2);
  c.parent('canvasWrapper');
  //textFont(font);
  
  c1 = new CANVAS();
  t = new TYPO();
  //i = new IMAGE();
  
}

function draw() {
  
  //background(220);

  //i.display();

  KLEUR_1 = color (colorpicker1.value);
  KLEUR_2 = color (colorpicker2.value);
  
  let snelheid = frameCount;
  speed = speed_ini.value;
  numX = sharpness.value;
  maxhoogte_midden = slider.value;
  minhoogte_midden = 0;
  

  push();
  translate(0,height/2);
  for (let x = 0; x < numX; x++) {
    sinCache[x] = sin(radians(snelheid + x * speed));
  }
  
  c1.COMP_MIDDEN(snelheid);
  c1.COMP_BOVEN(snelheid);
  c1.COMP_ONDER(snelheid);
  pop();


  t.display();
}

function exportImage() {
    switch_imageSave = !switch_imageSave;

    if (switch_imageSave) {
        let now = new Date();
        let timestamp = now.getFullYear() + "-" + 
                        (now.getMonth() + 1).toString().padStart(2, "0") + "-" +
                        now.getDate().toString().padStart(2, "0") + "_" +
                        now.getHours().toString().padStart(2, "0") + "-" +
                        now.getMinutes().toString().padStart(2, "0") + "-" +
                        now.getSeconds().toString().padStart(2, "0");
        
        let fileName = `Image_${timestamp}.png`;
        save(fileName);
    }
}