
FROM node:16.15.1

ENV NODE_ENV=production

WORKDIR /

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

CMD ["node", "./bin/www"]

EXPOSE 3050