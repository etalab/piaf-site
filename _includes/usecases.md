# PIAF : oui, mais pour quoi faire ?

Il y a quelques mois, nous avons lancé le projet PIAF, Pour des intelligences artificielles francophones. PIAF part du constat qu’il n’existe aujourd’hui pas de jeu de données francophone pour entraîner des algorithmes d’intelligence artificielle (IA) de questions-réponses, une tâche bien particulière de traitement automatique de langage. **L’objectif de PIAF est de pallier ce manque en construisant de manière collaborative un jeu de questions-réponses en français, public et ouvert.** Ce post vous propose d’explorer l’utilité et les cas d’usages du futur jeu de données PIAF.

## Concrètement, c’est quoi un algorithme de question réponse ?

C’est un algorithme qui, à partir d’un corpus de documents, est capable de répondre à des questions sur celui-ci. Par exemple, si vous lui donnez comme document l’article Wikipédia « Harry Potter », vous pourrez lui poser lui demander « Qui sont les amis de Harry ? », « Quand le premier livre a-t-il été publié ? », ou encore « A combien d’exemplaire a-t-il été écoulé ? ». En retour, l’algorithme vous répondra des portions du texte d’origine, comme par exemple « Ron Weasley et Hermione Granger » pour la première question.
Construire des algorithmes de questions-réponses performants (question-answering en anglais) est aujourd’hui l’une des tâches les plus complexes du traitement du langage naturel, domaine de l’IA qui s’intéresse au langage.

<img src="https://github.com/etalab/piaf-site/blob/master/img/harry_potter.png" alt="harry potter wikipedia" width="400"/>

Oui mais concrètement, à quoi ça sert un algorithme de questions-réponses ? Au quotidien, personne n’a d’utilité pour une IA qui répond correctement à des questions sur le monde d’Harry Potter. Depuis que nous avons lancé le projet, nous organisons chaque semaine des moments contributifs et nous nous rendons au sein d’administrations pour présenter le projet. Systématiquement, les contributeurs nous posent cette question des usages et réutilisations potentiels de PIAF. Cet article vous propose donc d’explorer trois cas d’usage concrets de PIAF dans l’administration.

## Améliorer les agents conversationnels : l’exemple du voicebot de l’ACOSS

