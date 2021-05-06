# slayerjs-app

SlayerJS est un jeu 1 joueurs/multijoueurs, rogue-like, basé sur des decks, à niveau d'echelle inspiré du jeu "Slay the Spire"

## Game design/Lore SlayerJS

### Histoire

Monsieur X (un demi-dieu) a été trahi par le conseil des dieux nordiques (noms?), déchus il décide de remonter dans les sanctuaires divins pour peter la gueule à tout le monde et devenir le dieu des dieux. Il est accompagné par ses compagnons et fidèles ainsi que des serviteurs. Il est capable de récupérer l'esprit d'un dieux pour l'invoquer. Il peut s'affronter contre des autres demi-dieux pour prouver sa valeur en tant que combattant.

#### Univers

Possibilité de diviser le jeu en "mondes" composés de "parties" composés de "niveaux"

Il y a 3 Mondes contenant 3 royaumes ayant chacun 5 niveaux = 45 niveaux au total


##### Mondes : 

Le monde du "bas" composés de : Svartalfheim, Muspellheim, Helheim

Le monde du "milieu" composés de : Midgard, Nidavellir, Jötunheim

Le monde du "haut" composés de : Ásgard, Vanaheim, Ljösalfheim

##### Royaumes:

###### "Bas"

Svartaflheim : Royaumes des Elfes noires, on y retrouve des créatures puissantes tels Fenrir, il y vit des nains mais aussi le dieu qui protège le royaume : Freyr(Je suis pas sûr de cette info mais est-ce qu'on s'en fout).

Muspellheim : Lieu originel de la création du monde avec Helheim, Protégé par Smurt, géant dévastateur, il abrite également Ymir Créateur de la vie et de la terre. Les habitants du Muspellheim sont principalement des géants.

Helheim : Monde de l'obscurité et de la glace, vivent principalement les âmes errantes et des être de glace Les gardiens de helheim sont Modgud (géante) et Garm (Chien/Cerbère). Le maître des lieus est la déesse Hel

###### "Milieu"

Midgard : Le monde des humains, On y rencontre des héros de la mythologie nordique commandés par le héros de Midgard : Helgi, demi-frère de Siegfried.

Nivadellir : Monde des nains peuplés exclusivement de ceux ci, excellent forgeron et magicien, ils utilisent leur armes et leur magie combinés pour se defendre. Leur chefs est Regin, Le père adoptif de Siegfried.

Jotunheim : Royaume des géants dominé par le géants Prymr, Dotés d'une puissance incommensurable, ils ne se battent qu'avec la force de leur poings.

###### "Haut"

Asgard : Monde des Ases, Le royaume le plus haut de l'Yggdrasil dominés par Odin,dieu de la victoire et du savoir. Seuls les dieux y vivent.

Vanaheim : Monde des Vanes, royaume rival de Asgard. Dominés par Freyja et Njord : déesses de l'amour et de la beauté ainsi que de l'abondance

Ljosalfheim : Véritable demeure des elfes lumineux et véritable demeures de Freyr. 

##### Niveau

chaque royaume contenant 5 niveaux seront disposé comme ceci : 

2 niveau de combat "simple" : monstres bas niveau plusieurs tableaux possibles par niveau

1 niveau de combat "moyen" : 1 monstre niveau moyen accompagné de plusieurs monstres bas niveau. 1 seule tableau par niveau

1 niveau de repos : possibilité de récupérer des stats, d'acheter des objets ou modifier son deck.

1 niveau de "Boss" : 1 monstre niveau haut accompagné de plusieurs monstres. Plusieurs tableau possibles avec monstre niveau moyen.

##### Tableau

#### Information générale

### Attributs

Chaque personnage possède une barre de vie, une barre d'énergie (à definir), une barre de bouclier (defense : à definir), une stat de vitesse, une stat de coup critique, un état (emposoisonné, paralysé, confus etc...), des coefficients attaque/defense,barre d'eveil

#### Vie :

Nombre de point de vie par personnage si tombe à 0 le personnage à perdu, soumis au buff par carte soin.

#### Energie :

Nombre de point d'energie disponible par tour : les cartes demandent de l'energie pour être utilisées si energie à 0 on ne peut plus utiliser de carte pour ce tour (soumis au buff/nerf par carte "buff/nerf" et attaque).

#### Bouclier :

Nombre de point de defense par personnage: permet de "mitiger" les dégats recu par des attaques adverse, selon le personnage utilisé les dégats infligé sera calculé selon : (coefficient d'attaque du personnage * dégats de la carte d'attaque) - (coefficient de defense du personnage * points de bouclier ) - carte de défense (counter/block). Soumis au buff/nerf par buff/nerf/attaque/coup critique.

#### Vitesse : 

Statistique determinant qui attaque en premier, chaque tour la vitesse des combattants est recalculé selon les buffs/nerfs (autre critères?) le premier attaquant sera le plus rapide etc...

#### Coup critique : 

Stat appliqué sur une attaque en pourcentage. Augmente de 1.5 fois l'attaque lancé. Pourcentage de chance de coup critique (réevaluer à chaque tour selon buff/nerf/effet).

#### Coefficient attaque/defense :

Permet de calculer les degats infligé après une attaque. Chaque type de personnage aura des coefficient different. Soumis au buff/nerf non cumulable.

#### Barre d'eveil : 

Propre à chaque personnage principale, la barre d'eveil active des compétences et pouvoirs cachés propre à chaque personnage. Elles ont néanmoins un contrecoups après cet eveil. La barre d'eveil se montent grâce au sort lancé mais aussi au dégats recu. L'eveil est utilisable plusieurs fois par combat mais le contrecoup sera progressif selon le nombre d'utilisation de l'eveil.

### Personnages principaux

#### Personnage 1 : Siegfried

Personnage Offensif

##### Dénomination : "Le guerrier Dragon"

##### Histoire

Héros au compétences physique inégalé, Siegfried accomplis nombreux fait héroique dont celui de terrasser le dragon fafnir, dans un duel acharné ou il dévora le pouvoir du monstre pour en devenir un lui-même. Les dieux outrés par cette désinvolture banni le héros du Pantheon de Asgard. Siegfried, par cette trahison cherche à reconquérir le panthéon en gravissant l'Yggdrasil.

