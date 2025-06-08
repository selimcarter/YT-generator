# YT-generator

Ce projet est une page HTML permettant de générer des miniclip à partir d'un lien YouTube.

## Comment lancer la page

Ouvrir directement `index.html` avec le protocole `file://` peut empêcher le chargement du script (CORS).

Exécutez plutôt un petit serveur local dans ce dossier :

```bash
python3 -m http.server
```

Ensuite, rendez‑vous sur [http://localhost:8000/index.html](http://localhost:8000/index.html) dans votre navigateur.

La page devrait alors afficher correctement et les boutons seront cliquables.
