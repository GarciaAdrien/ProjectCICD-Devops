Adrien Garcia
Clement Deborde
-----
La description pour le fichier de release que vous avez fourni est la suivante :
Ce fichier de release contient des workflows CI/CD pour le projet.
Le workflow CI/CD est déclenché lors d'un push sur la branche principale (main) ou selon une planification quotidienne.
Les étapes du workflow sont les suivantes :

1. Checkout : Récupère le dépôt GitHub.

2. Install Hadolint : Installe Hadolint pour effectuer des vérifications de conformité sur le fichier Dockerfile.

3. Build Image : Construit l'image Docker pour le projet et effectue un `npm install` pour installer les dépendances.

4. Start Docker Container : Lance un conteneur Docker à partir de l'image créée précédemment.

5. Check Container Status : Vérifie l'état du conteneur Docker.

6. Stop Execution : Arrête le conteneur Docker.

7. Check Container Status : Vérifie à nouveau l'état du conteneur Docker.

8. Login to Docker Hub : Se connecte au registre Docker en utilisant les informations d'identification fournies.

9. Push if on `main` : Pousse l'image Docker vers le registre Docker Hub si le push a été effectué sur la branche principale.

Ce workflow vise à automatiser le processus de construction, de test et de déploiement de l'application Docker.

Pour construire le conteneur Docker, vous pouvez suivre les étapes suivantes :

1. Clonez le dépôt sur une machine Ubuntu 22.

2. Assurez-vous que Docker est installé et en cours d'exécution.

3. Ouvrez un terminal et accédez au répertoire racine du projet.

4. Exécutez la commande suivante pour construire le conteneur :

   ```shell
   docker build -t captainissou42/docker_nodejs:latest .
   ```

   Remplacez `nom-du-conteneur` par le nom souhaité pour votre conteneur.

5. Exécutez le conteneur en utilisant la commande :

   ```shell
	docker run -d --name my-container -p 3000:3000 captainissou42/docker_nodejs:latest
   ```

   Assurez-vous de remplacer `nom-du-conteneur` par le nom réel de votre conteneur.

6. Accédez à l'adresse `http://localhost:8080/` pour accéder aux chemins de l'application

Ces instructions vous permettront de construire et d'exécuter le conteneur Docker localement pour votre projet.