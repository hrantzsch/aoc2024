[., inputs | split("   ") | map(tonumber)]
| transpose
| .[0] as $left | .[1] as $right
| $left
| map(
  . as $i
  | $right
  | map(select(. == $i))
  | length * $i)
| add

