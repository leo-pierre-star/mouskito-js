### Les <for> dans tes labels doivent être le même que les <id> de tes champs:
```
<label for="exampleInputEmail1">Nom</label>
<input type="text" class="form-control" id="nom" name="nom" aria-describedby="emailHelp">
```

# Cours...

### Explication jQuery, ce que c'est, l'utilisation et les limites sur des projets plus conséquents.
Historiquement le javascript est interprété par les navigateurs via leurs propre moteur d'interprétation. Le problème est que chacun utilise des fonctions propre étant donné que le js n'est pas standardisé correctement.
jQuery viens résoudre 2 problèmes:
1. la syntaxe trop verbeux du javascript 
2. la compatibilité du code javascript sur les différents navigateurs. cette dernière raison est la raison principale de l'utilisation de jquery et aussi c'est ce qui l'a rendu populaire

Aujourd'hui ce problème de compatibilité n'est plus vraiment d'actualité car les navigateurs que ce soit sur pc ou mobile utilise les standard de ES5 et bientôt l'ES6. Mais le jQuery reste toujours très présent sur les applications ancienne ou les applications ou il n'y a pas de grand besoin de javascript.

Pour aujourd'hui nous allons refaire la même chose que hier mais avec la librairie jQuery...

Je ne supprime rien ou ne modifie pas l'existant mais je vais plutôt refaire les même choses avec en renomant les fichiers xxxx.jquery.(html|js)

Ajout de jquery via le CDN de jquery
on créer un fichier js/app.jquery.js

on test si jquery est bien chargé avec :
```
console.info(jQuery.fn.jquery);
```

On remplace le premier eventlistener de keypress à keyup car onkeypress la valeur n'existe pas encore dans le champ.
On reécrit l'évènement en mode jquery


On remplace la fonction vérification avec un évènement onSubmit de jquery sans toucher au HTML

#### La branche les-evenements-jquery contiens exactement le même contenu que précédemment avec la syntaxe jQuery

### Branch sum_elements-jquery
j'ai rajouté un id sur la balise form du 2ème formulaire pour pouvoir le sélectionner

