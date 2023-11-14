const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

let image = new Image();
image.src = "./res/img/DVD2.png";
/*ctx.fillStyle = "orange";
ctx.fillRect(500, 200, 80, 50);

ctx.strokeStyle ="black";
ctx.strokeRect(355, 200, 80, 50);

ctx.fillStyle = "black";
ctx.fillRect(500, 300, 80, 50);

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 100);
ctx.lineTo(100, 100);
ctx.lineTo(50,50);
ctx.fill();
ctx.stroke();
//--------------smile------------
ctx.strokeStyle ="black";
ctx.fillRect(355, 25, 25, 50);
ctx.strokeStyle ="black";
ctx.fillRect(455, 25, 25, 50);

ctx.beginPath();
ctx.moveTo(450, 100);
ctx.lineTo(390, 100);
ctx.fill();
ctx.stroke();
//---------dum-----------------
ctx.fillStyle ="black";
ctx.fillRect(55, 325, 85, 50);

ctx.fillStyle ="red"; 
ctx.beginPath();
ctx.moveTo(55, 325);
ctx.lineTo(100, 300);
ctx.lineTo(140, 325);
ctx.stroke();
ctx.fill();

ctx.fillStyle ="white";
ctx.fillRect(115, 330, 15, 20);
ctx.fillStyle ="white";
ctx.fillRect(65, 330, 15, 20);
ctx.fillStyle ="white";
ctx.fillRect(90, 350, 15, 30);
ctx.fillStyle ="green";
ctx.fillRect(45, 375, 150, 20);
//---------uploud obrazku-------
window.onload = () => {
    ctx.drawImage(mario, 150, 320, 150, 450);
}
//--------------
*/

let x = 0;
let y = 0;
let xVelocity = 1;
let yVelocity = 1;
let imageWidht = 100;
let imageheight = 100;

window.addEventListener("resize", () => {
   resizeCanvas();
}) ;

function resizeCanvas(){
    canvas.width = window.innerWidth;    
    canvas.height = window.innerHeight;    
}

window.onload = () => {
resizeCanvas();
    setInterval(()=> {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        x+= xVelocity;
        y+= yVelocity;
        if(y + imageheight>=canvas.height || y <= 0){
            yVelocity *=-1;
        }
        if(x +imageWidht >=canvas.width || x <=0){
            xVelocity *=-1;
        }
    
        ctx.drawImage(image ,x, y , imageWidht, imageheight);
        

    }, 1);

}

