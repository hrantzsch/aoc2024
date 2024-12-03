import { count } from "./utils";

function readLists(input: string): [Array<number>, Array<number>] {
  const lists = input
    .trimEnd()
    .split("\n")
    .map(line => line.split("  "))
    .map(l => l.map(Number));
  const left = lists.map(row => row[0]).sort();
  const right = lists.map(row => row[1]).sort();
  return [left, right]
}

export function day01_1(input: string): number {
  const [left, right] = readLists(input)
  return left.reduce((acc, curr, idx) => acc + Math.abs(curr - right[idx]), 0);
}

export function day01_2(input: string): number {
  const [left, right] = readLists(input)
  return left.reduce((acc, curr) => acc + count(right, curr) * curr, 0);
}