##### Compétences Propre

Carte Mix : Estockage (attaque physique): Coup de lame violent. Possibilité de rendre vulnérable l'ennemi

Carte défense : Contre total : Siegfried se prépare à renvoyer n'importe quel attaque physique grâce à la lame brisé de son père. Contre total renvoie toute attaque physique vers son lancer même si les points de défense de Siegfred sont inférieur à l'attaque du lanceur.

Carte Combiné/Mix : Souffle de Fafnir (attaque magique) : Souffle de feu géant Brulant (et Empoisonnant avec une réussite aléatoire) tous les ennemis.

Carte Combiné/Mix Griffe du dragon (attaque physique/magique) : Siegfried voit son bras se transformer en griffe ce qui lui permet de frapper à multiple reprise son ennemi (les degats de chaque attaques sont aléatoire entre un portée de dégats désigné). Possibilité d'empoisonnement.

##### Eveil : Eveil du dragon

Condition : Condition D'eveil normal

Siegfried se transforme en Fafnir. Tout ses sorts offensifs + coefficient offensifs sont augmentés, Possibilités de bruler ou empoisonnés l'ennemi avec n'importe quel sort offensif. 

Compétences en Eveil : Destruction total : Attaque surpuissante sur tout les personnages présent sauf lui même. Brûle et empoisonne tout le monde. Siegfried perds son eveil et est inactif pendant un tour.

Durée : 3 tours 

Contrecoup : Ne peut plus utiliser de compétences propre après l'eveil durant le reste du combat + perte de coefficient offensif. durée 3 tour + 3 à chaque eveil.

#### Personnage 2 : Hervor

Personnage invocateur/Defenseur

##### Dénomination : "La viking maudite"

##### Histoire : 

Guerrière maudite à jamais après avoir réssucité son père pour récuperer l'épée magique Tyrfing, elle tente de gravir L'Yggdrasil pour se libérer de sa malédiction et obtenir la bénédiction des dieux.

##### Compétences propres

Nécromancie : Invoque des monstres au nombres aléatoire (fantômes) Monstres pouvant être sacrifiés comme dans carte d'attaque.

Malédiction : Sacrifie des cartes d'attaques pour envoyer une vague de malédiction à l'ennemi. L'ennemi obtient le statut "Maudit".

Provocation++ (passif) : Lorsque Hervor utilise "Nécromancie", pour 1 ou 2 tour l'ennemi ne peut que attaquer ces monstres.

Malédiction Post-Mortem (carte à effet longue durée/passif) : Lorsque un des monstres de Nécromancie meurt, L'ennemi est maudit pour 3 tour et recoit des dégats à la mort du monstres.


##### Eveil : Berserk du Tyrfing

