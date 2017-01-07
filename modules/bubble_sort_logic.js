module.exports = function bubbleSort(numArr){

  var swapped = true;
  var n = numArr.length;

  while(swapped === true){
      swapped = false;
      for (var i = 0; i < n ; i++) {
        if (numArr[i] > numArr[ i +1]){
          var hold = numArr[i];
          numArr[i] = numArr[i + 1];
          numArr[i + 1] = hold;
          swapped = true;
        }
      }
    }
    return numArr;

};
