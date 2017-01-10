const chai = require('chai')
const expect = chai.expect;
const should = chai.should;
const quickSort = require('../modules/quick_sort');

describe('Using quick sort to sort an array', function() {
  it('input array should be sorted in order', function() {
    let numArr = [5, 1, 4, 2, 3, 6];

    expect(quickSort(numArr)).to.deep.equal([1, 2, 3, 4, 5, 6]);
  })

})