class IMAGE{

    constructor(){


    }

    display(){
    push();
    filter(GRAY);
    imageMode(CENTER);
    translate(width / 2, height / 2);
    image(img, 0, 0, 0, img.height);
    pop();

    }


}