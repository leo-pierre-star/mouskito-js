### Les <for> dans tes labels doivent être le même que les <id> de tes champs:
```
<label for="exampleInputEmail1">Nom</label>
<input type="text" class="form-control" id="nom" name="nom" aria-describedby="emailHelp">
```

# Cours...

### Explication jQuery, ce que c'est, l'utilisation et les limites sur des projets plus conséquents.

On refait la même chose que hier mais avec jQuery et on va un peu plus loin...

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


