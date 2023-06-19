# Utilisez une image de base Node.js
FROM node:14

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Installez les dépendances avec npm
RUN npm install
# Copiez le reste du code source de l'application
COPY . .

# Exposez le port sur lequel votre application écoute
EXPOSE 8080

# Commande de démarrage de l'application
CMD ["node", "app.js"]
