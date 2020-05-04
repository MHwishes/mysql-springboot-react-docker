
FROM node:12
WORKDIR /app
COPY package.json ./app
COPY package-lock.json ./app
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.17.0-alpine

ADD ./build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
