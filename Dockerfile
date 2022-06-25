FROM node:16.13.1

WORKDIR /usr/src/app

# Do not forget to add API_KEY variable
ENV PORT=3000 NODE_ENV=production LOG_LEVEL=info HOSTNAME=0.0.0.0

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start"]
