 FROM node:24-alpine

WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY apps/api/package*.json ./
COPY apps/api/tsconfig.json ./
COPY apps/api/nodemon.json ./

RUN npm install

# Copy api source code
COPY apps/api/src ./src

# Expose API port
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]