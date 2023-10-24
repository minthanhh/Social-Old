FROM node AS BUILD_IMAGE

WORKDIR /app/social-network

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM node AS PRODUCTION_IMAGE

WORKDIR /app/social-network

COPY --from=BUILD_IMAGE /app/social-network/dist/ /app/social-network/dist/

EXPOSE 8080

COPY package.json .

COPY vite.config.ts .

RUN npm install typescript

EXPOSE 8080

CMD [ "npm", "run", "preview" ]