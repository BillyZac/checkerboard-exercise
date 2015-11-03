/********************************************/
// SET UP THE BODY
/********************************************/
var body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = '#FFFFFF'
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
  var h = Math.floor(Math.random()*100) /* Set hue to a number between 0 and 100 */
  var color = 'hsl(' + h + ', 100%, 80%)'
  console.log(color)
  square.style.backgroundColor = color

  // Put the square on the board
  body.appendChild(square)
}
