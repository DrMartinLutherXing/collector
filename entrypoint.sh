#!/bin/bash

npm install \
    && npm install -g ts-node \
    && npx prisma migrate dev --name init \
    && npx prisma generate

ts-node ./src/index.ts

