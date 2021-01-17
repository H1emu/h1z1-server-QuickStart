FROM node:12 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
# Login server port
EXPOSE 1115/udp
CMD [ "npm","run","login-server" ]
