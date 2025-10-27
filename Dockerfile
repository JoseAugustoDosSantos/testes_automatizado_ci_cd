FROM node:22.10-alpine

ENV ENV="env1"

WORKDIR /app

COPY . .

RUN ["npm", "install"]

ENTRYPOINT [ "npx", "codeceptjs", "run", "--verbose" ]

