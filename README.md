# Guide de Déploiement Local

Ce guide vous explique comment déployer l'application Esportify en local pour tester à la fois le frontend et le backend. L'application utilise Docker pour faciliter la configuration de l'environnement et le lancement des services nécessaires.

## Prérequis

Avant de commencer, assurez-vous que vous avez installé Docker (et Docker Compose si vous le souhaitez) sur votre machine. Vous pouvez télécharger Docker ici : [Docker](https://www.docker.com/get-started).

### Étape 1 : Cloner les deux dépôts

Clonez les deux dépôts GitHub nécessaires pour le projet.

```bash
git clone https://github.com/KewneWhimsy/esportify-f.git
git clone https://github.com/KewneWhimsy/esportify-b.git

```

- **esportify-f** : Ce dépôt contient le frontend du projet, utilisant Astro, Tailwind CSS, Alpine.js, et Htmx.
- **esportify-b** : Ce dépôt contient le backend avec une API en Node.js et une base de données PostgreSQL, ainsi qu'une base de données MongoDB sur MongoDB Atlas.

### Étape 2 : Lancer le Backend

### Utiliser le `Dockerfile` dans le dépôt `esportify-b`

Dans le dépôt `esportify-b`, vous trouverez un `Dockerfile` permettant de construire et démarrer l'application backend.

1. Accédez au répertoire du backend (`esportify-b`).
    
    ```bash
    cd esportify-b
    
    ```
    
2. Construisez et lancez le conteneur Docker pour démarrer le backend.
    
    ```bash
    docker build -t esportify-backend .
    docker run -p 3000:3000 esportify-backend
    
    ```
    

Cela démarre le backend sur le port 3000 et vous pourrez communiquer avec lui depuis le frontend.

Le `Dockerfile` du backend fonctionne comme suit :

```
# Utilise l'image officielle de Node.js
FROM node:20

# Crée un dossier pour ton application
WORKDIR /app

# Copie les fichiers de package et installe les dépendances
COPY package*.json ./
RUN npm install

# Copie le reste du code de l’application
COPY . .

# Expose le port (par défaut pour Express et WebSocket)
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "index.js"]

```

### Étape 3 : Lancer le Frontend

Le frontend est basé sur **Astro** et utilise Tailwind pour le design, Alpine.js pour les interactions et Htmx pour le dynamisme. Il est conçu pour être déployé sur GitHub Pages, mais vous pouvez également le tester en local facilement car il génère du HTML statique au build.

### 1. Installer les dépendances

Allez dans le répertoire du frontend (`esportify-f`) et installez les dépendances nécessaires.

```bash
cd esportify-f
npm install

```

### 2. Construire le projet et démarrer le serveur

Le `Dockerfile` du frontend construit le projet Astro et démarre un serveur de développement.

1. Construisez et lancez le conteneur Docker pour démarrer le frontend.
    
    ```bash
    docker build -t esportify-frontend .
    docker run -p 3000:3000 esportify-frontend
    
    ```
    

Le `Dockerfile` du frontend fonctionne comme suit :

```
# Étape 1: Utiliser une image de base officielle de Node.js
FROM node:20

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

```

Cela démarrera le frontend sur le port 3000 et vous pourrez y accéder via [http://localhost:3000](http://localhost:3000/).

### Étape 4 : Tester les interactions

Une fois le frontend et le backend lancés, vous pourrez tester l'application dans son ensemble. Le frontend communique avec le backend via des API RESTful. Vous pouvez tester la navigation et les fonctionnalités interactives, notamment les interactions dynamiques fournies par Alpine.js et Htmx.

## Notes supplémentaires

- Le backend est hébergé sur [Render](https://render.com/) et peut avoir un délai de démarrage de 50 secondes en cas d'inactivité.
- La base de données PostgreSQL est également hébergée sur Render.
- La base de données MongoDB est hébergée sur MongoDB Atlas.

---

### Explications supplémentaires

- **Docker Compose** : Si tu utilises Docker Compose dans le projet, tu peux simplifier la gestion des différents services (frontend, backend, bases de données) avec un fichier `docker-compose.yml` dans chaque dépôt, mais si tu souhaites le garder simple, tu peux te contenter de `docker build` et `docker run` directement dans les répertoires respectifs.
- **Production en ligne** : Si tu choisis de tester en production, le backend sur Render sera accessible via son URL publique, ce qui peut parfois entraîner un temps d'attente lors du démarrage à froid.

Cela te permettra de configurer un environnement local rapidement et de tester l'intégration entre le frontend et le backend.

---

Ce `README.md` devrait maintenant être cohérent avec les `Dockerfile` que tu m'as donnés et faciliter le déploiement de ton application en local.

Merci pour les précisions ! Voici la version mise à jour du `README.md`, en prenant en compte les `Dockerfile` fournis pour le backend et le frontend :

---

# Guide de Déploiement Local

Ce guide vous explique comment déployer l'application en local pour tester à la fois le frontend et le backend. L'application utilise Docker pour faciliter la configuration de l'environnement et le lancement des services nécessaires.

## Prérequis

Avant de commencer, assurez-vous que vous avez installé Docker et Docker Compose sur votre machine. Vous pouvez télécharger Docker ici : [Docker](https://www.docker.com/get-started).

### Étape 1 : Cloner les deux dépôts

Clonez les deux dépôts GitHub nécessaires pour le projet.

```bash
git clone https://github.com/KewneWhimsy/esportify-f.git
git clone https://github.com/KewneWhimsy/esportify-b.git

```

- **esportify-f** : Ce dépôt contient le frontend du projet, utilisant Astro, Tailwind CSS, Alpine.js, et Htmx.
- **esportify-b** : Ce dépôt contient le backend avec une API en Node.js et une base de données PostgreSQL, ainsi qu'une base de données MongoDB sur MongoDB Atlas.

### Étape 2 : Lancer le Backend

### Utiliser le `Dockerfile` dans le dépôt `esportify-b`

Dans le dépôt `esportify-b`, vous trouverez un `Dockerfile` permettant de construire et démarrer l'application backend.

1. Accédez au répertoire du backend (`esportify-b`).
    
    ```bash
    cd esportify-b
    
    ```
    
2. Construisez et lancez le conteneur Docker pour démarrer le backend.
    
    ```bash
    docker build -t esportify-backend .
    docker run -p 3000:3000 esportify-backend
    
    ```
    

Cela démarre le backend sur le port 3000 et vous pourrez communiquer avec lui depuis le frontend.

Le `Dockerfile` du backend fonctionne comme suit :

```
# Utilise l'image officielle de Node.js
FROM node:20

# Crée un dossier pour ton application
WORKDIR /app

# Copie les fichiers de package et installe les dépendances
COPY package*.json ./
RUN npm install

# Copie le reste du code de l’application
COPY . .

# Expose le port (par défaut pour Express et WebSocket)
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "index.js"]

```

### Étape 3 : Lancer le Frontend

Le frontend est basé sur **Astro** et utilise Tailwind pour le design, Alpine.js pour les interactions et Htmx pour le dynamisme. Il est conçu pour être déployé sur GitHub Pages, mais vous pouvez également le tester en local.

### 1. Installer les dépendances

Allez dans le répertoire du frontend (`esportify-f`) et installez les dépendances nécessaires.

```bash
cd esportify-f
npm install

```

### 2. Construire le projet et démarrer le serveur

Le `Dockerfile` du frontend construit le projet Astro et démarre un serveur de développement.

1. Construisez et lancez le conteneur Docker pour démarrer le frontend.
    
    ```bash
    docker build -t esportify-frontend .
    docker run -p 3000:3000 esportify-frontend
    
    ```
    

Le `Dockerfile` du frontend fonctionne comme suit :

```
# Étape 1: Utiliser une image de base officielle de Node.js
FROM node:20

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

```

Cela démarrera le frontend sur le port 3000 et vous pourrez y accéder via [http://localhost:3000](http://localhost:3000/).

### Étape 4 : Tester les interactions

Une fois le frontend et le backend lancés, vous pourrez tester l'application dans son ensemble. Le frontend communique avec le backend via des API RESTful. Vous pouvez tester la navigation et les fonctionnalités interactives, notamment les interactions dynamiques fournies par Alpine.js et Htmx.

## Notes supplémentaires

- Le backend est hébergé sur [Render](https://render.com/) et peut avoir un délai de démarrage de 50 secondes en cas d'inactivité.
- La base de données PostgreSQL est également hébergée sur Render.
- La base de données MongoDB est hébergée sur MongoDB Atlas.