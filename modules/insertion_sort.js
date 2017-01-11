module.exports = function insertionSort(numArr){
  for (var i = 1; i < numArr.length; i++){
    var hold = numArr[i];
    var j = i;

    while(j > 0 && numArr[j -1] > hold){
      numArr[j] = numArr[j-1];
      j -= 1;
      numArr[j] = hold;
    }
  }
  return numArr;
}