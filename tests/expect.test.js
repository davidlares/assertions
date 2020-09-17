// Expect - comes with Jest by default

describe('Expect assertion Library', () => {
  // to be methods
  it('toBe() demo', () => {
    expect(2 + 2).toBe(4)
  })
  // to equal method
  it('toEqual demo', () => {
    const data = {one: 1}
    data['two'] = 2
    expect(data).toEqual({one: 1, two: 2})
  })
  // boolean check
  it('truthiness', () => {
    const z = 0
    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
  })
  // toContain
  it('toContain demo', () => {
    const shoppingList = ['beer', 'whiskey']
    expect(shoppingList).toContain('beer')
  })
  // toMatch demo
  it('toMatch Demo', () => {
    expect('David').toMatch(/Dav/)
  })
})
