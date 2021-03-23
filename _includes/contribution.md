## Pourquoi annoter des articles ?

Pour entraîner des IA dans une langue spécifique, il est nécessaire disposer de données d’entraînement dans cette langue qui soient suffisamment performantes pour aider la machine à apprendre. Dans le cas des questions-réponses, qui permettent par exemple d'entraîner des chatbots ou des moteurs de recherche, il s'agit de s'approprier la langue avec ses complexités syntaxiques propres, son vocabulaire, comprendre le sens d'une question, et savoir identifier la réponse pertinente à partir d'un _corpus_ donné. Avec la mise à disposition de modèles de traduction de plus en plus recherchés, la création de ces données d'entraînement en français peut se faire en traduisant automatiquement des données annotées en anglais. **Néanmoins nous ne savions pas si le fait de disposer de données natives en français permettait d'obtenir des résultats plus satisfaisants que des données traduites**.
À partir de la première base d'annotations que nous avons pu établir, il est apparu que disposer de données natives en français permettait d'améliorer la performance de nos modèles de chatbots de plus de 10% (Exact Match) par rapport à ceux entraînés sur des données traduites en français par des logiciels de traduction. Nous continuons cependant à tester ces résultats des *datasets* en fonction de l'évolution de la base de données, afin d'affiner les résultats de l'expérience.

**Le défi est donc le suivant** : en quelques mois, nous avons pour objectif de créer au moins 25 000 questions-réponses sur la base d'extraits d'articles Wikipédia en français. Ce volume de données correspond à un premier seuil dans nos travaux. Ces contributions d'origine humaine formeront un ensemble à partir duquel les intelligences artificielles se familiariseront avec le système linguistique français, servant de fondement au développement de robots capables de comprendre et de répondre aux questions formulées par l'utilisateur.
Nous avons fait un premier calcul : pour générer 25 000 questions-réponses, il est nécessaire de mobiliser 250 heures d'annotation. **En l'état actuel de la base de données, si 600 personnes contribuent individuellement environ 17 minutes à l'annotation, nous atteindrons ce premier palier !**

**Un projet ouvertement francophone** : la base de données et les programmes qu'elle permettra de développer profiteront à l'écosystème scientifique et entrepreneurial francophone dans son ensemble, indépendamment des frontières nationales. Aussi la richesse et la diversité des utilisateurs et utilisatrices sont tout à fait souhaitables, pour permettre aux programmes d'IA d'être les plus représentatifs de l'usage du français à travers le monde.

## Comment contribuer ?

**L'objectif est de constituer avec vous le jeu de données PIAF**. Pour cela, nous organisons régulièrement des événements auprès de publics issus de la société civile, afin de faire connaître notre plateforme et plus globalement les enjeux de l'intelligence artificielle française, et d'inciter à la contribution.
En plus de ces rencontres que nous initions pour aller au-devant des citoyens, la plateforme demeure [accessible](https://piaf.etalab.studio/fin/) librement en ligne pour quiconque veut participer.

**Vous souhaitez suivre notre actualité ? N'hésitez pas à consulter notre [agenda](https://piaf.etalab.studio/agenda/) pour vous tenir informé.**
Pour davantage d'information ou pour être ajouté à notre liste de diffusion, contactez-nous par [mail](mailto:piaf@data.gouv.fr), nous serons heureux de vous répondre !

### Voici un mode d'emploi pour annoter des articles :

Annoter un extrait d'article Wikipédia signifie pour le projet PIAF de créer des questions et des réponses en rapport avec le contenu de l'article en question.

**1. Rendez-vous sur la [plateforme d'annotation](https://github.com/etalab/piaf)**. Notre plateforme d'annotation a été développée en "mobile first", donc c'est encore plus simple de l'utiliser en mobilité !

**2. Une fois connecté(e), il vous est proposé de tester les différentes utilisations de la plateforme avant d'annoter.** Une fois les trois niveaux effectués vous pouvez ensuite choisir un thème et annoter un paragraphe. Comment faire ? Vous êtes invités à lire un extrait d'article et de générer 5 questions-réponses différentes : écrivez une première question dont la réponse se trouve dans le texte, puis surlignez la réponse (si vous êtes sur mobile le surlignage est réalisé grâce à l'écran tactile, si vous êtes sur ordinateur, c'est avec votre souris). La réponse surlignée s'affiche ensuite en dessous de la question.

**3. Répétez la génération de questions-réponses pour les 4 suivantes**. Vous pouvez revenir en arrière et modifier vos contributions.

**4. Validez votre contribution pour cet article et passez à un autre !** Vous pouvez aussi changer de thème si vous le souhaitez.

![alt text](img/annotation-piaf-usa.PNG "title")

## Charte de contribution
Nous souhaitons développer ce projet de manière éthique et ouverte. Pour annoter les articles Wikipédia, nous avons fait le choix d'une posture citoyenne et pédagogique. Nous nous inspirons ainsi de projets contributifs existants, comme [Common Voice](https://voice.mozilla.org) de la fondation Mozilla ou des initiatives de sciences participatives.

**Une démarche citoyenne** : en contribuant volontairement à PIAF, vous améliorez la présence de corpus en français dans le domaine de l'intelligence artificielle. Les données d'entraînement seront ensuite disponibles sous format libre et réutilisables permettant par exemple à des laboratoires d'approfondir certaines de leur recherches ou à des administrations d'améliorer des services à destination des usagers.
Les premières versions du *dataset* sont dès à présent accessibles [ici](https://www.data.gouv.fr/fr/datasets/piaf-le-dataset-francophone-de-questions-reponses/) ! Elles sont mises à jour régulièrement lorsqu'un nouveau seuil de 2 000 contributions supplémentaires est atteint.

**Une visée pédagogique** : l'intelligence artificielle, c'est d'abord de l'humain, et ce n'est pas une fin en soi. A travers ce projet, nous souhaitons également permettre à des profils non techniques de mieux saisir les différentes dimensions de l'intelligence artificielle, les opportunités qu'elle offre ainsi que ses limites. Les événements d'annotation que nous organisons sont l'occasion pour des agents publics, des étudiants, et tout citoyen volontaire de découvrir l'IA par la pratique !

Nous souhaitons que ce projet initie une réflexion sur la reconnaissance de contributions volontaires à des projets d'intérêt général (certifications, valorisation dans la communauté, etc.). N'hésitez pas à nous contacter si vous souhaitez partager vos idées et suggestions : [piaf@data.gouv.fr](mailto:piaf@data.gouv.fr).
