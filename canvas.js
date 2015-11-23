/**
 * Created by Lenovo on 2015/9/9.
 */
function draw(id){
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle = "red";
    context.strokeStyle = "white";
    context.lineWidth = 5;
    context.fillRect(0,0,500,350);
    context.strokeRect(50,50,180,120);
}