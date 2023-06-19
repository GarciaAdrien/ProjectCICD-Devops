# Utilisez une image de base Node.js
FROM node:14

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers du projet dans le conteneur
COPY package*.json ./

# Installez les dépendances en spécifiant les versions des packages, en supprimant les listes apt-get et en évitant les paquets recommandés
RUN apt-get update && \
    apt-get install -y --no-install-recommends <package1>=<version1> <package2>=<version2> && \
    rm -rf /var/lib/apt/lists/*

# Copiez le reste du code source de l'application
COPY . .

# Exposez le port sur lequel votre application écoute
EXPOSE 8080

# Commande de démarrage de l'application
CMD ["node", "app.js"]
