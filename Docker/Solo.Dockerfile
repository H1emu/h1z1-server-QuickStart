FROM node:12 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
# Login server port
EXPOSE 1115/udp
# Zone server port
EXPOSE 1117/udp
# Start both of the servers
CMD [ "npm", "start" ]
