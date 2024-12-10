import { day02_1, day02_2 } from '../src/day02';

test('Day 2: Part 1', () => {
  const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
  expect(day02_1(input)).toBe(2);
});

test('Day 2: Part 2', () => {
  const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
  expect(day02_2(input)).toBe(4);
});
