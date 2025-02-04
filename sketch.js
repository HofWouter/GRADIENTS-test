let c1;

let numX = 30;
let minhoogte_midden = 0;
let maxhoogte_midden = 300;
let speed = 10;

let KLEUR1;
let KLEUR2;

let sinCache = [];

let switch_imageSave = false;

let switch_playCanvas = false;

// KNOPPEN UIT HTML
let slider = document.getElementById("slider");
let time = document.getElementById("time");
let button = document.getElementById("export");
let sharpness = document.getElementById("sharpness")
var colorInput = document.getElementById("colorpicker1");
var colorInput2 = document.getElementById("colorpicker2");

function setup() {
  let c = createCanvas(568, 810,P2D);
  pixelDensity(2);
  c.parent('canvasWrapper');
  
  c1 = new CANVAS();
  
}

function draw() {
  
  //background(220);

  KLEUR_1 = color (colorpicker1.value);
  KLEUR_2 = color (colorpicker2.value);
  
  let snelheid = time.value;
  numX = sharpness.value;
  maxhoogte_midden = slider.value;
  minhoogte_midden = 0;
  
  translate(0,height/2);
  push();
  
  for (let x = 0; x < numX; x++) {
    sinCache[x] = sin(radians(snelheid + x * speed));
  }
  
  c1.COMP_MIDDEN(snelheid);
  c1.COMP_BOVEN(snelheid);
  c1.COMP_ONDER(snelheid);
  pop();

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



