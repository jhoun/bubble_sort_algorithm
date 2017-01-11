const chai = require('chai')
const expect = chai.expect;
const should = chai.should;
const mergeSort = require('../modules/merge_sort');

describe('Using merge to sort an array', function() {
  it('input array should be sorted in order', function() {
    let numArr = [2, 4, 1, 6, 8, 5, 3, 7];

    expect(mergeSort(numArr)).to.deep.equal([1, 2, 3, 4, 5, 6, 7 , 8]);
  })

})