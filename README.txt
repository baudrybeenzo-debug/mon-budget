MON BUDGET — VERSION 8

INSTALLATION / MISE À JOUR SUR GITHUB PAGES
1. Décompresser l'archive.
2. Importer les 6 fichiers à la racine du dépôt GitHub Pages en remplaçant les versions précédentes :
   - index.html
   - app.js
   - manifest.json
   - sw.js
   - logo.png
   - README.txt
3. Valider avec « Commit changes ».
4. Attendre quelques minutes, puis rouvrir Mon Budget dans Safari. Si l'ancienne interface reste affichée, fermer complètement l'application puis la relancer.

NOUVEAUTÉS DE CETTE VERSION
- Carte « Compte au début du mois » moins large.
- Sous le total dépensé : montant restant (ou dépassement) par rapport au budget total hors dépenses exceptionnelles.
- Barre de progression du cycle de budget : jours écoulés et jours restants.
- Dates de début et de fin personnalisables POUR CHAQUE période directement depuis l'accueil. Les dates sont sauvegardées séparément pour chaque période. Les anciennes périodes non personnalisées utilisent les jours par défaut des paramètres.
- Navigation du bas avec icônes SVG adaptatives au thème (camembert, liste, tirelire, calendrier, engrenage), sans emoji.
- Personnalisation des couleurs du fond, de la couleur principale et de l'accent.
- Réorganisation des catégories dans les paramètres avec les flèches haut/bas.
- Clavier numérique/decimal demandé pour les champs de saisie de nombres, y compris les formulaires ajoutés dynamiquement.
- Photo par dépense non ajoutée : c'est une fonction gadget qui alourdirait les sauvegardes JSON et le stockage local.

FONCTIONNEMENT ET DONNÉES
- Application web progressive (PWA), pas une application iOS native.
- Les données sont stockées localement sur l'appareil (localStorage). Elles ne se synchronisent pas automatiquement entre appareils ou utilisateurs.
- Exporter régulièrement une sauvegarde JSON depuis Paramètres > Sauvegarde des données.
- L'import d'un JSON remplace les données présentes sur l'appareil.
- Les dates réelles des transactions restent inchangées. La période de budget à laquelle elles sont rattachées dépend des dates de début et de fin enregistrées pour chaque cycle.
- L'application fonctionne hors ligne après son premier chargement et la mise en cache des fichiers.
