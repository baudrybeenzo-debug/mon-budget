MON BUDGET V18 — GUIDE D’UTILISATION
===================================

La V18 conserve le solde bancaire initial distinct pour chaque période budgétaire et améliore l’affichage des dates ainsi que la création de catégories depuis un formulaire de transaction.

INSTALLATION / MISE À JOUR
--------------------------
1. Fais d’abord une sauvegarde JSON depuis l’application (Paramètres > Sauvegarde / Export, selon la rubrique affichée).
2. Décompresse cette archive.
3. Remplace les six fichiers à la racine du dépôt GitHub Pages : index.html, app.js, sw.js, manifest.json, logo.png et README.txt.
4. Valide avec Commit changes et attends la publication GitHub Pages.
5. Recharge le site. La V18 utilise un nouveau nom de cache pour demander les nouveaux fichiers.

NOUVEAUTÉ V16 — SOLDE BANCAIRE PAR PÉRIODE
-----------------------------------------
1. Ouvre l’onglet Paramètres.
2. Dans « Période du budget », sélectionne la période à modifier avec les flèches.
3. Vérifie les dates de début et de fin.
4. Dans « Revenus et solde bancaire », renseigne « Solde bancaire au début de cette période ».
5. Appuie sur « Enregistrer les paramètres ».

Chaque période conserve son propre solde. Tu peux donc saisir le solde réel au début de chaque nouveau cycle (par exemple le 26 du mois), puis revenir à une ancienne période sans écraser son montant. Le solde initial est utilisé pour calculer le solde prévisionnel : solde initial + revenus enregistrés et revenus récurrents paramétrés - dépenses - versements d’épargne. Le solde saisi ne crée ni transaction ni mouvement bancaire et ne modifie pas les comptes d’épargne.

COMPATIBILITÉ DES DONNÉES
-------------------------
La V16 conserve la clé de stockage locale monBudgetDataV3 et les données déjà enregistrées (transactions, catégories, comptes, versements, objectifs, récurrences, dépenses prévues, préférences et périodes). Les anciennes données restent compatibles. Si un ancien solde global existait, il sert de valeur de repli pour les périodes qui n’ont pas encore de solde propre ; dès que tu enregistres un solde pour une période, celui-ci devient spécifique à cette période.

LES ESPACES DE L’APPLICATION
----------------------------
• Budget : suivi des dépenses par catégorie, progression de la période et solde prévisionnel.
• Opérations : liste, recherche, filtres, ajout et modification des revenus et dépenses.
• Épargne : comptes, versements et suivi des objectifs.
• Calendrier / planification : visualisation des opérations et dépenses prévues.
• Paramètres : dates de période, revenus réguliers, solde bancaire initial de la période, budgets, apparence, personnalisation et sauvegarde.
• Analyses : bilan de période, tendances des dépenses, récapitulatif annuel et éléments de patrimoine disponibles dans l’application.

SAUVEGARDE ET PRÉCAUTIONS
-------------------------
Les données sont stockées localement dans le navigateur de l’appareil. Elles ne sont pas synchronisées automatiquement entre plusieurs appareils. Exporte régulièrement une sauvegarde JSON et conserve-la dans un endroit sûr. N’efface pas les données de site / le stockage Safari pour résoudre un problème d’affichage avant d’avoir exporté une sauvegarde.

DÉPANNAGE
---------
• Si l’ancienne version apparaît, ferme l’onglet, rouvre le site GitHub Pages et patiente quelques instants après le déploiement.
• Vérifie que les six fichiers sont directement à la racine du dépôt, et non dans un sous-dossier.
• Si une page blanche apparaît, ne supprime pas les données locales. Vérifie d’abord que index.html et app.js sont bien accessibles depuis l’adresse du site.
• En cas de doute, restaure une sauvegarde JSON depuis Paramètres.

Version : 16 — novembre 2026


NOUVEAUTÉS V18 — CONFORT DE SAISIE
---------------------------------
• Les dates de début et de fin de période sont maintenant affichées l’une sous l’autre. Cela évite le chevauchement des champs et des dates sur iPhone, iPad et les écrans étroits.
• Depuis le formulaire « Ajouter une opération », le bouton « Créer une catégorie » ouvre le formulaire de catégorie avec le type déjà sélectionné selon le contexte (dépense ou ajout/revenu).
• Après l’enregistrement de la catégorie, le formulaire d’opération revient automatiquement au même contexte. Le montant, la description et la date déjà saisis sont conservés ; la nouvelle catégorie est automatiquement sélectionnée si son type correspond au formulaire d’origine.

Les catégories créées depuis Paramètres restent inchangées : cette amélioration concerne le parcours de création depuis le formulaire d’ajout d’une opération.
