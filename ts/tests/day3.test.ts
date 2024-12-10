import { day03_1, day03_2 } from '../src/day03';

test('Day 3: Part 1', () => {
  const input = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"
  expect(day03_1(input)).toBe(161);
});


test('Day 3: Part 2', () => {
  const input = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"
  expect(day03_2(input)).toBe(48);
});
