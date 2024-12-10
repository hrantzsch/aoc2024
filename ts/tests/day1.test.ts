import { day01_1, day01_2 } from '../src/day01';

test('Day 1: Part 1', () => {
  const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
  expect(day01_1(input)).toBe(11);
});

test('Day 1: Part 2', () => {
  const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
  expect(day01_2(input)).toBe(31);
});
