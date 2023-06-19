# Utilisez une image de base Node.js
FROM node:14

# Copiez les fichiers du projet dans le conteneur
#COPY README.md ./

# Installez les dépendances avec npm
RUN npm install
WORKDIR "Scrutin TP2"
# Copiez le reste du code source de l'application
COPY . .

# Exposez le port sur lequel votre application écoute
EXPOSE 8080

# Commande de démarrage de l'application
CMD ["node", "app.js"]
