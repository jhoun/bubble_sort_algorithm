module.exports = function mergeSort(numArr){

  let lengthOfArr = numArr.length;
  let middle = lengthOfArr/2;
  let left = [];
  let right = [];

  //base cases
  if(lengthOfArr < 2){
    return;
  }

  //pushes to the left or right depending where the middle number
  for (var i =0; i < lengthOfArr; i++){
      if (numArr.indexOf(numArr[i]) < middle){
        left.push(numArr[i]);
      } else {
        right.push(numArr[i]);
      }
  }

  mergeSort(left);
  mergeSort(right);
  return merge(left,right, numArr);


};

//used to merge the left array and right array into the main array
function merge(left, right, numArr){

  var lengthOfLeft = left.length;
  var lengthOfRight = right.length;
  var l = 0;
  var r = 0;
  var a = 0;

  //depending on either if the first number on the left or right side is larger
  //the 'l' or 'r' will be incremented. 'a' will always increment
  while(l < lengthOfLeft && r < lengthOfRight){
    if (left[l] <= right[r]) {
      numArr[a] = left[l];
      l +=1;
    } else{
      numArr[a] = right[r];
      r += 1
    }
    a +=1;
  }

  //since the lesser value has been placed on the 1st index, the second number needs
  //to fill in the 2nd array index
  while(l < lengthOfLeft) {
    numArr[a] = left[l];
    l +=1;
    a +=1;
  }
  while(r < lengthOfRight){
    numArr[a] = right[r];
    r +=1;
    a +=1;
  }

  //returns sorted array from each call stack
  return numArr;
}


// mergeSort([4, 2, 1, 6]);

