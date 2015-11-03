/********************************************/
// SET UP THE BODY
/********************************************/
var body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = '#FFFFFF'
body.style.margin = '0'
body.style.width = '100%'


/********************************************/
// BUILD THE CHECKERBOARD
/********************************************/
function buildBoard() {
  for (var i=0; i < 81; i++) {
    // Create a square
    var square = document.createElement('div')

    // Set layout properties
    square.style.width = '11.1%'
    square.style.paddingBottom = '11.1%'
    square.style.float = 'left'


    // Put the square on the board
    body.appendChild(square)
  }
}


/********************************************/
// COLOR THE SQUARES
/********************************************/
function colorSquares() {
  // Color the square
  for (var i=0; i < 81; i++) {
    var square = document.getElementsByTagName('div')[i]
    square.style.backgroundColor = squareColor(i)
  }
}

// Takes the number of a square. Returns a different color for each square, in HSL format, based on where it is in the sequence.
function squareColor(i) {
  var h = Math.floor(Math.random()*100) /* Set hue to a number between 0 and 100 */
  var s = '40%'
  var l = (i+100)/3 + '%'
  var color = 'hsl(' + h + ', '+ s + ', ' + l + ')'
  return color
}


/********************************************/
// EXECUTE
/********************************************/

// Build the board initially
buildBoard()
colorSquares()

// Recolor the board every two seconds
setInterval('colorSquares()', 2000)
