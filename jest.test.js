test('test common matcher', ()=>{
  expect(2 + 2).toBe(4)
  expect(3 + 3).toBe(6)
})

test('test true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('test numnber', () => {
  expect(4).toBeGreaterThan(3)
})

test('test object', () => {
  expect({ name: 'xam' }).toEqual({ name: 'xam' })
})
