export function day03_1(input: string): number {
  const regexpSize = /mul\(([0-9]+),([0-9]+)\)/g;
  const matches = [...input.matchAll(regexpSize)];
  return matches.map(match => [Number(match[1]), Number(match[2])]).reduce((acc, [a, b]) => acc + a * b, 0);
}

export function day03_2(input: string): number {
  return day03_1(input.replace(/\n/g, '').replace(/don't\(\).*?do\(\)/g, ''));
}
