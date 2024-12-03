export function day01(input: string): number {
  const lists = input
    .trimEnd()
    .split("\n")
    .map(line => line.split("  "))
    .map(l => l.map(Number));
  const left = lists.map(row => row[0]).sort();
  const right = lists.map(row => row[1]).sort();
  return left.reduce((acc, curr, idx) => acc + Math.abs(curr - right[idx]), 0);
}
