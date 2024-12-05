JQ=jq
INPUT_DIR=input
SOLUTIONS_DIR=src
DAY?=3
PART?=1

test:
	bash tests/day$(DAY).test.sh

real:
	$(JQ) -R -f $(SOLUTIONS_DIR)/day$(DAY)_$(PART).jq $(INPUT_DIR)/day$(DAY).txt

