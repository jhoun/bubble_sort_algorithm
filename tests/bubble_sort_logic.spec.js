const chai = require('chai')
const expect = chai.expect;
const should = chai.should;
const bubbleSort = require('../modules/bubble_sort_logic');

describe('Using bubble-sort to sort an array', function() {
  it('input array should be sorted in order', function() {
    let numArr = [5, 1, 4, 2, 8];

    expect(bubbleSort(numArr)).to.deep.equal([1, 2, 4, 5, 8]);
  })
  // it('input array should be sorted in order', function() {
  //   let numArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  //   expect(bubbleSort(numArr)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10]);
  // })
})