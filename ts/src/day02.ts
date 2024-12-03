function readInput(input: string): number[][] {
  return input
    .trimEnd()
    .split("\n")
    .map(line => line.split(" ").map(Number))
}

function isSafe(level: number[]): boolean {
  var asc = level[0] < level[1];
  for (var i = 1; i < level.length; i++) {
    var diff = Math.abs(level[i] - level[i - 1]);
    if (1 > diff || diff > 3) { return false };
    if (asc != level[i - 1] < level[i]) { return false };
  }
  return true;
}

function dampen(level: number[]): number[][] {
  const dampened: number[][] = [level];
  for (var i = 0; i < level.length; i++) {
    const copy = [...level];
    copy.splice(i, 1);
    dampened.push(copy);
  }
  return dampened;
}

export function day02_1(input: string): number {
  return readInput(input).filter(isSafe).length
}

export function day02_2(input: string): number {
  return readInput(input).filter(level => dampen(level).some(isSafe)).length
}
