[., inputs | split("   ") | map(tonumber)]
| transpose | map(sort)

| .[0] as $left | .[1] as $right
| [range(0; $left | length)] | map(. as $i |
    $left[$i] - $right[$i] | abs)

| add
