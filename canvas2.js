/**
 * Created by Lenovo on 2015/9/12.
 */
function draw(id){
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    for(var i=0;i<10;i++){
        context.beginPath();
        context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
        context.closePath();
        context.fillStyle = "rgba(255,0,0,0.25)";
        context.fill();
        context.strokeStyle = "red";
        context.stroke();
    }
}