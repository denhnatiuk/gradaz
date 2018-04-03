var canvasList = ['dots','formDots'];
var elems = ['&middot;','&times;'];

initCanvas();
function initCanvas () {
  for (var i = 0; i < canvasList.length; i++) {
     var canvas = document.getElementById(canvasList[i]);
     canvas.addEventListener('resize', onResize, false);
     var context = canvas.getContext('2d');
     function resizeCanvas() {
       canvas.width = vw;
       canvas.height = vh;
       drawDots();
     }
     resizeCanvas();
     drawDots();
     var vw = getDocumentWidth(),
         vh = getDocumentHeight();

     // resize the canvas to fill browser window dynamically
     function onResize() {
       vw = getDocumentWidth();
       vh = getDocumentHeight();
       resizeCanvas();
     }
     console.log (canvas);
  }
}


function drawElem() {
  elem.font="30px sans serif";
  elem.fillStyle = "red";
  elem.textAlign = (x, y);
  elem.fillText("+", dots.width/2, dots.height/2);
}











// end
