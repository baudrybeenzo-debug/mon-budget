MON BUDGET — VERSION 14

Application web progressive (PWA) de budget personnel. Fonctionne dans un navigateur et peut être ajoutée à l'écran d'accueil iOS depuis Safari. Les données restent stockées localement sur chaque appareil (localStorage) : elles ne sont pas synchronisées automatiquement.

FONCTIONNALITÉS
- Budget par période personnalisable, revenus, dépenses, catégories et dépenses exceptionnelles.
- Comptes d'épargne multiples, versements datés, historique par période, modification et suppression des versements avec ajustement automatique du solde.
- Objectifs d'épargne avec montant cible, progression, échéance facultative et estimation de l'effort mensuel nécessaire.
- Dépenses et revenus récurrents.
- Recherche et filtres de transactions, modification/suppression, calendrier.
- Bilan de la période : revenus, dépenses, versements d'épargne et solde net.
- Graphique des dépenses sur les six dernières périodes.
- Bilan annuel des revenus et dépenses enregistrés/estimés.
- Dépenses prévues, modifiables, supprimables ou convertibles en dépenses réelles.
- Patrimoine financier indicatif calculé à partir des soldes des comptes épargne enregistrés dans l'application.
- Personnalisation de certains blocs de la page d'accueil.
- Thèmes, couleurs personnalisées, export/import JSON.

INSTALLATION / MISE À JOUR GITHUB PAGES
1. Exporter une sauvegarde JSON depuis Paramètres avant toute mise à jour.
2. Décompresser l'archive.
3. Importer à la racine du dépôt les fichiers index.html, app.js, sw.js, manifest.json, logo.png et README.txt en remplaçant les versions précédentes.
4. Valider avec Commit changes.
5. Attendre le déploiement GitHub Pages, puis rouvrir/actualiser le site dans Safari. Si l'ancienne version reste visible, fermer l'onglet et le rouvrir.

SAUVEGARDE ET LIMITES
- Exporter régulièrement le JSON. L'import remplace les données locales présentes sur l'appareil.
- Les comptes et le patrimoine sont des montants saisis manuellement ; aucune connexion bancaire n'est effectuée.
- Les dépenses prévues ne sont pas incluses dans les dépenses réelles tant qu'elles ne sont pas converties.
- Les bilans reposent sur les opérations présentes dans l'application. Les revenus mensuels des paramètres sont annualisés dans le bilan annuel : il s'agit d'une estimation si ces montants ont changé au cours de l'année.
- Le patrimoine affiché additionne les soldes des comptes épargne renseignés ; il ne constitue pas un relevé bancaire exhaustif.
- Les données ne sont pas synchronisées entre appareils. Pour transférer les données, utiliser Exporter JSON puis Importer JSON sur l'autre appareil.
