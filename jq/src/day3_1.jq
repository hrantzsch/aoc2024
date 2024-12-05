[
  ., inputs
  | match("mul\\((\\d+),(\\d+)\\)"; "g").captures
  | (.[0].string|tonumber) * (.[1].string|tonumber)
]
| add

