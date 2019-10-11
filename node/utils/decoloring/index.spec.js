import decoloring from './index'

test('[255, 255, 255] should use #000', () => {
  expect(decoloring([255, 255, 255])).toBe('#000');
})

test('[0, 0, 0] should use #fff', () => {
  expect(decoloring([0, 0, 0])).toBe('#fff');
})


test('[255, 0, 0] should use #fff', () => {
  expect(decoloring([0, 0, 0])).toBe('#fff');
})
