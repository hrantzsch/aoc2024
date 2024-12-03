import { strict as assert } from 'assert';
import { day02_1, day02_2 } from '../src/day02';

function test02_1() {
  const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
  const expected = 2;
  const result = day02_1(input);
  assert.equal(result, expected);
}

function test02_2() {
  const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
  const expected = 4;
  const result = day02_2(input);
  assert.equal(result, expected);
}

test02_1();
test02_2();
console.log("Day 2 tests passed!")
