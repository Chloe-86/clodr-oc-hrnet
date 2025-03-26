## HRNet

Ce projet est une application simple de gestion des employés, construite avec React et Vite. Elle vous permet d'ajouter de nouveaux employés et de consulter une liste des employés existants.

### Fonctionnalités

-   Ajouter de nouveaux employés avec des détails tels que le nom, la date de naissance, le département, l'adresse, etc.
-   Consulter une liste de tous les employés sous forme de tableau.
-   Rechercher et filtrer les employés selon divers critères.

### Technologies Utilisées

-   React
-   Vite
-   Material UI
-   Redux
-   DOMPurify

### Démarrage

1.  Cloner le dépôt :

git clone https://github.com/Chloe-86/clodr-oc-hrnet.git


2.  Naviguer vers le répertoire du projet :

cd clodr-oc-hrnet

3. Passer à la branche `redux` :

git checkout redux

4.  Installer les dépendances :

npm install


5.  Démarrer le serveur de développement :

npm run dev


6.  Ouvrez votre navigateur et accédez à `http://localhost:5173` pour visualiser l'application.

### Structure du Projet

-   `src/` : Contient le code source principal de l'application.
-   `components/` : Composants React.
-   `redux/` : Store persistant et reducer Redux .
-   `data/` : contient la liste des états pour le formulaire.
-   `pages/` : Les pages pour créer un employée et voir les employées existants.
-   `router/` : Pour la navigation entre les pages.
-   `App.jsx` : Composant principal de l'application.
-   `main.jsx` : Point d'entrée de l'application.
-   `index.html` : Fichier HTML principal.


### Licence

Ce projet est sous licence MIT.
