module.exports = function mergeSort(numArr){

let lengthOfArr = numArr.length;
let middle = lengthOfArr/2;
let left = [];
let right = [];

if(lengthOfArr < 2){
  return;
}

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

function merge(left, right, numArr){

  var lengthOfLeft = left.length;
  var lengthOfRight = right.length;
  var i = 0;
  var j = 0;
  var k = 0;

  while(i < lengthOfLeft && j < lengthOfRight){
    if (left[i] <= right[j]) {
      numArr[k] = left[i];
      i +=1;
    } else{
      numArr[k] = right[j];
      j += 1
    }
    k +=1;
  }
  while(i < lengthOfLeft) {
    numArr[k] = left[i];
    i +=1;
    k +=1;
  }
  while(j < lengthOfRight){
    numArr[k] = right[j];
    j +=1;
    k +=1;
  }
  return numArr;
}


// mergeSort([2, 4, 1, 6, 8, 5, 3, 7]);

