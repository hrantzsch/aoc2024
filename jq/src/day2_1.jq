[
  ., inputs | split(" ") | map(tonumber)
  | .[:-1] as $curr | .[1:] as $next
  | [$curr, $next] | transpose
  | map(.[0] - .[1])
  | if (all(-3 <= . and . < 0) or all(0 < . and . <= 3))
    then 1 else 0 end
]
| add
