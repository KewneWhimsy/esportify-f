# Étape 1: Utiliser une image de base officielle de Node.js
FROM node:20-alpine

# Étape 2: Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3: Copier package.json et package-lock.json
COPY package*.json ./

# Étape 4: Installer les dépendances
RUN npm install

# Étape 5: Copier le reste du projet dans le conteneur
COPY . .

# Étape 6: Construire le projet Astro
RUN npm run build

# Étape 7: Exposer le port 3000 pour accéder à l'application
EXPOSE 3000

# Étape 8: Commande pour démarrer le serveur de développement Astro
CMD ["npm", "run", "dev"]

