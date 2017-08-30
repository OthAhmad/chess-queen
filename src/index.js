var table = document.querySelector(".chessboard__table");
var arrayMatrixLib = require('x-array-matrix');
var createMatrix = arrayMatrixLib.createMatrix;
var tableTitled = document.querySelector(".chessboard");
function renderChessboard(row, column){
  var bwSwitch = false;
  var matrix = [];

  for (var i = 0; i < 8; i++) {
    var tr = document.createElement('div');
        tr.classList.add('chessboard__row');
    bwSwitch = !bwSwitch;
    matrix[i] = [];

    for (var j = 0; j < 8; j++) {
      bwSwitch = !bwSwitch;
      var td = document.createElement('div');
      td.classList.add("chessboard__cell");
      if(bwSwitch) td.classList.add('chessboard__cell--black');

      tr.appendChild(td);
      matrix[i].push(td);
    }

    table.appendChild(tr);
  }

  matrix.forEach(function(rowArray, rowNum) {
    rowArray.forEach(function(td, colNum) {

      td.addEventListener('click', function() {
        cellClicked(rowNum, colNum);
      });
      // body...
    });
  });

  return matrix;
}

function cellClicked(rowNum, colNum) {
  removeHighlight();
  highlightRow(rowNum);
  highlightColumn(colNum);
  highlightDiagonals(rowNum, colNum);
}

var matrixChess = renderChessboard();

//////7
function highlightRow(rowNum) {
  matrixChess[rowNum].forEach(function(cellElement) {
    cellElement.classList.add('chessboard__cell--highlight');
  });

}

function highlightColumn(colNum) {
 matrixChess.forEach(function(rowArray){
  rowArray[colNum].classList.add('chessboard__cell--highlight');

 });
 }
 function removeHighlight() {
   document.querySelectorAll('.chessboard__cell--highlight').forEach(function(element){
 element.classList.remove('chessboard__cell--highlight');
   });
 }


function highlightCell(rowNum, columnNum) {
  matrixChess[rowNum][columnNum].classList.add('chessboard__cell--highlight');
}

function highlightDiagonals(rowNum, columnNum) {
  console.info(rowNum, columnNum);
  var x;
  var y;
  var c;
  var mx = matrixChess.length;
  var my = matrixChess[0].length;

  c = 1;
  for (y = rowNum + 1; y < my; y++) {
    for (x = columnNum + 1; x < mx; x++) {
      if (y === (rowNum + c) && x === (columnNum + c)) {
        highlightCell(y, x);
        c++;
      }
    }
  }

  c = 1;
  for (y = rowNum + 1; y < my; y++) {
    for (x = columnNum - 1; x >= 0; x--) {
      if (y === (rowNum + c) && x === (columnNum - c)) {
        highlightCell(y, x);
        c++;
      }
    }
  }

  c = 1;
  for (y = rowNum - 1; y >= 0; y--) {
    for (x = columnNum + 1; x < mx; x++) {
      if (y === (rowNum - c) && x === (columnNum + c)) {
        highlightCell(y, x);
        c++;
      }
    }
  }

  c = 1;
  for (y = rowNum - 1; y >= 0; y--) {
    for (x = columnNum - 1; x >= 0; x--) {
      if (y === (rowNum - c) && x === (columnNum - c)) {
        highlightCell(y, x);
        c++;
      }
    }
  }
}

var tilted = document.querySelector('input');
tilted.addEventListener('change', function() {
    if (tilted.checked) {
        tableTitled.classList.add('chessboard--tilted');
    } else {
        tableTitled.classList.remove('chessboard--tilted');
    }
});

