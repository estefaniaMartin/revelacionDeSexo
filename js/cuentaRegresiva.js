
window.onload = updateClock;

var totalTime = 10;
var img = document.createElement('img');
img.src = './img/click.png';
var container = document.getElementById('countdown')


function updateClock() {
    container.innerHTML = totalTime;
    if(totalTime==0){
        showPicture();       

    }else{
        totalTime-=1;
        setTimeout("updateClock()",1000);
    }
}

function showPicture() {
    container.innerHTML = "";
    container.appendChild(img);
    setTimeout()

}

