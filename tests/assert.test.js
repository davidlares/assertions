const assert = require('assert')

describe('Assert Library', () => {
  it('assert() demo', () => {
    assert(100 > 70, 'Expected value is not greater than received value')
  })
  // If you objects or their child objects are not equal, an error is thrown
  it('deepEqual() demo', () => {
    let x = {a: {n: 0}}
    let y = {a: {n: 0}}
    let z = {a: {n: 0}}
    assert.deepEqual(x,y)
    assert.deepEqual(x,z)
  })
  // if two values are not equal, and error will thrown
  it('equal() demo', () => {
    assert.equal(50,50)
    assert.equal(50,'50')
  })
})
