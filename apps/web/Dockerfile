# --- ÉTAPE 1 : BUILD (Compilation de l'application) ---
# Utilisation de Node.js 20 sur Alpine pour minimiser la taille
FROM node:20-alpine AS builder

# Dossier de travail interne
WORKDIR /app

# On copie les fichiers de gestion des paquets
COPY apps/web/package*.json ./

# Installation des dépendances (sera mis en cache si package.json ne change pas)
RUN npm install

# Copie de l'intégralité du code source
COPY apps/web/ ./

# Génération des fichiers statiques (HTML/CSS/JS) dans le dossier /app/dist
RUN npm run build

# --- ÉTAPE 2 : PRODUCTION (Serveur final) ---
# On utilise un serveur web léger pour servir les fichiers
FROM nginx:alpine

# On récupère UNIQUEMENT les fichiers compilés de l'étape précédente
# On les place là où Nginx sait les lire pour les diffuser
COPY --from=builder /app/dist /usr/share/nginx/html

# Le conteneur communiquera sur le port 80
EXPOSE 80

# Lancement de Nginx au premier plan
CMD ["nginx", "-g", "daemon off;"]