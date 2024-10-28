instructions d'exécution:

Avec le Dockerfile:

1. Ouvrir un terminal avec une machine ayant docker d'installer sinon installer docker
`https://www.docker.com/get-started/`
2. Executer la commande `docker build -t docker-web-app .` et laisser l'image se construire
3. Executer ensuite la commande `docker run -p 3000:3000 docker-web-app `
4. Ouvrir un navigateur et entrer `http://localhost:3000/` dans al barre de recherche

OU

Avec docker-compose:

1. Ouvrir un terminal avec une machine ayant docker d'installer sinon installer docker
`https://www.docker.com/get-started/`
2. Executer la commande `docker compose up -d` et laisser l'image et le conteneur se construire
3. Ouvrir un navigateur et entrer `http://localhost:3000/` dans al barre de recherche