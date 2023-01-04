FROM node:16
WORKDIR /dist
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]
