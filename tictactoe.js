console.log("Player X starts first!")
console.log("What row (0, 1, 2) ?")


var gtable = [[null, null, null], 
              ['x', 'x', 'o'], 
              [null, null, 'x']];


console.log(gtable);


var ifWin = true;

var ifHorizontalWin = function(str) {
  for (var i = 0; i < 3; i++) {
    ifWin = true;
    for (var k = 0; k < 3; k++){
      if(gtable[i][k] !== str) {
        ifWin = false;
        break;
      }
    }
    if(ifWin) { return ifWin}
  }
  return false;
};

console.log(ifHorizontalWin('x'));

var ifVerticalWin = function() {


};

var if0DiagonalWin = function() {

};

var if2DiagonalWin = function() {

};
