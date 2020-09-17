// Should - requires installation
const should = require('should')
const {sum} = require('../math')

describe('ShouldJS', () => {
  // check sum
  it('should return 4 the input number are 1 and 3', () => {
    sum(1,3).should.be.exactly(4)
    sum(1,3).should.be.exactly(4).and.be.a.Number
  })
  // start with demo
  it('startWith', () => {
    'foobar'.should.startWith('foo')
  })
  // above and greater than
  it('above and greaterThan demo', () => {
    const user = {age: 28}
    user.age.should.be.above(5)
    user.age.should.not.be.above(100)
    user.should.be.type('object')
    'test'.should.be.type('string')
  })
})
