FROM node:12 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
# Zone server port
EXPOSE 1117/udp
CMD [ "npm","run","zone-server" ]
