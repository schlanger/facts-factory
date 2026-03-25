# Utilisation d'une version récente et légère de Node.js (Alpine Linux)
FROM node:24-alpine

# Définition du répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Création forcée d'un répertoire spécifique (souvent pour des logs ou du cache)
RUN mkdir -p apps/api/.apps/

# --- INSTALLATION DES DÉPENDANCES ---
# On copie d'abord les fichiers de config pour optimiser le cache Docker
COPY apps/api/package*.json ./
COPY apps/api/tsconfig.json ./
COPY apps/api/nodemon.json ./

# Installation des modules Node.js
RUN npm install

# --- COPIE DU CODE ---
# On copie le dossier source (les fichiers .ts ou .js)
COPY apps/api/src ./src

# On informe Docker que le conteneur utilise le port 3000
EXPOSE 3000

# Lancement du serveur en mode "dev" (avec auto-reload via nodemon)
CMD ["npm", "run", "dev"]