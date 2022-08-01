FROM node:14

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD [ "npm", "run" ]

EXPOSE 3000