FROM node:lts-alpine 

WORKDIR /api

COPY . .
#^copy from my api directory to the docker /api dir
RUN npm ci

EXPOSE 8088
#^port that we use to access api docker side

ENTRYPOINT [ "node", "dist/src/server.js"]