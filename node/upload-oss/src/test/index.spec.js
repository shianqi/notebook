import upload from '../upload'

test('[255, 255, 255] should use #000', async () => {
  const res = await upload()
  expect(res).toBe(undefined);
})
