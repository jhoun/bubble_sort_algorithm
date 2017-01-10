const request = require('supertest');
const chai = require('chai')
const app = require('../server');
const expect = chai.expect;
const should = chai.should;


// describe('POST /bubblesort', function() {
//   it('respond with redirecting to /bubblesort', function(done) {
//     request(app)
//       .post('/bubblesort')
//       .type('form')
//       .send({
//         "array": [5, 1, 4, 2, 8]
//       })
//       .end(function (err, res) {
//         if (err) {
//           throw new Error(err);
//         }
//         expect(res.header.location).to.equal('/bubblesort')

//         done()
//       });
//   })
// })