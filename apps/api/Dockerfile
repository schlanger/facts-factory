FROM node:24-alpine

WORKDIR /usr/src/app

# Copier les fichiers de configuration
COPY package*.json ./
COPY tsconfig.json ./
COPY nodemon.json ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY src ./src

# Exposer le port
EXPOSE 3000

# Commande de démarrage en développement
CMD ["npm", "run", "build"]
