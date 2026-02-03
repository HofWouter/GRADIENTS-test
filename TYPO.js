class TYPO{

    constructor(){
        

    }

    display(){
        push();
        let txt = textInput.value;

        let spacing = 48;

        let targetWidth = width - spacing; // 48px marge links en rechts
        let fontSize = 100;

        while (fontSize > 1) {
            textSize(fontSize);
            if (textWidth(txt) <= targetWidth) {
                break;
            }
            fontSize--;
        }
        textAlign(CENTER,CENTER);
        textStyle(BOLD);
        fill(KLEUR_1);
        text(txt,width/2,spacing);
        pop();

    }

}