Un chatbot, ou agent conversationnel en français, est une IA spécialisée dans l’interaction avec un utilisateur. Sous sa forme la plus classique, il se retrouve sous la forme d’un assistant virtuel avec lequel vous pouvez discuter textuellement, sur des sites comme [celui de la SNCF](https://www.oui.sncf/bot), pour apporter une assistance rapide en répondant à des questions simples. On peut également le trouver sous forme vocale, c’est-à-dire que vous interagissez avec lui par la parole au lieu du texte, par exemple par téléphone.

Prenons l’exemple de l’ACOSS, l'agence centrale des organismes de sécurité sociale, qui gère de nombreux dispositifs dont le chèque emploi associatif (CEA). Vous ne savez pas ce que c’est ? L’un des réflexes que vous pourriez avoir est d’appeler l’ACOSS pour poser vos questions. Dans le cadre du premier Appel à Manifestation d’Intérêt pour l’IA lancé par le Lab IA, **l’ACOSS a développé un voicebot capable de répondre à vos questions simples sur le CEA au téléphone, et au besoin, de vous réorienter vers un conseiller pour des questions plus complexes.**

<img src="https://github.com/etalab/piaf-site/blob/master/img/acoss.png" alt="acoss voicebot rules" width="400"/>

*L'arbre de réponses du voicebot de l'ACOSS, pour l'instant très figé*

Mais quel apport de PIAF dans tout ça ? A l’heure actuelle, les agents conversationnels fonctionnent principalement par identification de mots clés. Par exemple, vous dites « comment souscrire au CEA ? » et le voicebot de l’ACOSS reconnait « souscrire » comme mot clé et vous propose la réponse prévue dans un ensemble de règles préconçues. C’est donc un système qui manque de flexibilité (et donc finalement d’ « intelligence ») puisque si cet ensemble de règles et de mots clés n’a pas anticipé votre question, le voicebot se retrouvera… sans voix. Enrichir cette approche par règles à l’aide d’un système de questions-réponses permettrait à l’IA de « poser votre question » à un ensemble documentaire dont il dispose (par exemple l’ensemble de la documentation disponible sur le CEA) et de vous faire remonter la meilleure réponse qu’il a trouvée. Le chatbot devient donc plus flexible et capable de répondre à un ensemble bien plus vaste de questions ! 

Côté administration, cela permet de dégager plus de temps pour les agents chargés de répondre aux questions des utilisateurs pour se concentrer sur des questions plus complexes et avec une plus grande valeur ajoutée (et pas juste « C’est quoi le CEA ? » à longueur de journée). Pour les utilisateurs, le service obtenu est de meilleure qualité : le temps d’attente est moins long puisque l’IA peut répondre à tous en même temps, et pour ses questions complexes il peut joindre un agent humain plus rapidement puisque ceux-ci ont plus de temps disponible.

## Enrichir des solutions existantes : l’exemple du code du travail numérique

Le code du travail numérique (https://code.travail.gouv.fr/) est un projet mené par le ministère du travail, dont le but est de rendre le droit du travail accessible et compréhensible à tous. **Le format retenu est un moteur de recherche, qui permet à chacun de poser des questions sur le droit du travail** et d’obtenir en réponse les indications légales qui correspondent à sa situation professionnelle particulière. Par exemple, si vous demandez « Quelle est la durée du préavis pour ma démission ? », l’algorithme vous indique les documents les plus susceptibles de répondre à vos question parmi un corpus constitué des articles du code du travail, des conventions collectives, et de fiches détaillées écrites par des agents du ministère du travail.

<img src="https://github.com/etalab/piaf-site/blob/master/img/code_travail_num.png" alt="code travail numérique" width="400"/>

L’approche utilisée aujourd’hui repose sur un moteur de recherche, qui sélectionne le document le plus adéquat en fonction, pour faire simple, d’une proximité linguistique par rapport à la question. **L’apport d’un système de questions-réponses entrainé grâce à PIAF serait de permettre une réponse encore plus précise à l’utilisateur.** Une fois le document le plus adéquat identifié par l’algorithme déjà en place, le système de questions-réponses pourrait permettre d’identifier précisément dans le texte le passage qui répond à la question de l’utilisateur. En le surlignant par exemple dans le texte, il permet à l’utilisateur de ne pas lire un pan entier de texte de loi et d’aller directement à l’information qu’il recherche.

## Proposer de nouvelles approches scientifiques : l’exemple de la pseudonymisation des décisions de justice

Les algorithmes de questions-réponses permettent aussi d’explorer de nouvelles pistes dans des tâches de traitement automatique du langage. Par exemple, à Etalab, nous travaillons sur la pseudonymisation des décisions de justice. L’ouverture de ces décisions en open data est en effet une nécessité pour la transparence de la justice, mais la présence d’informations personnelles comme des noms et des adresses empêche pour l’instant une publication généralisée de ces documents. Nous travaillons donc avec diverses approches de traitement automatique du langage, la plus évidente étant la reconnaissance d’entités nommées qui consiste à reconnaitre la catégorie d’éléments d’une phrase : noms de personnes, noms d'organisations ou d'entreprises, noms de lieux, quantités, dates, etc. Une fois ces éléments reconnus, il suffit de retirer les éléments relevant de catégories comme les noms et les lieux.

**L’apport d’un algorithme de questions-réponses serait de proposer une nouvelle approche, complémentaire de celle utilisée aujourd’hui, pour reconnaitre les éléments à pseudonymiser.** En posant comme question « Qui ? », « Quand ? » ou encore « Où ? », un algorithme de questions-réponses est capable de faire de la reconnaissance d’entités nommées ! Entraîné sur un volume conséquent de données comme celui créé par PIAF, il offre donc des possibilités d’enrichissement de méthodes existantes de traitement du langage, complémentaires, et permettant d’améliorer leurs performances.

On l’a vu, les cas d’usages qui peuvent être imaginés pour PIAF dans l’administration couvrent des thématiques et des tâches variées, qui vont de la possibilité d’offrir de meilleurs services au citoyen en passant par une ouverture à de nouvelles approches scientifiques. Ils sont donc certainement encore plus nombreux dans le monde de l’entreprise, de l’association ou de la recherche !

N’hésitez pas à nous envoyer les vôtres à piaf@data.gouv.fr !
