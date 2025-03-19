FROM node:16.20.1
WORKDIR /Projects/be
COPY package.json .
RUN npm i
COPY . .
EXPOSE 4000
CMD [ "node", "index" ]