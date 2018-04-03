(function loop() {
    renderDots();
    requestAnimationFrame(loop);
})();

var margin = 20;
var x = 0;
var y = 0;
var elem = dots.getContext("2d");;
var elems = [".","+"];
var dots = document.body.getElementById('dots');
var canvasWidth = dots.width();
var canvasHeight = dots.height();
dots.attr({height: dots.height(), width: dots.width()});

function renderDots(elem, x, y){
    elem.font="30px sans serif";
    elem.fillStyle = "red";
    elem.textAlign = (x, y);
    elem.fillText("+", dots.width/2, dots.height/2);
}
for (i=0;i<canvasWidth;i++){
	for (j=0;j<canvasHeight;j++){
		for (var item in elems){
    	renderDots(elem, x+margin, y+margin);
      elem.rotate(-Math.PI/2);
      console.log("loop");
    }
	}
}
