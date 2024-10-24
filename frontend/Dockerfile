FROM node:lts-alpine 
# ^uses node (as in npm) and long term support alpine(alpine being a lightweight node distribution)

WORKDIR /app

COPY . .
#^copy from my frontend directory to the docker /app dir
RUN npm ci

EXPOSE 3030
#^port that we use to access frontend docker side

ENTRYPOINT [ "npm", "run", "dev"]