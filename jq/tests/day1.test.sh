example=$(cat<<EOF
3   4
4   3
2   5
1   3
3   9
3   3
EOF
)

jq -R -c -f src/day1_1.jq <<< "$example"
jq -R -c -f src/day1_2.jq <<< "$example"
