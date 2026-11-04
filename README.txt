MON BUDGET — VERSION 15
=======================

À QUOI SERT L’APPLICATION ?
---------------------------
Mon Budget est une petite application web progressive (PWA) conçue pour suivre
un budget personnel depuis un navigateur, notamment Safari sur iPhone. Elle
peut aussi être ajoutée à l’écran d’accueil et fonctionner hors connexion
après son premier chargement.

L’application ne se connecte pas à ta banque : les opérations et les soldes
sont saisis manuellement. Elle sert à centraliser tes revenus, tes dépenses,
ton épargne et tes projets dans une interface simple.

LES CINQ ESPACES DE L’APPLICATION
---------------------------------

1. BUDGET
   - Affiche la période budgétaire sélectionnée et ses dates.
   - Présente les revenus, les dépenses, l’épargne ajoutée et le reste à vivre.
   - Compare les dépenses ordinaires aux budgets définis par catégorie.
   - Distingue les dépenses exceptionnelles du budget courant.
   - Affiche le bilan de la période : revenus, dépenses réelles, versements
     d’épargne et différence après dépenses et épargne.
   - Montre l’évolution des dépenses sur les six dernières périodes.
   - Présente un bilan annuel des revenus et dépenses.
   - Permet d’ajouter des dépenses prévues, puis de les convertir en opérations
     réelles lorsqu’elles sont payées.
   - Les blocs d’analyse, de dépenses prévues et de bilan annuel peuvent être
     affichés ou masqués depuis Paramètres.

2. DÉPENSES
   - Regroupe les opérations par catégorie.
   - Permet de rechercher une opération et de filtrer par catégorie, type ou
     période.
   - Propose l’affichage de toutes les périodes ou d’un intervalle de dates.
   - Permet de modifier ou supprimer une opération.

3. ÉPARGNE
   - Permet de créer plusieurs comptes d’épargne et de renseigner leur solde.
   - Enregistre les versements avec un compte destinataire, un montant et une
     date.
   - Permet de modifier ou supprimer un versement ; le solde du compte est
     ajusté en conséquence.
   - Affiche l’historique des versements et le total des soldes saisis.
   - Permet de créer des objectifs avec un montant cible et une date limite
     facultative. Si une échéance est renseignée, l’application estime
     l’effort mensuel restant.

4. CALENDRIER
   - Affiche les dépenses enregistrées jour par jour.
   - Une journée peut être sélectionnée pour consulter les opérations
     correspondantes.

5. PARAMÈTRES
   - Permet de modifier les revenus mensuels de référence, le solde initial
     et l’objectif d’épargne.
   - Permet de définir les dates de début et de fin de chaque période.
   - Permet de créer, modifier, réordonner et supprimer des catégories.
   - Permet de programmer des revenus ou dépenses récurrents. Une récurrence
     active est ajoutée à la période affichée si elle n’y figure pas déjà.
   - Permet de choisir un thème (crème, sombre, rose ou bleu), des couleurs
     personnalisées et la taille de l’interface.
   - Permet d’exporter ou d’importer une sauvegarde JSON.

COMMENT LIRE LES ANALYSES ?
--------------------------
- Le bilan de période utilise les opérations enregistrées dans la période,
  auxquelles s’ajoutent les montants mensuels de salaire, pension et aides
  renseignés dans Paramètres.
- Les dépenses prévues restent séparées des dépenses réellement payées tant
  qu’elles ne sont pas converties.
- Le bilan annuel additionne les revenus et dépenses enregistrés pour l’année.
  Les montants mensuels de salaire, pension et aides des Paramètres sont
  annualisés sur douze mois : le résultat est donc une estimation si les
  revenus ont changé pendant l’année ou n’ont pas été perçus chaque mois.
- Le patrimoine financier affiché correspond à la somme des soldes des comptes
  d’épargne saisis dans l’application. Ce n’est ni une connexion bancaire, ni
  un relevé bancaire exhaustif.
- L’effort mensuel d’un objectif est une estimation simple du montant restant
  à épargner réparti sur les mois avant l’échéance.

INSTALLER OU METTRE À JOUR SUR GITHUB PAGES
------------------------------------------
1. Avant une mise à jour, ouvre Paramètres > Sauvegarde des données >
   Exporter JSON. Conserve le fichier de sauvegarde dans Fichiers ou iCloud.
2. Télécharge puis décompresse l’archive V15.
3. Dans le dépôt GitHub, ouvre la branche publiée par GitHub Pages et remplace
   à la racine les six fichiers de l’archive :
      index.html
      app.js
      sw.js
      manifest.json
      logo.png
      README.txt
4. Vérifie que les fichiers sont bien à la racine, et non dans un sous-dossier.
5. Valide les changements avec Commit changes et attends la fin du déploiement
   GitHub Pages.
6. Ouvre le site dans Safari et actualise la page. Si une ancienne version
   apparaît encore, ferme l’onglet du site puis rouvre-le.
7. Si l’application est déjà installée sur l’écran d’accueil, ouvre-la après
   avoir actualisé le site dans Safari. Le service worker V15 utilise un nouveau
   nom de cache et vérifie les fichiers en ligne avant d’utiliser sa copie
   hors connexion.

DONNÉES, SAUVEGARDE ET CONFIDENTIALITÉ
-------------------------------------
- Les données sont enregistrées localement dans le stockage du navigateur
  (localStorage) sous la clé monBudgetDataV3.
- Cette version conserve cette clé et reprend les données des versions
  précédentes compatibles. Une mise à jour des fichiers ne doit pas effacer
  les données locales.
- Les données ne sont pas synchronisées automatiquement entre appareils.
  Pour transférer les données vers un autre appareil, exporte un JSON depuis
  l’ancien appareil puis importe-le sur le nouveau.
- L’import d’un JSON remplace les données actuellement présentes sur l’appareil.
  Vérifie le fichier avant de confirmer l’import.
- N’utilise pas « Réinitialiser toutes les données » pour effectuer une mise à
  jour : cette action efface les données locales de l’application.
- Exporte régulièrement une sauvegarde, en particulier avant toute mise à jour.

DÉPANNAGE
---------
- Si la page ne se charge pas, vérifie d’abord que les six fichiers sont à la
  racine du dépôt et que le déploiement GitHub Pages est terminé.
- Essaie ensuite de fermer l’onglet Safari et de rouvrir l’adresse du site.
- Ne supprime pas les données de site de Safari et ne réinitialise pas
  l’application avant d’avoir exporté une sauvegarde : ces actions peuvent
  supprimer les données locales.
- Si une erreur survient pendant le démarrage, V15 affiche désormais un
  message d’information plutôt que de laisser croire que les données ont été
  effacées. Ce message ne remplace pas un diagnostic technique.

À PROPOS DE LA VERSION 15
-------------------------
- Version renommée V15.
- Sections d’analyse et de bilan présentes dans la page Budget.
- Présentation du patrimoine financier dans l’espace Épargne.
- README réécrit avec une description détaillée des espaces, des calculs,
  des limites, de l’installation et des sauvegardes.
- Cache du service worker renouvelé et stratégie de chargement en ligne
  prioritaire, avec repli sur les fichiers mis en cache hors connexion.
- Ajout d’un message visible en cas d’erreur de démarrage.

IMPORTANT : cette version a fait l’objet de contrôles statiques des fichiers
(HTML, références des éléments et syntaxe JavaScript). Elle n’a pas pu être
validée sur ton iPhone réel. Aucun correctif ne peut garantir à 100 % l’absence
d’un problème propre à Safari ou à son cache ; conserve donc toujours une
sauvegarde JSON avant de remplacer les fichiers.
