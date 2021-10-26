import { add } from '../helpers';

test("add returns the proper sum", async () => {
  expect(add(1, 2)).toBe(3);
});
