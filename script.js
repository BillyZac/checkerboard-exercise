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
for (var i=0; i < 81; i++) {
  // Create a square
  var square = document.createElement('div')

  // Set layout properties
  square.style.width = '11.1%'
  square.style.paddingBottom = '11.1%'
  square.style.float = 'left'

  // Color the square
  square.style.backgroundColor = squareColor(i)

  // Put the square on the board
  body.appendChild(square)
}

// Takes the number of a square. Returns a different color for each square, in HSL format, based on where it is in the sequence.
function squareColor(i) {
  var h = '200'
  var s = '40%'
  var l = (i+100)/3 + '%'
  var color = 'hsl(' + h + ', '+ s + ', ' + l + ')'
  return color
}
