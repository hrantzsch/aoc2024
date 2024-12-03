import { strict as assert } from 'assert';
import { day01 } from '../src/day01';

function test01() {
  const input = `3   4
4   3
2   5
1   3
3   9
3   3`;
  const expected = 11;
  const result = day01(input);
  assert.equal(result, expected);
}

test01();
console.log("All tests passed!")
