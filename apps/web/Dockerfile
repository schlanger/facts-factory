FROM node:24-alpine

WORKDIR /usr/src/app

# Copier les fichiers de configuration
COPY package*.json ./
COPY tsconfig.json ./
COPY tsconfig.app.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./
COPY index.html ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY src ./src
COPY public ./public

# Exposer le port
EXPOSE 5173

# Commande de démarrage en développement avec Vite
CMD ["npm", "run", "build", "--", "--host", "0.0.0.0"]
