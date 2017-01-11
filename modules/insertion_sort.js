module.exports = function insertionSort(numArr){

  //loops through the array
  for (var i = 1; i < numArr.length; i++){

    //holds the value that will be used to compare when to be inserted
    var hold = numArr[i];

    //the position in the array
    var positionOfIndex = i;

    //checks if greater position than 0 && if value of position before is greater than the current hold
    while(positionOfIndex > 0 && numArr[positionOfIndex -1] > hold){

      //current position equals the value of position before
      numArr[positionOfIndex] = numArr[positionOfIndex-1];

      //decrements so that you can go back a position to set your hold
      positionOfIndex -= 1;

      //sets the new position to the value being held
      numArr[positionOfIndex] = hold;
    }
  }
  return numArr;
}

// insertionSort([2, 4, 1, 6]);