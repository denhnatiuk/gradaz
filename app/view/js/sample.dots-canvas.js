var canvas = $('canvas.dots');
var canvasWidth = canvas.width();
var canvasHeight = canvas.height(); // this one is new
canvas.attr({height: canvasHeight, width: canvasWidth});

//  sample
var dotMargin = 30;
var numRows = 14;
var numCols = 28;
// Set the colors you want to support in this array
var colors = ['#F03C69', '#FFCD32', '#2BAD5D', '#2ABABF', '#CDDC28', '#B91E8C'];

// var canvas = $('canvas.dots');
var context = canvas[0].getContext('2d');
// var canvasWidth = canvas.width();
// var canvasHeight = canvas.height(); // this one is new
// canvas.attr({height: canvasHeight, width: canvasWidth});

var dotWidth = ((canvasWidth - (2 * dotMargin)) / numCols) - dotMargin;
var dotHeight = ((canvasHeight - (2 * dotMargin)) / numRows) - dotMargin;

if( dotWidth > dotHeight ) {
  var dotDiameter = dotHeight;
  var xMargin = (canvasWidth - ((2 * dotMargin) + (numCols * dotDiameter))) / numCols;
  var yMargin = dotMargin;
} else {
  var dotDiameter = dotWidth;
  var xMargin = dotMargin;
  var yMargin = (canvasHeight - ((2 * dotMargin) + (numRows * dotDiameter))) / numRows;
}

var dotRadius = dotDiameter * 0.5;

for(var i = 0; i < numRows; i++) {
  for(var j = 0; j < numCols; j++) {
  var x = (j * (dotDiameter + xMargin)) + dotMargin + (xMargin / 2) + dotRadius;
  var y = (i * (dotDiameter + yMargin)) + dotMargin + (yMargin / 2) + dotRadius;
  // Grab a random color from the array.
  var color = colors[Math.floor(Math.random() * colors.length)];
  drawDot(x, y, dotRadius, color);
  }
}

function drawDot(x, y, radius, color) {
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
}
// $(document).ready(function(){
//
//   var canvas = $('canvas.dots');
//   canvas.attr({height: canvas.height(), width: canvas.width()});
//   var context = canvas[0].getContext('2d');
//   context.beginPath(); // begin drawing
//   context.arc(50, 50, 25, 0, 2 * Math.PI, false); // specify that it's an arc
//   context.fillStyle = '#F03C69'; // add a fill color
//   context.fill(); // fill it in
//
// });
