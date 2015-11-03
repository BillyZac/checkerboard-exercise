/********************************************/
// SET UP THE BODY
/********************************************/
var body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = '#000000'
body.style.margin = '50px auto'
body.style.width = '600px'

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
  var color = 'aqua'
  square.style.backgroundColor = color

  // Put the square on the board
  body.appendChild(square)
}
