#!/bin/bash

DEPENDENCIES=("protocol" "price-feed" "governance")

for DEP in ${DEPENDENCIES[*]}; do
    mkdir -p ./dist/dependencies/$DEP
    cp ./src/dependencies/$DEP/*.d.ts ./dist/dependencies/$DEP
done
 