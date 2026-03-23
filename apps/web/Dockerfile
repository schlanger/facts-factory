# --- ÉTAPE 1 : BUILD ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copie des fichiers de config pour l'install
COPY apps/web/package*.json ./
RUN npm install

# Copie du reste du code et build
COPY apps/web/ ./
RUN npm run build

# --- ÉTAPE 2 : PRODUCTION (SERVEUR) ---
FROM nginx:alpine

# On copie le dossier 'dist' généré à l'étape précédente vers le dossier Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Optionnel : Copier une config Nginx personnalisée si besoin
# COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]