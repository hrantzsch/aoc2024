import { loadInput } from './utils';
import { day01_1, day01_2 } from './day01';
import { day02_1, day02_2 } from './day02';
import { day03_1, day03_2 } from './day03';


var input = loadInput(1);
console.log(day01_1(input));
console.log(day01_2(input));
input = loadInput(2);
console.log(day02_1(input));
console.log(day02_2(input));
input = loadInput(3);
console.log(day03_1(input));
console.log(day03_2(input));
