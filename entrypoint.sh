#!/bin/bash

npm install \
    && npm install -g ts-node
    # && npx prisma generate \
    # && npx prisma migrate dev --name init

ts-node ./src/index.ts

