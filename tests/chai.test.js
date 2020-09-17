// Chai - requires installation
const assert = require('chai').assert
const expect = require('chai').expect
const should = require('chai').should()

describe('chai assertion library', () => {
  // asserting with Chai
  it('assert with chai demo', () => {
    let foo = 'bar'
    let beverages = {tea: ['chai', 'matcha', 'oolong']}
    assert.typeOf(foo, 'string')
    assert.typeOf(foo, 'string', 'foo is a string')
    assert.equal(foo, 'bar', 'foo equal `bar`')
    assert.lengthOf(foo, 3, 'foo`s values has a length of 3')
    assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea')
  })
  // expecting with Chai
  it('expect with chai', () => {
    let foo = 'bar'
    let beverages = {tea: ['chai', 'matcha', 'oolong']}
    expect(foo).to.be.a('string');
    expect(foo).to.equal('bar');
    expect(foo).to.have.lengthOf(3);
    expect(beverages).to.have.property('tea').with.lengthOf(3);
  })
  // should with Chai
  it('should with chai.js', () => {
    let foo = 'bar'
    let beverages = { tea: ['chai', 'matcha', 'oolong'] };
    foo.should.be.a('string');
    foo.should.equal('bar');
    foo.should.have.lengthOf(3);
    beverages.should.have.property('tea').with.lengthOf(3);
  });
})
