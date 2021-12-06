FROM node:16.13.1

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN npm install -g yarn

RUN yarn install --frozen-lockfile

COPY . ./

RUN yarn build

CMD [ "yarn", "start" ]
