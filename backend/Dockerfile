FROM node:18.10.0-slim as BUILD

WORKDIR /usr/src/app



COPY package.json package-lock.json ./

COPY . .

RUN chmod +x /wait-for-it.sh
RUN npm install
RUN npm run build

FROM node:18.10.0-slim 

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/package.json package.json
COPY --from=build /usr/src/app/build ./build
COPY --from=build /usr/src/app/node_modules ./node_modules

EXPOSE 3000

ENTRYPOINT [ "/wait-for-it.sh", "postgres:5432", "--" ]


CMD [ "npm","run","start" ]
