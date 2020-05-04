# FROM node:12

# WORKDIR /app

# # install app dependencies
# COPY package.json ./app
# COPY package-lock.json ./app
# RUN npm install

# # add app
# COPY . ./
# ARG REACT_APP_API_BASE_URL
# ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}

# RUN npm run build

# start app
#CMD ["npm", "start"]

FROM nginx:1.17.0-alpine

# Copy the react build from Stage 1
#ADD ./build /var/www
ADD ./build /usr/share/nginx/html
# Copy our custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the Docker host, so we can access it
# from the outside.
EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
