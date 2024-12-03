import { strict as assert } from 'assert';
import { day01_1, day01_2 } from '../src/day01';

function test01_1() {
  const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
  const expected = 11;
  const result = day01_1(input);
  assert.equal(result, expected);
}

function test01_2() {
  const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
  const expected = 31;
  const result = day01_2(input);
  assert.equal(result, expected);
}

test01_1();
test01_2();
console.log("All tests passed!")
