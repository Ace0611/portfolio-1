FROM node:slim
WORKDIR /website
COPY . /website/
RUN npm install
EXPOSE 3000
CMD node index.js
