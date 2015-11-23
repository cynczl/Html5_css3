/**
 * Created by Lenovo on 2015/9/12.
 */
function draw(id){
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle = "green";
    context.fillRect(0,0,500,400);
    context.fillStyle = "white";
    context.font = "bold 80px '微软雅黑";
    context.textBaseline = "top";
    context.textAlign = "left";
    context.fillText('我爱力力',80,80,400);
    window.location = canvas.toDataURL('image/jpeg')
}