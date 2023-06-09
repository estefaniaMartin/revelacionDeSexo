let t = 0;
let canvas = document.querySelector('canvas');
let plano2D = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw(){
    plano2D.fillStyle = 'hsla(0,0%,0%,.1)';
    plano2D.fillRect(0,0,canvas.width,canvas.height);
    let f,r,i;
    
    f = Math.sin(t) *6;
    for(i=0; i<500; ++i){
        r=400 * Math.sin(i*f);

        plano2D.fillStyle = 'hsla('+ i + 12 +',100%,60%,1)';
        plano2D.beginPath();

        plano2D.arc(Math.sin(i)* r + (canvas.width / 2),
        Math.cos(i)* r + (canvas.height / 2),
        1.5,0, Math.PI *2
        );
        plano2D.fill();
    }
t += 0.000005

};

function run(){
    window.requestAnimationFrame(run);
    draw();
}

run();

export {run};