const chai = require('chai')
const expect = chai.expect;
const should = chai.should;
const insertionSort = require('../modules/insertion_sort');

describe('Using insertion sort to sort an array', function() {
  it('input array should be sorted in order', function() {
    let numArr = [2, 4, 1, 6, 8, 5, 3, 7];

    expect(insertionSort(numArr)).to.deep.equal([1, 2, 3, 4, 5, 6, 7 , 8]);
  })
  it('input array with negative numbers should be sorted in order', function() {
    let numArr = [-2, 4, 1, 6, -8, 5, 3, 7];

    expect(insertionSort(numArr)).to.deep.equal([-8, -2, 1, 3, 4, 5, 6, 7]);
  })

})