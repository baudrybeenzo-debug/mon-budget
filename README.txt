MON BUDGET V31 — GUIDE D’UTILISATION
===================================

La V31 conserve les données des versions précédentes et corrige le calcul du solde courant : les remboursements ne sont plus comptés deux fois.

INSTALLATION / MISE À JOUR
--------------------------
1. Fais d’abord une sauvegarde JSON depuis l’application (Paramètres > Sauvegarde / Export, selon la rubrique affichée).
2. Décompresse cette archive.
3. Remplace les six fichiers à la racine du dépôt GitHub Pages : index.html, app.js, sw.js, manifest.json, logo.png et README.txt.
4. Valide avec Commit changes et attends la publication GitHub Pages.
5. Recharge le site. La V31 utilise un nouveau nom de cache pour demander les nouveaux fichiers.

NOUVEAUTÉ V16 — SOLDE BANCAIRE PAR PÉRIODE
-----------------------------------------
1. Ouvre l’onglet Paramètres.
2. Dans « Période du budget », sélectionne la période à modifier avec les flèches.
3. Vérifie les dates de début et de fin.
4. Dans « Solde bancaire et objectif d’épargne », renseigne « Solde bancaire au début de cette période ».
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


NOUVEAUTÉS V21 — CONFORT DE SAISIE
---------------------------------
• Les dates de début et de fin de période sont maintenant affichées l’une sous l’autre. Cela évite le chevauchement des champs et des dates sur iPhone, iPad et les écrans étroits.
• Depuis le formulaire « Ajouter une opération », le bouton « Créer une catégorie » ouvre le formulaire de catégorie avec le type déjà sélectionné selon le contexte (dépense ou ajout/revenu).
• Après l’enregistrement de la catégorie, le formulaire d’opération revient automatiquement au même contexte. Le montant, la description et la date déjà saisis sont conservés ; la nouvelle catégorie est automatiquement sélectionnée si son type correspond au formulaire d’origine.

Les catégories créées depuis Paramètres restent inchangées : cette amélioration concerne le parcours de création depuis le formulaire d’ajout d’une opération.


NOUVEAUTÉS V21 — REVENUS, EXCEPTIONS ET SAUVEGARDE
- L’export JSON inclut les soldes bancaires de début de chaque période enregistrés dans Paramètres > Solde bancaire. Au moment de l’export, le solde saisi pour la période affichée est également enregistré.
- Les champs Salaire, Pension et CAF ont été retirés des paramètres. Enregistre désormais chaque entrée d’argent avec le bouton +.
- Pour un ajout d’argent, coche « Compter cet ajout dans les revenus » uniquement s’il doit apparaître dans le total des revenus. Les remboursements et transferts reçus peuvent rester hors revenus.
- Pour une dépense, une case distincte permet de la marquer comme exceptionnelle. Elle reste dans les dépenses réelles, mais est exclue du budget courant.
- Les anciennes valeurs historiques salaire/pension/CAF ne sont plus ajoutées automatiquement aux revenus : pour les périodes à venir, saisis les montants réels avec le bouton +.


NOUVEAUTÉS V21 — DISTINCTION ENTRE REVENUS ET ENTRÉES D’ARGENT
La case « Compter cet ajout dans les revenus » contrôle uniquement le montant affiché dans la tuile Revenus de la page Budget et les totaux explicitement intitulés Revenus. Tous les ajouts d’argent, cochés ou non, restent pris en compte dans le solde disponible et le calcul du reste à vivre, car ils augmentent réellement le compte.

Dans le formulaire, seule la case correspondant au type choisi est visible : une dépense affiche « exceptionnelle », un ajout d’argent affiche « compter dans les revenus ». La règle CSS de masquage a été renforcée pour éviter que les deux champs apparaissent simultanément.


VERSION 25
- Lorsqu'une catégorie est créée depuis le formulaire +, son type est
  préselectionné selon le formulaire en cours, mais reste modifiable.
- Tu peux donc créer une catégorie de dépense depuis un ajout d'argent,
  ou une catégorie de revenu depuis une dépense.
- Le formulaire revient ensuite avec le type et la catégorie réellement choisis.
- L'option « Dépense exceptionnelle » n'est proposée que pour une catégorie
  de type dépense.


VERSION 24 — CONFORT DE SAISIE
--------------------------------
- Lors de la création ou modification d'une catégorie, l'emoji actuel est
  affiché comme indication : il disparaît quand tu touches le champ et
  réapparaît si tu le laisses vide. Tu peux donc le remplacer facilement.
