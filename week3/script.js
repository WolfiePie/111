<canvas id="mycanvas" width="200" height="100" style="border:1px solid #d10b0b;">
        Your browser does not support the HTML canvas tag.</canvas>

{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();

}