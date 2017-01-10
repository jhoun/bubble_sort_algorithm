module.exports = function mergeSort(numArr){

let lengthOfArr = numArr.length;
let middle = lengthOfArr/2;
let left = [];
let right = [];

if(lengthOfArr < 2){
  return;
} else {
  for (var i =0; i < lengthOfArr; i++){
      if (numArr.indexOf(numArr[i]) < middle){
        left.push(numArr[i]);
      } else {
        right.push(numArr[i]);
      }
  }
}


console.log('left: ', left);
console.log('right: ', right);

};


