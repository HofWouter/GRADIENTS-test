class CANVAS {

    constructor() {
      

    }   

        COMP_BOVEN(snelheid){

        let widthX = width / numX;
        let AANTAL = 2;

        let waveWidth_1;
        let waveWidth;

        push();
        for (let x = 0; x < numX; x++) {
          
          let sinValue = sinCache[x];
          
            push();
            for (let i=0; i< AANTAL; i++){

                if (i % 2 == 1){

                    
                    
                    waveWidth_1 = (sinValue + 1) * 0.5 * (300 - 30 - minhoogte_midden / 3) + minhoogte_midden / 3;
                    waveWidth = (sinValue + 1) * 0.5 * (height / 2 - maxhoogte_midden / 2);
                    

                }

                else{

                    waveWidth_1 = map(sin(radians(snelheid + x * speed)), -1, 1,height/3,height/3);/////////
                    waveWidth = map(sin(radians(snelheid + x * speed)), -1, 1, height / 2 - minhoogte_midden/2, 0 ); 

                }

                for (let y=0; y<waveWidth; y++){

                    let inter = map(y, 0, waveWidth, 0, 1);
                    let c;

                    if (inter < 0.5) {
                        c = lerpColor(KLEUR_2, KLEUR_1, inter * 2);
                      } else {
                        c = lerpColor(KLEUR_1, KLEUR_2, (inter - 0.5) * 2);
                      }

                      stroke (c);

                      let displacement = -waveWidth_1 / 2;
                      push();
                      line(x * widthX, y + displacement - waveWidth_1, (x+1) * widthX, y + displacement - waveWidth_1);
                      pop();

                }
            }
            pop();
        }
        pop();
        }


        COMP_MIDDEN(snelheid){
  
          let widthX = width/numX;      
  
          push();
  
          for (let x=0; x<numX; x++){
  
              let waveWidth_1 = map(sin(radians(snelheid + x * speed)), -1, 1, minhoogte_midden, maxhoogte_midden);
  
              for (let y=0; y < waveWidth_1; y++){
                  let inter = map(y,0, waveWidth_1,0,1);
                  let c;
  
                  if (inter < 0.5){
                      c = lerpColor(KLEUR_2, KLEUR_1, inter * 2);
                  }
  
                  else {
                      c = lerpColor(KLEUR_1, KLEUR_2, (inter - 0.5) * 2);
                  }
  
                  stroke(c);
  
                  let displacement = -waveWidth_1 / 2;
  
                  line(x * widthX, y + displacement, (x + 1) * widthX, y + displacement);
  
                  }
  
              }
  
              pop();
          }

        COMP_ONDER(snelheid){

            let widthX = width / numX;
            let AANTAL = 2;
    
            let waveWidth_1;
            let waveWidth;
            
            push();
            for (let x = 0; x < numX; x++) {
              
              let sinValue = sinCache[x];
              
                push();
                for (let i=0; i< AANTAL; i++){
    
                    if (i % 2 == 1){

                        let ini_waveWidth_1 = map(sin(radians(snelheid + x * speed)), -1, 1, minhoogte_midden, maxhoogte_midden);
                        let ini_waveWidth = map(sin(radians(snelheid + x * speed)), -1, 1, 0, height / 2 - ini_waveWidth_1 / 2);  
                        
                        waveWidth_1 = map(sin(radians(snelheid + x * speed)), -1, 1, ini_waveWidth_1,height);
                        waveWidth = map(sin(radians(snelheid + x * speed)), -1, 1, height/2-ini_waveWidth_1/2,0);                    
    
                    }
    
                    else{
    
                        waveWidth_1 = map(sin(radians(snelheid + x * speed)), -1, 1, minhoogte_midden, maxhoogte_midden);
                        waveWidth = map(sin(radians(snelheid + x * speed)), -1, 1, 0, height / 2 - waveWidth_1 / 2);
    
                    }
    
                    for (let y=0; y<waveWidth; y++){
    
                        let inter = map(y, 0, waveWidth, 0, 1);
                        let c;
    
                        if (inter < 0.5) {
                            c = lerpColor(KLEUR_2, KLEUR_1, inter * 2);
                          } else {
                            c = lerpColor(KLEUR_1, KLEUR_2, (inter - 0.5) * 2);
                          }
    
                          stroke (c);
    
                          let displacement = -waveWidth_1 / 2;
                          line(x * widthX, y + displacement + waveWidth_1, (x + 1) * widthX, y + displacement + waveWidth_1);
    
                    }
                }
                pop();
            }
            pop();

        }
    
  }