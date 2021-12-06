FROM node:16.13.1

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . ./

RUN yarn build

EXPOSE 5000

CMD [ "yarn", "start", "--port", "5000" ]
