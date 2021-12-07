# Architecture MVC

Nos projets Web vont être architecturés en utilisant le modèle MVC.

MVC induit que notre site Web est divisée en trois parties :

- M : les données
- V : les vues
- C : les controllers

Aujourd'hui nous ne connaissons que le V.

Il s'agit de gérer tout le côté visuel de notre application.

## Les views

Pour notre site Web, nous utilisons Express.

Express utilise une technologie appelée moteur de modèles pour envoyer du code HTML au client de nos visiteurs.

Pour le besoin de la formation, nous utilisons EJS qui est proche du code HTML. Il en existe d'autres sur le marché et notamment PUG (vu en spé DATA).

EJS nous permet de créer les pages HTML de manière dynamique. Quelque chose de dynamique est l'opposé de quelque chose de statique.

Quelque chose de statique, c'est quelque chose qui ne bouge pas.

## Le système de fichier

Nous avons au premier niveau :

- un fichier de démarrage : server.js
- un dossier node_modules : il contient les modules installés
- un dossier public : il contient les fichiers statiques (en libre service pour les visiteurs)
- un dossier app : il contient les fichiers de notre application Web

Dans notre dossier public:

- un dossier CSS qui contient nos fichiers css
- un dossier JS qui contient nos fichiers js (côté client)
- un dossier IMG qui contient nos fichiers png,jpg...
- ... tout fichier média par exemple, vidéos...

Dans notre dossier app :

- un fichier router.js
- un dossier views : il contient les fichiers .ejs qui représentent les modèles de pages
  - un sous-dossier partials : il contient les fichiers .ejs partagés par d'autres fichiers .ejs (par exemple, header/footer)

Pour venir compléter le MVC, d'autres dossiers viendront les compléter.

## res.render

Express nous met à disposition une méthode au travers de la réponse pour envoyer un code HTML qui est le résultat du mix entre un modèle de page et des données :

<img src="mix modele donnees.png" width="600px">

```js
res.render("nom_du_fichier_ejs") // on peut appeler la vue directement (pas besoin de l'extension)

res.render("nom_du_fichier_ejs",{
    // on peut passer différentes données via des paires clef/valeur
})

```

Il est possible de faire passer des données via les locals :

```js
res.locals.name = "toto"; // on peut nommer les clefs comme on le souhaite
res.locals.michel = "un truc";
res.locals.age = 25;
```

Les locals sont mises à disposition par Express dans la réponse, pour faire passer des données au fichier EJS.

A l'instant t, nous ne connaissons que le V de MVC, le routeur est donc la passerelle qui permet d'envoyer la bonne vue à la bonne URL.
Dans le futur, cela sera géré dans un controller (lettre C).