- Les champs numériques initialisés à 0 s'effacent quand tu les sélectionnes.
  Si tu les quittes sans saisir de valeur, le 0 revient.
- Le texte des opérations récurrentes a été clarifié : il rappelle simplement
  d'éviter de créer deux fois la même opération.


VERSION 25 — FIABILITÉ ET CLARTÉ
--------------------------------
- Supprimer une opération récurrente générée ne la recrée plus pour la période
  concernée. Les occurrences des périodes suivantes restent automatiques.
- L'historique affiche la mention « Récurrent » sur les opérations générées.
- Avant de supprimer une catégorie utilisée, l'application demande une catégorie
  de remplacement et réaffecte les opérations, récurrences et dépenses prévues.
- Changer le type d'une catégorie avertit avant de convertir les opérations et
  les récurrences associées. Une catégorie utilisée par des dépenses prévues ne
  peut pas devenir un revenu tant que ces dépenses n'ont pas été réaffectées.
- Le solde estimé du compte courant est calculé ainsi : solde réel au début de
  période + tous les ajouts reçus - toutes les dépenses - versements vers l'épargne.
- « Revenus » ne compte que les ajouts cochés comme revenus. Les remboursements
  et transferts reçus peuvent augmenter le solde sans augmenter ce chiffre.
- Les dépenses exceptionnelles sont exclues du budget courant, mais restent
  incluses dans les dépenses qui diminuent le solde bancaire.
- Les versements vers l'épargne diminuent le solde du compte courant et
  augmentent le solde du compte épargne sélectionné.

Les données restent stockées localement dans le navigateur sous la clé
monBudgetDataV3. Fais une sauvegarde JSON avant toute mise à jour importante.


VERSION 26 — PARTICIPATIONS ET REMBOURSEMENTS
- Un ajout peut être un ajout normal, une participation à une dépense partagée
  ou un remboursement d’une dépense.
- Pour une participation ou un remboursement, sélectionne la dépense concernée.
- Le montant reçu reste comptabilisé dans les mouvements du compte, mais réduit
  le coût net de la dépense liée et donc le budget consommé.
- Le montant restant à rembourser est affiché pour éviter de dépasser la dépense.


VERSION 27
- Pour lier un remboursement ou une participation à une dépense, tu peux
  maintenant filtrer les dépenses par catégorie et rechercher par description,
  catégorie ou date. La liste affiche aussi la date et le montant restant.


VERSION 28 — CORRECTION DU SOLDE COURANT
--------------------------------------
- Le solde courant est calculé avec les montants réellement débités :
  solde initial + tous les ajouts reçus - toutes les dépenses payées
  - versements vers l'épargne.
- Les remboursements restent bien ajoutés aux entrées d'argent reçues, mais
  ne réduisent plus une seconde fois les dépenses dans le calcul du solde.
- Le budget continue, lui, à afficher le coût net des dépenses après
  remboursements et participations.


NOUVEAUTÉ V29 — UN REMBOURSEMENT POUR PLUSIEURS DÉPENSES
--------------------------------------------------------
Lorsqu'un proche te fait un virement qui couvre plusieurs dépenses :
1. Choisis « Participation d’un proche » ou « Remboursement d’une dépense ».
2. Indique le montant total reçu.
3. Filtre les dépenses par catégorie ou recherche-les par leur nom.
4. Coche toutes les dépenses concernées.
5. L'application répartit automatiquement le montant du virement entre les
   dépenses sélectionnées, dans l'ordre affiché, sans dépasser le reste dû
   sur chacune. Si le total sélectionné ne suffit pas, ajoute d'autres dépenses.

Les anciens remboursements liés à une seule dépense restent compatibles.


NOUVEAUTÉ V30 — MONTANT PERSONNALISÉ POUR CHAQUE DÉPENSE
-------------------------------------------------------
Lors d'une participation d'un proche ou d'un remboursement, chaque dépense
sélectionnée possède son propre champ « Montant ». Tu peux répartir librement
le virement entre plusieurs dépenses, y compris partiellement.

Exemple : pour un virement de 9,25 €, tu peux affecter 5,00 € à une dépense
et 4,25 € à une autre. La somme des montants affectés doit correspondre
exactement au virement. Chaque montant ne peut pas dépasser le reste à
rembourser sur la dépense concernée.


NOUVEAUTÉ V31 — VERSION DE L’APPLICATION
----------------------------------------
La version actuelle de l’application est affichée dans Paramètres,
dans la rubrique « Version de l’application ».
