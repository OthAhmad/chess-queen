const assert = require('assert');
const checkStyle = require('xt-sc-chess-queen');
const createMatrix = require('array-matrix').createMatrix;

function matrixFillArray(matrix, array) {
  var e = 0;
  matrix.forEach(function(row, rowNum){
    row.forEach(function(col, colNum){
      matrix[rowNum][colNum] = array[e];
      e++;
    });
  });
  return matrix;
}

describe('Chessboard', function() {
  var elements;
  var matrix = createMatrix(8, 8);

  before(function() {
    browser.url('http://localhost:9090');
  });

  it('has 64 .chessboard__cell elements', function() {
    elements = browser.elements('.chessboard__cell').value;
    assert(elements.length, 64);
  });

  it('highlights the possible moves when a .chessboard__cell is clicked', function() {
    //
    // Look at the documentation of WebdriverIO (in the API section of the site)
    // and write some code to make a click on the cell at the 4th row, 5th column of the chessboard
    //
    // look at `browser.elements()` and `browser.elementÌdClick()`
    //

    var highlightedElements = browser.elements('.chessboard__cell--highlight').value;
    assert(highlightedElements.length, 28);
  });


  describe('normal design', function() {
    Object.keys(checkStyle.resolutions).forEach(key => {
      it('has the right styles for ' + key.split('-').join(' '), function () {
        checkStyle(browser, key, 'highlight', './docs/image-diffs', 5);
      });
    });
  });


  describe.skip('tilted design', function() {
    it('can be toggled', function() {
      //
      // Look at the documentation of WebdriverIO (in the API section of the site)
      // and write some code to:
      // - Make a click on the checkbox
      // - Pause the browser slightly longer than the transition duration
      // - Also verify that the chessboard get the chessboard--tilted class
      //
    });

    Object.keys(checkStyle.resolutions).forEach(key => {
      it('has the right styles for ' + key.split('-').join(' '), function () {
        checkStyle(browser, key, 'tilted', './docs/image-diffs', 5, 600);
      });
    });
  });
});