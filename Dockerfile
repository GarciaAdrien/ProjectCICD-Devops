# Utilisez une image de base Node.js version 14
FROM node:14

# Définissez le répertoire de travail dans le conteneur comme /app
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installez les dépendances npm
RUN npm install

# Copiez le reste du code source de l'application dans le conteneur
COPY . .

# Mettez à jour les paquets du système et installez le package cowsay
RUN apt-get update && apt-get install -y cowsay

# Exposez le port 8081 pour l'application
EXPOSE 8081

# Définissez la commande par défaut pour démarrer le conteneur, en utilisant cowsay pour afficher "Hello, Docker!"
CMD ["cowsay", "Hello, Docker!"]