Condition : Il doit y avoir au moins deux monstres "Nécromancie" sur le terrain de Hervor. (+ condition normal d'eveil).

Sacrifie les "Nécromancie" pour rentrer dans un état de rage intense. Hervor augmente sa resistance défensive (++ coefficient d'efense) et peut utiliser les cartes "Nécromancie" sans coup d'energie.

Compétences en Eveil : Pourfendeur de Nivadellir : Assène un coup violent (monocible) qui peut paralyser l'ennemi pour 3 tour. Pioche une carte si l'ennemi est paralysé par l'attaque. Peut seulement être utilisé une fois par tour.

durée : 3 tour. (à voir)

Contrecoup : les cartes necromancie coute +1 de cout pour le reste du combat. Provocation++ ne dure que 1 tour. Malédiction Post-Mortem ne dure que 1 tour. durée 3 tour + 1 par eveil



#### Personnage 3 : Odd

Personnage à distance/Vitesse/Rafale

##### Dénomination : L'archer sans cheval

##### Histoire 

Pour fuir son destin, Odd parcours le monde en quête de duel et de missions tout autant périlleuse. Après être rentrer au pays il décide d'accomplir sa dernière quête : tuer Odin 

##### Compétence Propre

Shotgun : Tire plusieurs salves de flêches au effets inconnus. Attaque en plusieurs coup au dégats aléatoire. Bonus coup critique si Shotgun est activé plusieurs fois de suite. Possibilités d'empoisonné,paralysé,rendre confus, maudir, bruler ou geler pour 2 tour maximum (aléatoire).

Ricochet : Tire une flêche ricochant si elle tue sa cible. Récupère de l'energie ou de la vie si Ricochet tue sa cible. peut Ricocher à l'infini.

Précision Efficace++ (passif) : Plus Odd effectue soit : Des ricochets soit des coups critiques. Plus ses chances de coup critique et sa vitesse augmente. stack 3 fois.

Précision Ultime : Activation (actif/passif) : Si précision efficace atteint les 3 stack. Odd peut activer précision Ultime (sans coup d'energie). Augmente son energie et ses chances de coups critique de 50% pendant 2 tour.reset ses 3 stacks.


##### Eveil : Sniper Héroïque.

Condition : Odd ne doit pas avoir 3 stacks + condition d'eveil normal.

Odd devient un sniper et ne rate jamais ses cibles. Augmente sa vitesse son energie et ses coups critique de 100%. Toutes ses attaque à distance sont maintenant AOE (touche tous les ennemis).

Compétence Eveil : Échange vitale : peut être lancer même si Odd est paralysé/gelé/confus. Echange les etats de Odd et de sa cible si Odd est paralysé/gelé/confus/poison/brulé/maudit. Soigne Odd de tout ses effets. Draîne un % de pv max à l'ennemi visé. Seule compétence monocible durant l'eveil.

durée : 3 tour

Contrecoup : Odd perds tout ses boost de stats global et ne peut plus obtenir de buffs en vitesse, coup critique ou energie. Shotgun ne peut plus donner d'effets au ennemis Ricochet ne donne plus d'energie ou de vie. impossibilité d'utiliser précision ultime. durée : 3 tour + 2 par eveil
 

#### Personnage 4 : Brunehilde

##### Dénomination : Valkyrie Inarretable

Personnage à effet/AOE

##### Histoire : 

Valkyrie puissante et respectée, elle tombe éperduemment amoureuse de Siegfried, Cependant ce dernier se marie avec une autre, offensée, Brunehilde elle jure d'exterminer sa famille et de retrouver Siegfried en haut de l'yggdrasil pour un dernier combat.

##### Compétences Propre :  

Aura : Soigne tout les effets sur les alliés et elle même. Possibilités d'agir comme une carte contre, Si "Halo" est actif.

Drain : Cible tout les ennemis et draine des points de vie pour Brunehilde. Possibilité d'agir comme une carte à effet, Si "Halo" est actif.

Lance Purificatrice : Lance une attaque monocible + Pioche deux cartes, si : 
Deux cartes attaque = La valeur de l'attaque "Lance Purificatrice" est de la somme des deux cartes + lance purificatrice. Récupère 1 points d'"halo"
Deux cartes defense = Récupère 3 points de "Halo"
Deux cartes effets = Lance purificatrice annule tout les effets sur Brunehilde. Récupère 2 points d'"halo"
Deux cartes soin = Active drain + Lance Purificatrice.
Deux cartes deck = Transforme ses cartes en autant de points "Halo" qu'il faut piocher de cartes pour les deux cartes.
(Les cartes de types "combinés" se comportent comme leur comportement finale)
Si Halo est "actif" : Lance purificatrice active Aura + Drain + Lance Purificatrice (sans posséder les cartes Aura et Drain dans sa main). Perds tout ses points "Halo".

Halo++ (passif/actif) : Récupérer des points "Halo" augmentent les stats globale de Brunehilde. Arrivé à 5 "halo", Halo devient "actif". 10 points "halo" maximum

##### Eveil : Chevauchée des Valkyries

Brunehilde appelle ses Valkyries pour lui prêter main-forte. Brunhilde gagne 5 points de "halo" instantanément et "Halo" reste "Actif" la durée de l'eveil. 2 valkyries viennent se joindre à Brunehilde (monstre niveau moyen/bas).

Compétences Eveil : Chevauchée mortelles : Brunehilde et ses valkyries lances toute les 3 "Lance Purificatrice" avec "Halo actif".

durée : 3 tours.

Contrecoup : Brunehilde ne peut activer "Halo" pendant 4 tour, ses points "halo" tombent à 0



### Nombre de niveaux : 45

### Carte du monde : Yggdrasil

![image alt](https://thumbs.dreamstime.com/z/arbre-du-monde-de-vecteur-d-%C3%A2%E2%82%AC-de-yggdrasil-de-la-mythologie-scandinave-95205217.jpg "Yggdrasil")

Le premier monde "accessible" sera le monde du "bas" constitué de Helheim, Svartalheim et Muspeilheim

Le monde du "milieu" se débloque en battant le boss du monde du "bas" qui est lui-même débloqué après avoir battu les boss de chaque royaume du bas.

Le monde du "haut" se débloque après avoir fini le monde du "milieu". Le boss ultime se débloque après avoir parcourus tout l'arbre.

#### Niveau monstres bas niveaux.

Ces niveaux de types communs sont au nombres de 2 par "royaumes". Il contient deux ou trois tableau constitué de 2 à 4 monstres bas niveau commun.



#### Niveau monstres moyen niveaux.

Ces niveaux de types moyen sont au nombre de 1 par "royaumes". Il contient 1 tableau constitué de 4 monstres dont 3 monstres bas niveau et un monstres niveau moyen (possédent des capacités propres avec des effets speciaux)

#### Niveau repos

Ces niveaux de types repos sont au nombre de 1 par "royaumes". C'est un niveau permettant d'acheter des objets et de visionner/modifier le deck de votre personnage.(à revoir)

#### Niveau monstres "Boss"

Ces niveaux de types boss sont au nombre de 1 par "royaumes". C'est le dernier niveau de chaque "royaumes". Il peut contenir autant de tableau que possible. le dernier tableau contient le monstres de type "boss". Monstres haut niveau Possédant des capacités spécial et des "passif" ainsi que des stats élevés.

#### Conclusion

Les monstres seront détaillés dans la prochaine section "Ennemis".

### Nombre de type de carte : 9 (à voir)

Carte attaque, Carte défense, Carte buff (augmente les stats du personnage pendant x tour), Carte nerf (baisse les stats des ennemis pendant x tour), Carte "mix" (contient plusieurs carte type exemple : attaque + buff, defense +nerf etc),carte "effet" (poison,paralysie,confusion,annulation d'effet,etc...),carte "soin",carte "deck",carte "combiné"

#### Type de carte attaque:

##### Monocible (une seul cible par attaque)
##### AOE (plusieurs cible par attaque choisis)
##### Random Monocible (aléatoire)
##### Random AOE 
##### All Ennemies(tout les ennemis)
##### All Units (tout le monde)

#### Type de carte defense:

##### Block (arrete une attaque selon niveau de défense du personnage et l'attaque de l'ennemi) :

Permet de bloquer une attaque. Si l'attaque est plus forte que la carte de défense, l'attaqué recevra la différence des points de défense et de l'attaque.

##### Counter :

Renvoie l'attaque si la carte "counter" est plus forte (strict) que la carte "attaque" sinon la carte est inefficace (à voir:  possibilité d'activé la carte lorsque l'attaquant lance son attaque)
à suivre (ajouter d'autre idée)

#### Type de carte buff/nerf

##### "Self" :

Buff niveau attaque, defense, vitesse,energie à sois même

##### "All" :

Buff à tout le monde

##### "Single Targeted" :

Buff à une personne choisis

##### "Multi Targeted" :

Buff à plusieurs personne choisis

#### Type de carte Soin: 

##### Soin individuel :

Rend une certaine quantité de pv au lanceur ou à un allié

##### Drainage : 

Soin équivalent aux dégâts infligés

##### Soin collectif :

Rend un montant de pv à tous les alliés

##### Sacrifice :

Sacrifier une partie de ses pv pour soigner d'autres alliés

#### Type de carte "effet"

##### Poison :

Donne le statut empoisonné à un adversaire(dégats 1/10 des pv sur 3 tours)

##### Paralysie :

Donne le statut paralysé à un adversaire, ne peut pas effectuer d'action sur un tour 


##### Confusion :

Donne le statut confus à un adversaire, le lanceur ne choisit pas la cible de ses cartes, durée 2 tours

##### Brûlure : ??
Donne le statut "enflammé", les attaques de feu infligent plus de dégâts sur un ennemi possédant ce statut(à revoir)

##### Gel : 

Donne le statut "Gelé", impossible d'effectué une action. (à revoir) durée 2 tour

##### Vulnérable : 

Etat qui augmente les dégats subis par des attaques physiques ennemis. durée 3 tour

##### Maudit : 

Etat qui peut retourner une attaque contre son propre lanceur. durée 3 tour

##### Saignement : 

Donne le statut saignement à l'adversaire. Inflige des dégats de manière progressive sur 2 tour + perte de coefficient de défense sur 3 tour.



#### Type de carte "deck"

Type de carte permettant de modifié la main ou le deck du personnage/ennemis

##### "Pioche" :

Permet de piocher une ou plusieurs cartes avec conditions ou non

##### "Défausse" :

Permet de "bruler" (retirer un carte de sa main) une ou plusieurs carte avec conditions ou non

##### "Pioche + Défausse" :

Defausse puis pioche une ou plusieurs carte selon condition ou non 

#### Type de carte "combiné"

type de carte permettant de sacrifier une ou plusieurs carte pour obtenir ou activé une carte plus "puissante", Les cartes combiné n'ont pas de couts supplémentaire (sauf si précisé par la carte elle même) elle n'a que le cout des cartes sacrifié pour l'utiliser. Les cartes combinés sont utilisable seulement dans les cadres suivant:

##### "Combiné attaque/defense actif/passif" :

Combine une ou plusieurs carte de type "attaque" ou "defense" pour lancer (actif) ou piocher (passif) une carte plus puissante. La carte doit être disponible dans le deck ou dans la main (selon condition de la carte combiné). Une carte combiné attaque/defense se comporte comme une carte attaque ou défense après débloquage de celle-ci.

##### "Combiné Mix" :

Combine une ou plusieurs carte de n'importe quel type pour lancer ou piocher une carte plus puissante. La carte Combiné Mix respectera la description de la carte, et se comportera selon la définition de la carte

##### "Combiné Special" :

Combine une ou plusieurs carte précise (seuls les cartes précisé par la carte "Combiné special" peuvent etre utilisé pour activer la carte). Se comporte selon la description de la carte.

PS: Il n'y as pas de combiné buff/nerf ni de soin ni de deck ni de Mix (à voir)


###### Type de carte "Mix"

Attaque + buff : attaque sur les ennemis + augmente les stats de l'attaquant
Defense + buff : defense sur le caster + augmente les stats du caster
Defense + nerf : defense sur le caster + baisse les stats de l'attaquant
Attaque + nerf : attaque sur les ennemis + baisse des stats de l'attaqué
attaque + effet : attaque sur les ennemis + application d'effet sur attaqué ou attaquant.
Attaque/Defense + soin : Soit Attaque + soin soit Defense + Soin
Defense + effet : defense sur le caster + application de l'effet lors d'une attaque sur le caster

### Ennemis

#### Bas:

##### Svartaflheim : 

###### Elfes noirs

Monstres faible.

Des elfes sombres possédent des capacités de magie noire. Les elfes ont une vitesse elevé, mais ont peu de points de vie. Leur coefficient de défense est faible, mais leur chance de coups critique est plus elevé.

Armes : Arcs courbé

Attaque :  

flèche demoniaque : envoie une flèche sur un ennemi  

Vague noir : Propulse un boule d'energie sombre. Peut rendre confus  

###### Feufollet démoniaque :

Monstres faible.

Des ames en forme de flammes qui errent dans le svartaflheim.

Armes : Aucune

Attaque :  

Feufollet : Crache une flamme sombre sur les ennemis.  

Malice : attaque aléatoirement les ennemis. Baisse le coefficient de défense de la cible, peut rendre confus.

###### Nains démoniaque

Monstres faible

Nains déchu de Nidavellir qui travail pour la forge maudite. Les nains ont beaucoup de points de vie et un haut coefficient de défense. Il est peu rapide mais possède un bouclier initial de 3 points.


Armes : Marteau

Attaque:  

Brise-mur : Fracasse l'ennemi avec un coup de marteau. Peut rendre confus. Si la cible est confuse le lanceur récupère des points de vie.

Remontant sombre : Récupère des points de vie via un breuvage mysterieux. Peut enchanter l'arme du lanceur.

###### Fenrir

Monstres moyen

Gardien du royaume: Loup surpuissant. Possède un coefficient d'attaque et une vitesse elevé. Meilleur chance de coup critique. Coefficient de défense normal.

Armes : Aucune

Attaque :   

Assaut du gardien : Fenrir charge vers son ennemi infligeant des dégats elevé. Peut rendre confus fenrir et sa cible. Si fenrir est confus son coefficient d'attaque augmente.  

Brise-Morsure:  Morsure qui passe à travers un bouclier inférieur à 6 points. Peut rendre confus et empoisonner.  

Meute Enragé:Appelle la meute de loup de Fenrir à son secours.  

Appel Démoniaque: Fenrir sacrifie ses loups pour augmente toutes ses statistiques. Fenrir devient insensible aux effets et tout ses coups rendent confus.  

###### Freyr (mode Démon)

Dieu des elfes Lumineux, Freyr contrôle également Svartflheim. Dieu de la prospérité et de l'abondance il peut egalement provoquer la faillite et la famine.

Armes : Epée Magique de Freyr

Capacité : (Des cartes ou pas ?)

Torrent de Freyr : Invoque un typhon géant avec son épée attaquant tout les ennemis. Baisse le coefficient de défense des ennemis.

Briseur Temporelle : L'épée de Freyr brise le vent et attaque tout les ennemis avec 2 attaques successives. Augmente les chances de coups critique de Freyr. Si Freyr fait un coup critique il relance une attaque Succesives (maximum 5). Peut faire baisser la vitesse des ennemis.

Armée démoniaque : Invoque trois elfes démoniaque. Quand un des elfes meurt Freyr augmente toute ses statistiques

Vortex du Vide : Mets le coefficient déffensif de la cible à 0 pendant 2-3 tour. La cible ne peut plus avoir de bouclier. 

Domptage Démoniaque : Freyr invoque Fenrir. Si fenrir meurt freyr récupère ses capacités.

Ragnarok : Freyr détruit le terrain et inflige des dégats à tout les ennemis, Brule et rend confus les ennemis. Draine des points de vie à tout les ennemis.

##### Muspellheim : 
Ymir?
Surtr : attaques de feu (effet : brulûre), arme : epée enflammée

##### Helheim : 

royaume des morts : ennemis-> morts-vivants ou âmes

Boss: Déesse Hel

###### Hel

Déese de la mort : Visage mi tenebreux mi lumineux.

Armes : Aucune

Capacité : 

Baiser de la mort : Hel passe derrière sa cible et lui tranche le dos avec son couteau. Fait saigner et fait baisser la vitesse et les chances de coups critique de la cible.

Réincarnation : Invoque des fantomes/zombies Quelle peut sacrifié pour récupérer des points de vie avec "Echange équivalent"

Echange equivalent : sacrifie une unité alliée pour récupérer des points de vie.

Appel de la mort : Envoie une vague de fontomes/zombies errant sur tout les ennemis Plus le nombre d'unités alliée est grand plus "Appel de la mort" fait des dégats.

Héros déchu : Récupère l'ame de la cible et en invoque une unité allié avec cette dernière. (l'unité invoqué est moins forte que la cible mais possèdent toutes les capacité personnelles de la cible)

Valhalla maudit : Invoque 3 des 4 personnages Principaux à ses côtés.

Peste : Envoie la peste sur tous les ennemis. Rend maudit et confus et empoisonne tout les ennemis. Baisse la vitesse et la chance de coups critique à 0.



#### Milieu:

##### Midgard : 

ennemis : humains

###### Jormungand

Serpent entourant le monde des humains. Protecteur de Midgard. 

Séisme : Fait trembler la terre et touche tout les ennemis : Peut rendre confus

Tsunami : Provoque une vague enorme qui touche tout les ennemis : Baisse la défense

Morsure infinie : aggripe un ennemi et le mords puissamenet : Empoisonne la cible

Lacération Terrestre : Attrape les ennemis et les etrangle totalement : Brise le bouclier et baisse le coefficient de défense et baisse la vitesse.

Pluie Empoisonné : Envoie son poison sur tout les ennemis : Empoisonne et rend vulnérable tout les ennemis.

##### Nivadellir : 

ennemis : nains
Armes : hache
Particularités : plus forts, moins de Pv

Boss: Motsognir

###### Motsognir

Roi de nains. Vaillant et Courageux il protège le monde des Nains

Armes : Marteau + Arme forger

Capacité : 

Lancer de marteau :  Lance son marteau sur un ennemi : Peut rendre confus et paralyser. Si lancer de marteau inflige un coup critique : Motsognir gagne 5 points de bouclier.

Solidification : Augmente le coefficient de défense + Prend 10 de bouclier. (Passif) Si l'ennemi brise le bouclier Le coefficient de défense de Motsognir augmente.

Bouclier ultime : Renvoie toute les attaques physique de l'ennemi pendant 3 tour. et prend 20 de bouclier.

Forgeage : Construit une nouvelle arme aléatoire. Arme qui augmentera les statistique de Motsognir

Choc Primordial : Motsognir frappe la terre avec son marteau et attaque tout les ennemis. Le coup critique sera augmenté.



##### Jotunheim : 

ennemis : géants 


#### Haut:

##### Ljosalfheim : 


###### Freyr (mode Ange)

Dieu des elfes Lumineux. Dieu de la prospérité et de l'abondance.

Armes : Epée Magique de Freyr

Capacité : (Des cartes ou pas ?)

Torrent de Freyr : Invoque un typhon géant avec son épée attaquant tout les ennemis. Baisse le coefficient de défense des ennemis.

Briseur Temporelle : L'épée de Freyr brise le vent et attaque tout les ennemis avec 2 attaques successives. Augmente les chances de coups critique de Freyr. Si Freyr fait un coup critique il relance une attaque Succesives (maximum 5). Peut faire baisser la vitesse des ennemis.

Armée Lumineuse : Invoque trois elfes Lumineux. Quand un des elfes meurt Freyr augmente toute ses statistiques

Eldorado : Envoie une gigantesque sphère d'or sur tout les ennemis. Ignore et brise tout les boucliers.

Jugement Divin : Vise une cible, un halo aveuglant inflige des dégats à la cible. Paralyse et réduit à 0.1 les coefficients d'attaque de la cible pour 2 tour. Peut paralyser


Ragnarok : Freyr détruit le terrain et inflige des dégats à tout les ennemis, paralyse et rend vulnérable les ennemis. Freyr récupère 20 points de Bouclier.


##### Vanaheim : 

Boss Freya, Freyr 

##### Asgard : 

Niveaux finaux
Boss : Thor Odin Loki(à développer)

### Carte

#### Commun

##### Attaque De base.

###### Attaque corps à corps : 
Condition: Aucune  
Type : Attaque rapproché (monocible)  
Energie : 1 + malus objet rapproché  
Attaque : 3 + bonus objet rapproché  
Description : Un coup au corps à corps de base. Augmente en fonction de l'objet rapproché porté par le joueur.

###### Lancer de projectile :
Condition : Aucune  
Type : Attaque à distance. (monocible)  
Energie : 2 + malus objet à distance.  
Attaque : 4 + bonus objet à distance.  
Description : Un lancer à distance de base. Augmente en fonction de l'objet à distance porté par le joueur.

###### Attaque rapide : 
Condition : Aucune  
Type : Attaque rapproché + vitesse (monocible)
energie : 2  
Attaque : 3 + aléatoire(1,3)  
Description : Deux attaques successives qui augmente la vitesse du joueur. La deuxième attaque inflige des dégats selon la vitesse du joueur.

###### Lame acéré : 
Condition : porter une arme de types "lame"  
Type : attaque rapproché + effets (monocible)  
energie : 1  
Attaque : 2 + bonus objet à lame  
Description : Une attaque lancé avec une lame tranchante. Possibilité d'appliqué une vulnérabilité sur l'ennemi. Si L'ennemi devient vulnérable votre coefficient d'attaque augmente. L'attaque augmente en fonction de l'objet à lame.

###### Attaque surprise : 
Condition : Aucune  
Type : attaque aléatoire  
energie : 2  
Attaque : ?  
Description : Piochez une carte, si c'est une carte attaque, lancer cette attaque sans utiliser de l'energie même si il y a une condition, sinon, lancer une Attaque de 2 points sur l'adversaire.

###### Salve destructrice : 
Condition : Posséder une arme à distance  
Type : Attaque à distance. (AOE multi targeted)  
energie : 3  
Attaque : 3 * aléatoire(1,4)  
Description : Envoie 3 salve à distance de dégats aléatoire de 1 à 4 points sur l'adversaire.

###### Rage magique : 
Condition : Posséder une arme niveau 2  
Type : Attaque magique + physique + effet (monocible)  
energie : 5  
Attaque : 9 + aléatoire(1,9)  
Description : Ensorcelle l'arme posséder et assène un puissant coup magique et physique. Selon l'arme peut appliquer des effets. Etourdi l'ennemi pendant un tour (impossibilité de attaque/defense). les dégats supplémentaire aléatoire sont calculé en fonction de la puissance de l'arme équipé.

###### Souffle de feu : 
Condition : Posséder une arme magique  
Type : Attaque magique + effet. (AOE all)  
energie : 4  
Attaque : 5 + aléatoire(1,3)  
Description : Crache une boule de feu sur tout les ennemis. Possibilité de bruler. Dégats supplémentaire en fonction de l'arme magique.

###### Attaque empoisonné : 
Condition : Posséder une arme empoisonné  
Type : Attaque rapproché + effet  
energie : 2  
Attaque : 2 + poison  
Description : enfonce une arme dans l'adversaire qui l'empoisonne.

###### Incantation anhilatrice :  
Condition : Posséder une arme magique  
Type : Attaque magique + effet (AOE targeted)  
energie : 3  
Attaque : 8  
Description : Trace des cercles magiques pendant deux tour (impossible de jouer pendant ces tours d'incantation), Puis lance une puissante incantation sur la cible. 

###### Plus d'un tour dans son sac : 
Condition : Aucune  
Type : Attaque  aléatoire + effet longue durée  
energie : 3  
Attaque : ?  
Description : Pioche trois carte sur trois tour si la carte est une carte attaque elle vaut 1 et doit être utilisé avant la fin du tour sinon elle est detruite. Sinon la carte est normal.

###### Changement de main : 
Condition : Aucune  
Type : Attaque magique   
energie : 3  
Attaque : ?   
Description : Transforme une des cartes du joueur en carte attaque aléatoire avec cout d'energie nulle. La carte doit être utilisé avant la fin du tour.

###### Explosion retardé : 
Condition : Posséder une arme magique  
Type : Attaque magique   
Energie : 4  
Attaque : ?  
Description : Transforme un ennemi (seulement des ennemis faibles "à definir") en bombe à retardement. il ne peut plus attaquer pendant deux tour,il perds 50% de ses points de vie actuel par tour. L'ennemi meurt et explose selon le nombre de points de vie qui lui reste.

###### Morsure gelée : 
Condition : Posséder un objet de type "Glace"  
Type : Attaque physique + effet  
Energie : 3  
Attaque : 3 + aléatoire(1,2)  
Description : Inflige une morsure qui gèle l'ennemi. Subit des dégats supplémentaire en fonction de l'objet équipé.


###### Electrocution :

Condition : Posséder un objet de type "Foudre"  
Type : Attaque physique + effet  
Energie : 2  
Attaque : 2  
Description : Electrocute l'ennemi et le paralyse. si electrocution inflige des coups critiques, augmente la vitesse du lanceur.

##### Attaque combiné

###### Uppercut : 
Condition : Sacrifié au moins deux "Attaque au corps à corps"  
Type : Attaque physique + effet  
Energie : 2 * nombre de carte sacrifié  
Attaque : 3 * nombre de carte sacrifié  
Description : Assène x(nombre de carte sacrifié) coups surpuissant rapproché. Possibilité d'etourdir ou de rendre vulnérable l'ennemi à chaque coups. Si le coups etourdit donne un coup final supplémentaire. Si le coups rend vulnérable, augmente le coefficient d'attaque du personnage.

###### Shotgun : 
Condition : Sacrifié au moins deux "Lancer de projectile"    
Type : Attaque à distance + effet  
Energie : 3 * nombre de carte sacrifé  
Attaque : 4 * nombre de carte sacrifié  
Description : envoie x(carte sacrifiés) en simultané. augmente les chances de coups critique. Si Shotgun inflige un coups critique, pioche le nombre de cartes sacrifiés. Si toutes les cartes pioché sont des "Lancer de projectile" celle-ci vaudront 1.

###### Spectacle sanglant : 
Condition : "Lancer de projectile" + "Attaque au corps à corps"  
Type : Attaque distance + rapproché  
Energie : 5  
Attaque : aléatoire(2,6) + aléatoire(1,5)  
Description : Se met proche de l'ennemi et envoie des projectiles sur tout les ennemis, Possibilité de vulnérabilité et de saignement. Les dégats se calcule selon les armes portés (si le personnage porte une arme à distance puissant il aura plus de chance d'avoir l'aléatoir(2,6) au maximum. Pareil pour ls armes rapproché). Si "Spectacle sanglant" inflige les dégats maximum, fait saigner instantanément.

###### Poing Suprème : 
Condition : 2 cartes attaque quelconque.  
Type : Attaque rapproché  
Energie : 3  
Attaque : 6  
Description : Se concentre un tour pour envoyer un poids géant sur les ennemis.

###### Secousse Tombale : 
Condition : 3 cartes attaque quelconque.  
Type : Attaque magique + effet  
Energie : 4  
Attaque : 10  
Description : Detruit le sol et casue des degats à tous les personnage présent sur la map (y compris son lanceur). Les ennemis prennent 10 de degats les alliés prennent 4 de dégats.

###### Coup de boule : 
Condition : 2 cartes attaque quelconque.  
Type : Attaque rapproché  
Energie : 3  
Attaque : 8  
Description : Envoie un gros coup de boule à un adversaire. Le lanceur perds 3 points de vie

###### Charge Victorieuse : 
Condition : 3 cartes attaques quelconque.  
Type : Attaque physique.  
Energie : 7  
Attaque : 12  
Description : Invoque les Valkyries et charge violemment vers tout les ennemis. Si il y a coup critique sur une cible, Obtient une carte contre dans la main du lanceur


###### Malédiction d'Andvari : 
Condition : "Rage Magique" + "Incantation   Anhilatrice"  
Type : Attaque magique  
Energie : 6   
Attaque : 15   
Description : Dessine des cercles magique qui enchante l'arme du lanceur pendant trois tour. Envoie une vague magique surpuissante sur tout les ennemis. Peut etourdir, Paralyser ou rendre confus. Si un effet est activé Récupérer deux points d'energie.   

###### Explosion de Thor : 
Condition : "Electrocution" + "Explosion retardé"  
Type : Attaque Magique  
Energie : 6  
Attaque : 10  
Description : Envoie une decharge electrique à tout les ennemis. Si un ennemi meurt après l'attaque il explose et envoie des dégats collatéral à ces alliées de 4 points de vie (à revoir). Peut paralyser. 

###### Pioche Salvatrice : 
Condition : "Plus d'un tour dans son sac" + "changement de main"  
Type : Attaque + deck   
Energie : 5   
Attaque : ?   
Description : Piochez 3 cartes, Si il n'y a pas de carte attaque transformer toute les cartes en carte attaque aléatoire. Si les trois cartes sont de types attaque lancer les trois cartes sans couts supplémentaire. Sinon Les cartes attaques piochés ont un coup nul, les autres sont transformé en carte attaque.    

###### Danse de l'arlequin : 
Condition : "Attaque rapide" + "Attaque surprise" + "changement de main"  
Type : Attaque + vitesse   
Energie : 7  
Attaque : aléatoire(3,6) + aléatoire(2,7) + aléatoire(1,8)  
Description : Enchaines 3 attaques  rapide. Pioche une carte à chaque attaque si la carte est une carte attaque elle a un coup de 1. Augmente la vitesse du lanceur tels qu'il commence en premier le prochain tour.

###### Pioche de Njord : 
Condition : "Danse de l'arlequin" + "Pioche Salvatrice"  
Type : Attaque + vitesse + deck  
Energie : 9  
Attaque : 5  
Description :Pioche 3 cartes, Les cartes ont un cout nul pour le tour. Si les 3 cartes sont de types attaque le lanceur récupère "Danse de l'arlequin" dans sa main avec un cout nul. Si les 3 cartes sont defensive Inflige 5 à tout les ennemis. 

###### Appel du Niflheim : 

Condition : "Morsure gelée" + "Lame acéré" + "Salve destructrice"  
Type : Attaque Magique  
Energie : 7   
Attaque : 10   
Description : Tranche la totalité du terrain pour envoyé une vague de glace sur tout les ennemis. Gèle la cible et peut geler les autres ennemis. Peut rendre vulnérable la cible. Si la cible devient vulnérable, le lanceur lance "lame acéré" avec une chance de coups critique de 100%.  

###### Spectacle empoisonnant : 

condition : "Spectacle sanglant" + "attaque empoisonné"  
Type : Attaque + effet  
Energie : 7  
Attaque : 12  
Description : Se met proche de l'ennemi et envoie des projectiles empoisonné sur tout les ennemis. Empoisonne la cible principal et peut empoisonné les autres. Le temps de l'empoisonnement Chaque attaque physique infliera des coups critique.

##### Carte Defense.

(chercher des noms)
###### Bouclier en bois
Type : défense
Energie : 0 
Description : Donne 5 pts d'armure à un personnage allié

###### Bouclier en bronze
Type : défense
Energie : 1 
Description : Donne 8 points d'armure à un personnage allié

###### Bouclier en acier
(sah jsuis nul pour les noms)
Type : défense
Energie : 2 
Description : Donne 12 points d'armure à un personnage allié

carte 4
Type : défense
Energie : 3 
Description : Donne 6 points d'armure à tous allié

carte 5 
Type : défense + soin
Energie 1
Description : Donne 5 points d'armure et rend X pv (à définir) à un allié

carte 6 
Type : défense + deck
Energie : 2 
Description : le lanceur pioche 2 cartes, si il pioche une carte de buff(jsp à revoir), donne 6 points d'armure au lanceur.

(note : faire une carte qui inflige un montant de dégât en rapport avec l'armure)

carte 7 : 
Type : défense
Energie : 1
Description : Echange x montant de Pv en x * 1.5 ou 2 de points d'armure

###### Larcin
Type : défense
Energie : 1 
Description : le lanceur vole l'equivalent de la moitié des points de d'armure de l'adversaire séléctionné(retire les points à l'adversaire également), si il n'en possède pas, le lanceur gagne 3 points d'armure

###### Equilibre
Type : défense
Energie : 2 
Description : le lanceur gagne autant de points d'armures que la cible

##### Carte Deck

###### Pioche simple
Type : deck
energie : 0
Description :pioche une carte

###### Double Pioche 
Type : Deck
Energie : 1 
Description : pioche 2 cartes

###### Triple pioche 
Type : Deck
Energie : 3
Description : pioche 3 cartes



##### Carte Effet

###### Hypnose : 

Condition : Aucune  
Type : Effet  
Energie : 2  
Attaque : 0  
Description : Rend confus l'ennemi

###### Ballade Suicidaire

Condition : Posséder un objet "musique"  
Type : Effet  
Energie : 4  
Attaque : 0  
Description : Décrit une mélodie envoutante qui rend confus l'ennemi et renvoie la prochaine attaque de l'ennemi contre lui même.


###### Appel de l'anneau

Condition : Posséder un "anneau"  
Type : Effet  
Energie : 4  
Attaque : 0  
Description : dirige toutes les attaques ennemis vers une cible choisis pendant 2 tour. Si la cible lance une attaque il se rend confus

###### Cri du Helheim

Condition : Posséder une arme "magique"  
Type : Effet  
Energie : 3  
Attaque : 0  
Description : Envoie un cri strident, Paralyse tout les ennemis

###### Bûcher

Condition : Aucune  
Type : Effet  
Energie : 2  
Attaque : 0  
Description : Envoie une buche embrasé sur l'ennemi. Brûle la cible.

###### Nuée empoisonné

Condition : Aucune  
Type : Effet  
Energie : 2  
Attaque : 0  
Description : Jette une fiole empoisonné. Empoisonne la cible 

###### Affaiblissement

Condition : Aucune  
Type : Effet  
Energie : 2  
Attaque : 0  
Description : Affaibli la cible. Rend vulnérable la cible

###### Saignée

Condition : Aucune  
Type :: Effet  
Energie : 2  
Attaque : 0  
Description : Fait saigner l'ennemi.



##### Carte Buff/Nerf

###### Augmentation / Faiblesse

Condition : Aucune  
Type : Buff/Nerf  
Energie : 2  
Attaque : 0  
Description : Augmente le coefficient d'attaque du lanceur / Baisse le coefficient d'attaque de la cible

###### Coup de main

Condition : Aucune  
Type : Buff  
Energie : 2  
Attaque : 0  
Description : Augmente le coefficient d'attaque de la cible  

###### Alliance / Demoralisation

Condition : Aucune  
Type : Buff / Nerf  
Energie : 4  
Attaque : 0  
Description : Augmente le coefficient d'attaque de tout les alliés. / Baisse le coefficient d'attaque des ennemis

###### Conversion offensive

Condition : Aucune  
Type : Buff  
Energie : 2  
Attaque : 0  
Description : Pioche une carte, si c'est une carte buff son cout sera nulle, sinon la carte pioché se transforme en carte "buff"

###### Puissance supérieure / Malédiction supérieur

Condition : Aucune ?  
Type : Buff / Nerf  
Energie : 5  
Attaque : 0  
Description :  Augmente toute les stats (attaque/defense/vitesse/points d'eveil/coup critique) du lanceur. / Baisse toutes les stats de la cible

###### Oracle Salvateur / Vague anhilatrice

Condition : Aucune ?  
Type : Buff / Nerf  
Energie : 7  
Attaque : 0  
Description : Augmente toutes les stats de ses alliées. / Baisse toutes les stats des ennemis

###### Renforcements / Resistance nulle

Condition : Aucune  
Type : Buff / Nerf  
Energie : 2  
Attaque : 0  
Description : Augmente le coefficient de défense du lanceur / Baisse le coefficient de défense de la cible

###### Aura protecteur

Condition : Aucune  
Type : Buff  
Energie : 3  
Attaque : 0  
Description : Augmente le coefficient de défense de l'équipe.

###### Roublardise / Poids Insurmontable

Condition : Aucune  
Type : Buff  
Energie : 2  
Attaque : 0  
Description : Augmente la vitesse du lanceur / Baisse la vitesse de la cible.

###### Vitesse Eclair

Condition : Aucune  
Type : Buff  
Energie : 2  
Attaque : 0  
Description : Augmente la vitesse de la cible

###### Point vitaux

Condition : Aucune
Type : Buff
Energie : 3  
Attaque : 0  
Description : Augmente les chances de coups critiques du lanceur


### Modalité de combat

Les personnages principaux possèdent 5 cartes dans sa main, avec un deck à un minimum de X(30?40?) cartes.Le jeu se déroule en tour par tour. Les cartes peuvent être dupliqué selon leur catégorie.

Carte commune (attaque/defense/effet/soin/etc...) : 5 maximum  
Carte personnage : 3 maximum  
Carte combiné : 2 maximum  

On commence avec une barre d'eveil vide, les points de vie/energie/passif/defense/vitesse de base.

Le joueur avec la plus grande vitesse commence le tour. Puis au prochain joueur.

Si un joueur augmente sa vitesse, la priorité est recalculé et c'est celui avec la vitesse la plus haute qui commence le tour suivant en premier.

#### Déroulé d'un tour : 

Joueur 1
Le joueur complète sa main pour qu'il est au moins 5 cartes sinon il pioche une carte si il en a déjà plus de 5

Le joueur lance ses cartes tant qu'il a de l'energie ou qu'il ne passe pas son tour.

Quant il n'a plus d'energie ou qu'il passe son tour c'est au tour du Joueur 2 de jouer.

Joueur 2

Le joueur complète sa main pour qu'il est au moins 5 cartes sinon il pioche une carte si il en a déjà plus de 5

Le joueur lance ses cartes tant qu'il a de l'energie ou qu'il ne passe pas son tour.

Si les joueurs ont vu leur statistiques modifiés on recalcule leur statistique puis on compare leur stat de vitesse si le joueur 2 à une vitesse plus grande que le joueur 1 pour ce tour il jouera en premier pour le second (cela veut dire qu'il peut jouer deux fois de suite.).

Tout les effets de cartes sont annulés à la fin du tour complet.

Possibilité de revenir à la vie après en réussissant un niveau bonus après être mort pour la 1ère fois
Si le joueur ne possède plus de carte que faire ???(faire passer son tour ? Game over ? pouvoir infliger un point de degât chaque tour ?)

### Gestion de l'IA

### Conclusion

## Installation de l'environnement Code

Nous avons utilisé un ensemble de technologies Javascript grâce à npm pour concevoir l'environnement de notre application avec React et Express le module de NodeJS.

## Conception de l'architecture MERN.

MERN Stack est un ensemble de technologies Javascript utilisé pour un déploiement rapide des applications Web. MERN comprend 4 technologies, MongoDB pour la gestion de base de données, le Framework Javascript Back End Express JS, React pour le front et le serveur Javascript NodeJS. Le Stack MERN est conçu pour rendre le processus de développement fluide et facile.

ReactJS est devenu une référence incontournable pour le développement d’interfaces utilisateurs riches et dynamiques avec une communauté qui compte des millions d'utilisateurs.

## Sources

https://greensock.com/gsap/ : Greensock est une bibliothèque d'animation en Javascript qui va nous permettre de gerer le coter "Jeux video" de manière plus poussive

https://maybelatergames.co.uk/tools/slaythespire/tierlist/cards/ironclad : Liste des cartes du jeux slay the spire.

https://shopify.github.io/draggable/ : Une Bibliothèque qui permet d'utiliser le drag&drop (notamment pour utiliser les cartes dans le jeux) en Javascript