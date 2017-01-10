module.exports = function quickSort(numArr){

var pivot = numArr[0];
var left = [];
var right = [];

if(numArr.length <= 1){
  return numArr;
}

for (var i = 1; i < numArr.length; i++){
  if (numArr[i] > pivot){
    right.push(numArr[i]);
  } else {
    left.push(numArr[i]);
  }
}

return quickSort(left).concat(pivot, quickSort(right));

};

// quickSort([6, 3, 8, 1, 5, 4, 7, 2]);