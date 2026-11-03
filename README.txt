MON BUDGET — VERSION 10.1.1 — CORRECTIF AFFICHAGE DES DATES

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
- Carte « Compte au début du mois » encore plus compacte.
- Sous le total dépensé : montant restant (ou dépassement) par rapport au budget total hors dépenses exceptionnelles.
- Barre de progression du cycle de budget : jours écoulés et jours restants.
- Dates de début et de fin personnalisables POUR CHAQUE période directement depuis l'accueil. Le changement d'une date enregistre automatiquement la période : aucun bouton « Appliquer » n'est nécessaire. Les dates sont sauvegardées séparément pour chaque période. Les anciennes périodes non personnalisées conservent leurs dates par défaut (26 au 25).
- Navigation du bas avec icônes SVG adaptatives au thème (camembert, liste, tirelire, calendrier, engrenage), sans emoji. La marque en haut de l’accueil a été retirée pour gagner de la place.
- Cartes « compte au début », revenus, épargne, dépenses exceptionnelles et reste à vivre compactées pour mieux utiliser l’espace.
- Champs de dates de période redimensionnés et séparés pour éviter tout chevauchement.
- Les jours de début et de fin ne sont plus réglés dans les paramètres : chaque période se règle depuis la page Budget.
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


VERSION 10 — GESTION DES PÉRIODES
- Les dates de début et de fin ne sont plus affichées sur la page Budget : seule la période indicative y reste visible.
- Les dates se modifient dans Paramètres > Période du budget.
- Les flèches de cette section permettent de sélectionner la période à configurer.
- Chaque période conserve ses propres dates. Modifier une période ne modifie pas les autres.
- Le fichier logo.png (icône de l'application) n'a pas été redessiné dans cette version. L'icône engrenage de la navigation reste une icône SVG intégrée à index.html.

V11 - Correctif des thèmes : sélectionner un thème prédéfini réinitialise les couleurs personnalisées précédentes et affiche immédiatement la palette choisie. Les couleurs personnalisées peuvent ensuite être réglées et enregistrées via Apparence.
