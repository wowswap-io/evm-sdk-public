#!/bin/bash

DEPENDENCIES=("protocol" "price-feed" "governance")
mkdir -p ./src/dependencies

for DEP in ${DEPENDENCIES[*]}; do
    rm -rf ./src/dependencies/$DEP
    cp -r ../$DEP/types ./src/dependencies/$DEP
done
 