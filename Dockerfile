FROM iwashi/docker-node8-mysql-client

RUN useradd --user-group --create-home --shell /bin/false dock
WORKDIR /app
COPY package.json /app/package.json

COPY server.js /app/server.js
RUN npm install --production
EXPOSE 8080
USER dock
CMD ["npm", "start"]
