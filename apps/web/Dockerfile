FROM node:24-alpine

WORKDIR /usr/src/app

# Copy package.json and configuration files
COPY apps/web/package*.json ./
COPY apps/web/tsconfig.json ./
COPY apps/web/tsconfig.app.json ./
COPY apps/web/tsconfig.node.json ./
COPY apps/web/vite.config.ts ./
COPY apps/web/index.html ./

RUN npm install

# Copy web source code
COPY apps/web/src ./src
COPY apps/web/public ./public

# Expose web port
EXPOSE 5173

# Start the application in development mode
CMD ["npm", "run", "build", "--", "--host", "0.0.0.0"]