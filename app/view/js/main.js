function getDocumentWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

function getDocumentHeight() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
};

// var canvasEls = document.querySelectorAll('dots');
// var interval = 350;
var canvasList = ['dots','formDots','subscribeDots'];
// setInterval(function () {
//         drawDots();
//     }, interval);
// for (var i = 0; i < canvasList.length; i++) {
//    var canvas = document.getElementById(canvasList[i]);
//    canvas.addEventListener('resize', onResize, false);
//    var context = canvas.getContext('2d');
//    function resizeCanvas() {
//      canvas.width = vw;
//      canvas.height = vh;
//      drawDots();
//    }
//    resizeCanvas();
//    function drawDots() {
//      var angleInDegrees = 0;
//      var r = 2,
//          cw = 75,
//          ch = 75;
//          // context.fillText("+", getRandomInt(cw*3, vw), getRandomInt(ch, vh));
//
//      for (var x = 20; x < vw; x+=cw) {
//        for (var y = 40; y < vh; y+=ch) {
//
//            context.fillStyle = '#ffffff';
//            context.fillRect(x-r/2,y-r/2,r,r);
//            context.font="30px console";
//            context.save();
//            context.restore();
//            // context.clearRect(0, 0, vw, vh);
//          }
//      }
//
//
//    }
//    function redraw() {
//      context.save();
//      context.clearRect(0, 0, vw, vh);
//      angleInDegrees += 5;
//
//      context.rotate(angleInDegrees * Math.PI / 180);
//
//      context.restore();
//    }
//    function getRandomInt(min, max) {
//      return Math.floor(Math.random() * (max - min)) + min;
//    }
//    drawDots();
//    var vw = getDocumentWidth(),
//        vh = getDocumentHeight();
//
//    // resize the canvas to fill browser window dynamically
//    window.addEventListener('resize', onResize, false);
//    function onResize() {
//      vw = getDocumentWidth();
//      vh = getDocumentHeight();
//      resizeCanvas();
//    }
//    console.log (canvas);
// }

// var canvas = document.getElementById('dots');
var canvas = document.getElementById('subscribeDots');
// var canvas = document.getElementById('formDots');
console.log(canvas);
var context = canvas.getContext('2d');

var vw = getDocumentWidth(),
    vh = getDocumentHeight();

// resize the canvas to fill browser window dynamically
window.addEventListener('resize', onResize, false);
function onResize() {
  vw = getDocumentWidth();
  vh = getDocumentHeight();
  resizeCanvas();
}

function resizeCanvas() {
  canvas.width = vw;
  canvas.height = vh;
  drawDots();
}
resizeCanvas();


// grid
function drawGrid(){
  var cellW = 100,
      cellH = 100;

  // vertical lines
  for (var x = 0; x <= vw; x += cellW) {
      context.moveTo(x, 0); // x, y
      context.lineTo(x, vh);
  }

  // horizontal lines
  for (var y = 0; y <= vh; y += cellH) {
      context.moveTo(0, y); // x, y
      context.lineTo(vw, y);
  }

  context.strokeStyle = "#fff";
  context.stroke();
}
// drawGrid();

// dots
function drawDots() {
  var r = 2,
      cw = 75,
      ch = 75;

  for (var x = 20; x < vw; x+=cw) {
    for (var y = 20; y < vh; y+=ch) {
        context.fillStyle = '#ffffff';
        context.fillRect(x-r/2,y-r/2,r,r);
      }
  }
}
drawDots();
