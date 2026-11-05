MON BUDGET — VERSION 22
=======================

À QUOI SERT L’APPLICATION ?
Mon Budget permet de suivre tes dépenses, tes entrées d’argent, tes comptes
d’épargne et tes objectifs. Les données sont enregistrées dans le navigateur
de l’appareil utilisé.

LES CINQ ESPACES
1. Budget : aperçu de la période, solde disponible, revenus comptabilisés,
   dépenses et progression des budgets par catégorie.
2. Dépenses : historique des opérations. Les dépenses et les ajouts d’argent
   sont présentés séparément.
3. Épargne : comptes, versements et objectifs d’épargne.
4. Calendrier : visualisation des dépenses par date.
5. Paramètres : dates de période, solde initial, catégories, récurrences,
   apparence et sauvegarde.

AJOUTER UNE OPÉRATION
Appuie sur le bouton + en bas à droite.
- Dépense : choisis une catégorie, indique le montant, la description et la date.
  La case « Dépense exceptionnelle » sert à distinguer une dépense inhabituelle
  du budget courant.
- Ajout d’argent : indique les détails de l’entrée. La case « Afficher dans les
  revenus » décide uniquement si le montant apparaît dans l’indicateur Revenus
  de la page Budget. Une entrée non cochée augmente quand même le solde calculé,
  mais n’est pas comptée dans cet indicateur.
- Si une catégorie manque, crée-la depuis le formulaire. Tu reviens ensuite
  au même formulaire, avec les informations déjà saisies.

PÉRIODE ET SOLDE INITIAL
Dans Paramètres, sélectionne la période à modifier, puis indique ses dates
et le solde réellement présent sur ton compte au premier jour. Chaque période
conserve ses propres dates et son propre solde initial.

CATÉGORIES ET BUDGETS
Les catégories de dépenses peuvent avoir un budget mensuel. Les catégories
de revenus servent à classer les entrées d’argent. Choisis des noms simples
pour retrouver facilement tes opérations.

ÉPARGNE
Les comptes d’épargne et les versements permettent de suivre les montants
mis de côté. Les transferts entre tes comptes ne doivent pas être confondus
avec un revenu ou une dépense de consommation.

SAUVEGARDE ET TRANSFERT
Dans Paramètres, utilise « Exporter JSON » pour créer une sauvegarde complète.
Pour restaurer ou transférer les données, utilise « Importer JSON ».
Attention : l’import remplace les données actuellement présentes.
Fais toujours une sauvegarde avant un import.

UTILISATION SUR PLUSIEURS APPAREILS
Les données sont stockées localement dans le navigateur. Elles ne se
synchronisent pas automatiquement entre iPhone, iPad et ordinateur.
Pour transférer les données, exporte un JSON depuis le premier appareil,
puis importe-le sur le second.

INSTALLATION / MISE À JOUR GITHUB PAGES
1. Décompresse l’archive.
2. Remplace les six fichiers à la racine du dépôt GitHub :
   index.html, app.js, sw.js, manifest.json, logo.png et README.txt.
3. Valide avec « Commit changes ».
4. Attends la publication GitHub Pages puis recharge l’application.

VERSION 22
- Formulaire + contenu dans la largeur de l’écran, sans défilement horizontal
  involontaire sur mobile.
- Texte d’aide simplifié et raccourci.
- Cache du service worker renouvelé.

IMPORTANT
Avant toute mise à jour ou import, conserve une sauvegarde JSON récente.
Ne supprime pas les données du navigateur si tu souhaites garder l’historique.
