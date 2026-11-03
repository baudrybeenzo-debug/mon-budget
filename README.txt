MON BUDGET — VERSION 13 — VERSEMENTS D’ÉPARGNE ET HISTORIQUE MENSUEL

INSTALLATION / MISE À JOUR SUR GITHUB PAGES
1. Exporter une sauvegarde JSON depuis Paramètres > Sauvegarde des données.
2. Décompresser l’archive.
3. Importer les 6 fichiers à la racine du dépôt GitHub Pages en remplaçant les versions précédentes :
   - index.html
   - app.js
   - manifest.json
   - sw.js
   - logo.png
   - README.txt
4. Valider avec « Commit changes ».
5. Attendre quelques minutes, puis fermer complètement et rouvrir Mon Budget sur Safari/iPhone si l’ancienne version reste affichée.

NOUVEAUTÉS DE LA VERSION 13
- Dans l’onglet Épargne, bouton « Ajouter un versement ».
- Choix du compte destinataire, du montant et de la date du versement.
- Le versement augmente automatiquement le solde du compte choisi.
- Le versement apparaît dans la bulle Épargne de la page Budget s’il appartient à la période budgétaire affichée.
- Le reste à vivre tient compte du versement : il est soustrait du disponible de la période.
- Historique des versements regroupé par période budgétaire, avec détail du compte, de la date et du montant.
- Possibilité de supprimer un versement : le montant est alors retiré du solde du compte correspondant.
- La suppression d’un compte demande confirmation et supprime également son historique de versements associé.

FONCTIONNEMENT ET DONNÉES
- Les versements sont enregistrés dans les données locales de l’application et inclus dans l’export JSON.
- Les soldes des comptes sont des soldes courants. Les versements augmentent ces soldes ; les opérations de suppression de versement les diminuent.
- Les soldes initiaux saisis lors de la création/modification d’un compte ne créent pas rétroactivement de mouvements dans l’historique.
- Les données restent stockées localement sur chaque appareil et ne se synchronisent pas automatiquement entre utilisateurs.
- Exporter régulièrement une sauvegarde JSON.
- Mon Budget est une PWA (application web progressive), pas une application iOS native.
