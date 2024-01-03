# Start your image with a node base image
FROM node:18-alpine

# The /src directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./
COPY .env ./

# Copy local directories to the current local directory of our docker image (/app)
COPY ./src ./src
COPY ./prisma ./prisma
COPY ./entrypoint.sh /entrypoint.sh
# COPY ./public ./public

RUN apk update && apk add bash \
    && chmod +x /entrypoint.sh

# Install node packages, install serve, build the app, and remove dependencies at the end
#RUN npm install \
#    && npm install -g ts-node \
#    && npx prisma migrate dev --name init \
#    && npx prisma generate
#    && npm install -g serve \
#    && npm run build \
#    && npx ts-node ./src/index.ts \
#    && rm -fr node_modules

# EXPOSE 3000

# Start the app using ts-node
# CMD [ "ts-node", "./src/index.ts" ]
