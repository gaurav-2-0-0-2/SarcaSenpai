

import Sketch from "react-p5"

function Bg() {

    var canvas;
    var bubbles = [];

    const setup = (p5) => {
        canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');
        for (let i = 0; i < 150; i++) {
            let x = p5.random(p5.width);
            let y = p5.random(p5.height);
            let r = p5.random(5,30);
            bubbles[i] = new Bubble(p5,x, y, r);    

        }
        

    }


    //  const mousePressed = function (p5) {
    //         let r = p5.random(10, 25);
    //         let b = new Bubble(p5.mouseX, p5.mouseY, r);
    //         bubbles.push(b);
    //     }



    const draw = (p5) => {
        p5.background(123.6,12,63);
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
            bubbles[i].show();

        }

        // p5.ellipse(p5.random(10, 20), p5.random(50, 100), 50, 50);
    };

    // creating bubble objects



    function Bubble(p5, x, y, r) {


        this.p5 = p5;
        this.x = x;
        this.y = y;

        this.move = function () {
            this.x += p5.random(-0.1, 0.1);
            this.y += p5.random(-0.6, 0.6);
        }

        this.show = function () {
            this.p5.blendMode(p5.HARD_LIGHT);
            // this.p5.blendMode(p5.LIGHTEST);
            this.p5.stroke(255, 195, 0);
            this.p5.strokeWeight(7);
            for (let i = 0; i < 1; i += 0.1) {
               this.p5.fill(155*i, 150*i);
    //   ellipse(this.pos.x, this.pos.y, this.r * i);
    }
            // this.p5.fill(255, 190, 0);
            // this.p5.filter(this.p5.BLUR, 10);
            this.p5.ellipse(this.x, this.y, r);
        }
    }



    return <Sketch setup={setup} draw={draw} />
}

export default Bg;







 // class Bubble{
    //     constructor(x,y){
    //         this.x = x;
    //         this.y = y;
    //     }

    //     move(){
    //         this.x += 30;
    //         this.y += 40;
    //     }

    //     show(){
    //         p5.ellipse(this.z, this.y, 40, 50);
    //     }
    // }