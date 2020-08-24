FROM node

WORKDIR /client/dist/

COPY package.json .

RUN npm install

EXPOSE 4242

CMD [ "npm", "start" ]

COPY . .