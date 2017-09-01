var lines = document.querySelectorAll('#mainbox > *')
var square = []

function table () {
  for (var l = 0; l < lines.length; l++) {
    square.push([...lines[l].children])
  }
}
table()
console.log(square)

function visibilityArr () {
  var index = [
    [3, 5],
    [4, 6],
    [5, 6],
    [5, 5],
    [5, 4]
  ]

  for (var i = 0; i < index.length; i++) {
    var j = index[i][0]
    var k = index[i][1]
    square[j][k].style.visibility = 'hidden'
  }
}
visibilityArr()


function change () {
  var storedCellsOne = []
  var storedCellsTwo = []
  var storedCellsMoreThanThree = []
  var storedCellsThree = []
  for (var i = 0; i < square.length ; i++) {
    var j = 0
    while (j < square.length) {
        var index = [
        [i-1, j-1],
        [i-1, j],
        [i-1, j+1],
        [i, j-1],
        [i, j+1],
        [i+1, j-1],
        [i+1, j],
        [i+1, j+1]
        ]
        var counter = 0
        for (x = 0; x < index.length; x++) {
          var a = index[x][0]
          var b = index[x][1]
          if (a < 0 || b < 0 || a > square.length - 1 || b > square.length - 1) {
            continue
          }
          if (square[a][b].style.visibility === 'hidden'){
            counter++
            }
          }
          if (counter == 1 && square[i][j].style.visibility === 'hidden'){
            storedCellsOne.push(square[i][j])
          }
          if (counter == 3 && square[i][j].style.visibility != 'hidden'){
            storedCellsThree.push(square[i][j])
          }
          if (counter > 3 && square[i][j].style.visibility == 'hidden'){
            storedCellsMoreThanThree.push(square[i][j])
          }
      j = j + 1
    }
  }
  for (var i = 0; i < storedCellsOne.length; i++){
    storedCellsOne[i].style.visibility = 'visible'
  }
  for (var i = 0; i < storedCellsThree.length; i++){
    storedCellsThree[i].style.visibility = 'hidden'
  }
  for (var i = 0; i < storedCellsMoreThanThree.length; i++){
    storedCellsMoreThanThree[i].style.visibility = 'visible'
  }
  setTimeout(change, 300)
}

change()
