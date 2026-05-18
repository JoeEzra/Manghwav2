// script.js

// --- 1. DONNÉES DES ŒUVRES ---
const dataManghwa = {
    "naruto": {
        title: "Naruto",
        image: "image/naruto.webp", 
        synopsis: "Dans le village de Konoha, un enfant cancre et rejeté nommé Naruto Uzumaki ambitionne de devenir le plus puissant des ninjas (Hokage) pour obtenir la reconnaissance de ses pairs.",
        episodes: "220 (Naruto) + 500 (Shippuden)",
        tomes: "72",
        saisons: "26 (au total)",
        powerSystem: "Chakra (énergie spirituelle et corporelle combinée)",
        characters: [
            { name: "Naruto Uzumaki", img: "image/naruto_uzumaki_perso.jpg" },
            { name: "Sasuke Uchiha", img: "image/sasuke_perso.jpg" },
            { name: "Kaguya Otsutsuki", img: "image/kaguya_perso.jpg" },
            { name: "Hagoromo Otsutsuki", img: "image/hagoromo_perso.jpg" },
            { name: "Minato Namikaze", img: "image/minato_perso.jpg" },
            { name: "Hinata Hyuga", img: "image/hinata_perso.jpg" },
            { name: "Sakura Haruno", img: "image/sakura_perso.jpg" },
            { name: "Tsunade", img: "image/tsunade_perso.jpg" },
            { name: "Itachi Uchiwa", img: "image/itachi_perso.jpg" },
            { name: "Madara Uchiwa", img: "image/madara_perso.jpg" }
        ]
    },
    "solo leveling": {
        title: "Solo Leveling",
        image: "image/solo.webp",
        synopsis: "Dans un monde où des portails relient notre monde à des donjons remplis de monstres, Sung Jin-Woo est connu comme le 'plus faible chasseur de l'humanité'. Après avoir frôlé la mort, il obtient la capacité unique de 'monter de niveau' sans limite.",
        episodes: "12 (Saison 1) + Saison 2",
        tomes: "14+ (Webtoon physique)",
        saisons: "2",
        powerSystem: "Mana / Système de Chasseur (Rangs E à S, Éveil)",
        characters: [
            { name: "Sung Jin-Woo", img: "image/jin_woo_perso.jpg" },
            { name: "Cha Hae-In", img: "image/cha_hae_in_perso.jpg" },
            { name: "Beru", img: "image/beru_perso.jpg" },
            { name: "Go Gon-Hee", img: "image/go_gun_hee_perso.jpg" }
        ]
    },
        "one piece": {
        title: "One Piece",
        image: "image/onepiece.webp",
        synopsis: "Monkey D. Luffy rêve de devenir le Roi des Pirates en trouvant le légendaire trésor 'One Piece'. Avec son équipage des Chapeaux de Paille, il parcourt le Grand Line dans des aventures épiques.",
        episodes: "1100+",
        tomes: "107+",
        saisons: "21+",
        powerSystem: "Fruits du Démon (Paramecia, Zoan, Logia) + Haki",
        characters: [
            { name: "Monkey D. Luffy", img: "image/luffy_perso.jpg" },
            { name: "Roronoa Zoro", img: "image/zoro_perso.jpg" },
            { name: "Gold D. Roger", img: "image/gold_roger_perso.jpg" },
            { name: "Sanji", img: "image/sanji_perso.jpg" },
            { name: "Monkey D. Garp", img: "image/garp_perso.jpg" },
            { name: "Shanks", img: "image/shanks_perso.jpg" },
            { name: "Marshall D. Teach", img: "image/barbe_noir_perso.jpg" }
        ]
    },
 
    "legend of the northen blade": {
        title: "Legend Of The Northen Blade",
        image: "image/lotnb.webp",
        synopsis: "Jin Mu-Won, fils du dernier chef des Gardiens du Nord, doit venger son père et restaurer l'honneur de son clan en maîtrisant les arts martiaux perdus de sa lignée.",
        episodes: "Non adapté en animé",
        tomes: "15+",
        saisons: "N/A",
        powerSystem: "Arts martiaux (murim) / Énergie intérieure (Ki)",
        characters: [
            { name: "Jin Mu-Won", img: "image/jin_muwon_perso.jpg" },
            { name: "Moyong Yul-Cheon", img: "image/moyong_yul_cheon_perso.jpg" },
            { name: "Geung Yoo Moyoung", img: "image/geung_yoo_moyong_perso.jpg" },
            { name: "Dam Soo-Cheon", img: "image/dam_soo_cheon_perso.jpg" },
            { name: "Eun Ha-Seol", img: "image/eun_ha_seol_perso.jpg" },
            { name: "Mun Cheon", img: "image/mun_cheon_perso.jpg" },
            { name: "Jin Kwan-Ho", img: "image/jin_kwanho_perso.jpg" }
        ]
    },
 
    "dragon ball": {
        title: "Dragon Ball",
        image: "image/dbz.webp",
        synopsis: "Goku, un guerrier d'une race extraterrestre appelée Saiyan, protège la Terre avec ses amis contre des menaces toujours plus puissantes, tout en cherchant à repousser ses propres limites.",
        episodes: "153 (DB) + 291 (DBZ) + 64 (GT) + 131 (Super)",
        tomes: "42 (original) + 23+ (Super)",
        saisons: "9 (DB+DBZ) + Super",
        powerSystem: "Ki / Transformations Super Saiyan",
        characters: [
            { name: "Son Goku", img: "image/goku_perso.jpg" },
            { name: "Vegeta", img: "image/vegeta_perso.jpg" },
            { name: "Gohan", img: "image/gohan_perso.jpg" },
            { name: "Piccolo", img: "image/picolo_perso.jpg" },
            { name: "Freezer", img: "image/freezer_perso.jpg" },
            { name: "Broly", img: "image/broly_perso.jpg" }
        ]
    },
 
    "tower of god": {
        title: "Tower Of God",
        image: "image/tog.webp",
        synopsis: "Bam entre dans une mystérieuse tour infinie pour retrouver Rachel, la seule lumière de sa vie. À chaque étage, il affronte des épreuves mortelles et découvre la vérité sur son identité.",
        episodes: "13 (Saison 1) + Saison 2 en cours",
        tomes: "N/A (Webtoon)",
        saisons: "2+",
        powerSystem: "Shinsu (énergie de la tour) / Rangs (E à S)",
        characters: [
            { name: "Bam (Yoru)", img: "image/bam_perso.jpg" },
            { name: "Khun Aguero Agnes", img: "image/khun_aguero_perso.jpg" },
            { name: "Urek Mazino", img: "image/urek_mazino_perso.jpg" },
            { name: "Rachel", img: "image/rachel_perso.jpg" },
            { name: "Endorsi Jahad", img: "image/endorsi_jahad_perso.jpg" }
        ]
    },
 
    "hunterxhunter": {
        title: "HunterxHunter",
        image: "image/hxh.webp",
        synopsis: "Gon Freecss veut devenir Chasseur comme son père disparu. Avec ses amis Killua, Kurapika et Leorio, il affronte des épreuves dangereuses et plonge dans un monde de mystères et de pouvoir.",
        episodes: "62 (1999) + 148 (2011)",
        tomes: "37+",
        saisons: "6 (2011)",
        powerSystem: "Nen (aura vitale avec 6 types : Renforcement, Émission, etc.)",
        characters: [
            { name: "Gon Freecss", img: "image/gon_perso.jpg" },
            { name: "Killua Zoldyck", img: "image/killua_perso.jpg" },
            { name: "Kurapika", img: "image/kurapika_perso.jpg" },
            { name: "Leorio", img: "image/leorio_perso.jpg" },
            { name: "Hisoka", img: "image/hisoka_perso.jpg" },
            { name: "Meruem", img: "image/meruem_perso.jpg" }
        ]
    },
 
    "god of high school": {
        title: "God Of High School",
        image: "image/goh.webp",
        synopsis: "Jin Mo-Ri participe au tournoi 'God Of High School' où les meilleurs combattants lycéens s'affrontent. La vérité derrière l'organisation est bien plus sombre que prévu.",
        episodes: "13",
        tomes: "N/A (Webtoon)",
        saisons: "1",
        powerSystem: "Charyeok (emprunter la puissance de dieux/êtres mythiques) + Arts martiaux",
        characters: [
            { name: "Jin Mo-Ri", img: "image/jin_mori_perso.jpg" },
            { name: "Han Dae-Wi", img: "image/han_daewi_perso.jpg" },
            { name: "Yu Mi-Ra", img: "image/yoo_mira_perso.jpg" },
            { name: "Park Il-Pyo", img: "image/park_ilpyo_perso.jpg" }
        ]
    },
 
    "full metal alchimiste": {
        title: "Full Metal Alchimiste",
        image: "image/fmal.webp",
        synopsis: "Les frères Elric, Edward et Alphonse, tentent de retrouver la Pierre Philosophale après avoir perdu leurs corps en voulant ressusciter leur mère via l'alchimie.",
        episodes: "51 (2003) + 64 (Brotherhood)",
        tomes: "27",
        saisons: "2 versions",
        powerSystem: "Alchimie (Transmutation de la matière via des cercles alchimiques)",
        characters: [
            { name: "Edward Elric", img: "image/edward_perso.jpg" },
            { name: "Alphonse Elric", img: "image/alphonse_perso.jpg" },
            { name: "Roy Mustang", img: "image/roy_perso.jpg" },
            { name: "Riza Hawkeye", img: "image/riza_hawkeye_perso.jpg" },
            { name: "Scar", img: "image/scar_perso.jpg" }
        ]
    },
 
    "unordinary": {
        title: "Unordinary",
        image: "image/unordinary.webp",
        synopsis: "Dans un monde où les super-pouvoirs sont la norme, John semble être l'un des rares sans capacité. Mais sa véritable puissance est soigneusement cachée, et les raisons vont bouleverser tout l'équilibre social.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Capacités (Abilities) classées par niveau de puissance",
        characters: [
            { name: "John Doe", img: "image/john_doe_perso.jpg" },
            { name: "Seraphina", img: "image/seraphina_perso.jpg" },
            { name: "Arlo", img: "image/arlo_perso.jpg" },
            { name: "Remi", img: "image/remi_perso.jpg" }
        ]
    },
 
    "death note": {
        title: "Death Note",
        image: "image/death.webp",
        synopsis: "Light Yagami trouve un carnet surnaturel qui tue toute personne dont le nom y est inscrit. Il décide de purger le monde des criminels, mais le détective L se lance à ses trousses.",
        episodes: "37",
        tomes: "12",
        saisons: "1",
        powerSystem: "Death Note (carnet de mort des Shinigami)",
        characters: [
            { name: "Light Yagami", img: "image/light_perso.jpg" },
            { name: "L Lawliet", img: "image/l_perso.jpg" },
            { name: "Ryuk", img: "image/ryuk_perso.jpg" },
            { name: "Misa Amane", img: "image/misa_perso.jpg" },
            { name: "Near", img: "image/near_perso.jpg" }
        ]
    },
 
    "noblesse": {
        title: "Noblesse",
        image: "image/noblesse.webp",
        synopsis: "Cadis Etrama Di Raizel, un noble vampirique d'une puissance inégalée, se réveille après 820 ans de sommeil et s'inscrit dans un lycée coréen moderne, ignorant tout de la société actuelle.",
        episodes: "13 (ONA) + Film",
        tomes: "N/A (Webtoon)",
        saisons: "1",
        powerSystem: "Sang noble / Aura noble (Noblesse Oblige)",
        characters: [
            { name: "Raizel", img: "image/raizel_perso.jpg" },
            { name: "Frankenstein", img: "image/frankenstein_perso.jpg" },
            { name: "M-21", img: "image/m21_perso.jpg" },
            { name: "Regis", img: "image/regis_perso.jpg" }
        ]
    },
 
    "gto": {
        title: "GTO (Great Teacher Onizuka)",
        image: "image/gto.webp",
        synopsis: "Eikichi Onizuka, ex-membre de gang et motard, réalise son rêve improbable : devenir professeur. Sa méthode non conventionnelle transforme une classe ingérable en élèves épanouis.",
        episodes: "43",
        tomes: "25",
        saisons: "1",
        powerSystem: "Aucun (slice of life / comédie)",
        characters: [
            { name: "Eikichi Onizuka", img: "image/onizuka_perso.jpg" },
            { name: "Urumi Kanzaki", img: "image/kanzaki_perso.jpg" },
            { name: "Yoshito Kikuchi", img: "image/kikuchi_perso.jpg" }
        ]
    },
 
    "lookism": {
        title: "Lookism",
        image: "image/lookism.webp",
        synopsis: "Daniel Park, un lycéen grassouillet harcelé, se réveille un matin dans un deuxième corps d'une beauté extraordinaire. Il découvre alors à quel point l'apparence physique dicte la valeur sociale.",
        episodes: "8 (Netflix ONA)",
        tomes: "N/A (Webtoon)",
        saisons: "1",
        powerSystem: "Combat au corps à corps / Gangs / Double corps",
        characters: [
            { name: "Daniel Park", img: "image/daniel_park_perso.jpg" },
            { name: "Jay Hong", img: "image/jay_hong_perso.jpg" },
            { name: "Zack Lee", img: "image/zack_lee_perso.jpg" },
            { name: "Gun", img: "image/jong_gun_perso.jpg" }
        ]
    },
 
    "bleach": {
        title: "Bleach",
        image: "image/bleach.webp",
        synopsis: "Ichigo Kurosaki, un lycéen capable de voir les esprits, devient Shinigami (Dieu de la Mort) pour protéger les vivants et les morts contre les Hollows, des esprits maléfiques.",
        episodes: "366 + TYBW en cours",
        tomes: "74",
        saisons: "4 + TYBW",
        powerSystem: "Zanpakuto / Reiatsu / Bankai",
        characters: [
            { name: "Ichigo Kurosaki", img: "image/ichigo_perso.jpg" },
            { name: "Rukia Kuchiki", img: "image/rukia_perso.jpg" },
            { name: "Sosuke Aizen", img: "image/aizen_perso.jpg" },
            { name: "Byakuya Kuchiki", img: "image/byakuya_perso.jpg" },
            { name: "Uryu Ishida", img: "image/ishida_perso.jpg" }
        ]
    },
 
    "the breaker": {
        title: "The Breaker",
        image: "image/thebreaker.webp",
        synopsis: "Shi-Woon Yi, harcelé à l'école, découvre que son nouveau professeur est un maître des arts martiaux du monde souterrain Murim. Il devient son disciple dans un voyage initiatique violent.",
        episodes: "Non adapté",
        tomes: "10 + New Waves + Dark Era",
        saisons: "N/A",
        powerSystem: "Ki / Arts martiaux Murim",
        characters: [
            { name: "Shi-Woon Yi", img: "image/shi_woo_perso.jpg" },
            { name: "Chun-Woo Han", img: "image/chun_woo_han_perso.jpg" },
            { name: "So-Chun Hyuk", img: "image/so_chun_hyuk_perso.jpg" }
        ]
    },
 
    "city hunter": {
        title: "City Hunter",
        image: "image/nickylarson.webp",
        synopsis: "Ryo Saeba, alias City Hunter, est un mercenaire hors pair qui opère à Shinjuku. Avec sa partenaire Kaori, il accomplit des missions impossibles tout en cachant son passé douloureux.",
        episodes: "140+",
        tomes: "35",
        saisons: "4",
        powerSystem: "Aucun (action / comédie romantique)",
        characters: [
            { name: "Ryo Saeba", img: "image/ryo_perso.jpg" },
            { name: "Kaori Makimura", img: "image/kaori_perso.jpg" },
            { name: "Umibozu", img: "image/umibozu_perso.jpg" }
        ]
    },
 
    "wind breaker": {
        title: "Wind Breaker",
        image: "image/windb.webp",
        synopsis: "Shishitoren menace la ville de Furin. Jay Go, un lycéen solitaire à la réputation de bagarreur, intègre un gang protecteur et découvre ce que signifie se battre pour quelque chose de plus grand que soi.",
        episodes: "13 (Saison 1) + Saison 2 en cours",
        tomes: "N/A (Webtoon)",
        saisons: "2",
        powerSystem: "Combat au corps à corps / Vitesse",
        characters: [
            { name: "Jay Joe ", img: "image/jay_joe_perso.jpg" },
            { name: "Dom Kang", img: "image/dom_kang_perso.jpg" },
            { name: "Shelly", img: "image/shelly_perso.jpg" },
            { name: "Minu", img: "image/minu_perso.jpg" },
            { name: "June", img: "image/june_perso.jpg" },
            { name: "Vinny Hong", img: "image/vinny_hong_perso.jpg" },
            { name: "Monster", img: "image/monster_perso.jpg" },
            { name: "Kenshiro", img: "image/kenshiro_perso.jpg" },
            { name: "Owen", img: "image/owen_perso.jpg" }
        ]
    },
 
    "fairy tail": {
        title: "Fairy Tail",
        image: "image/fairy.webp",
        synopsis: "Lucy Heartfilia rejoint la guilde de magie Fairy Tail et forme une équipe avec Natsu Dragneel, un Chevalier du Dragon, et leurs amis pour vivre des aventures épiques et défendre leurs valeurs.",
        episodes: "328",
        tomes: "63",
        saisons: "9",
        powerSystem: "Magie (Dragon Slayer, Céleste, Glace, etc.)",
        characters: [
            { name: "Natsu Dragneel", img: "image/natsu_perso.jpg" },
            { name: "Lucy Heartfilia", img: "image/lucy_perso.jpg" },
            { name: "Erza Scarlett", img: "image/erza_perso.jpg" },
            { name: "Gray Fullbuster", img: "image/gray_perso.jpg" },
            { name: "Mavis Vermillion", img: "image/mavis_perso.jpg" }
        ]
    },
 
    "the beginning after the end": {
        title: "The Beginning After The End",
        image: "image/tbate.webp",
        synopsis: "Le roi Grey, monarque le plus puissant de son monde, se réincarne dans un monde de magie et de bêtes. Il utilise ses connaissances passées pour construire une vie différente, mais ses ennemis d'antan le retrouvent.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Mana / Affinités élémentaires / Bêtes contractées",
        characters: [
            { name: "Arthur Leywin", img: "image/arthur_perso.jpg" },
            { name: "Tessia Eralith", img: "image/tessia_perso.jpg" },
            { name: "Sylvie", img: "image/sylvie_perso.jpg" },
            { name: "Elijah Krauss", img: "image/elijah_perso.jpg" }
        ]
    },
 
    "jujutsu kaisen": {
        title: "Jujutsu Kaisen",
        image: "image/jjk.webp",
        synopsis: "Yuji Itadori avale un doigt maudit du démon Ryomen Sukuna pour sauver ses camarades. Il intègre l'école de sorcellerie Jujutsu et sa vie bascule dans un monde d'exorcismes et de malédictions.",
        episodes: "48+",
        tomes: "26+",
        saisons: "2+",
        powerSystem: "Énergie maudite (Jujutsu) / Techniques innées",
        characters: [
            { name: "Yuji Itadori", img: "image/yuji_perso.jpg" },
            { name: "Megumi Fushiguro", img: "image/megumi_perso.jpg" },
            { name: "Nobara Kugisaki", img: "image/nobara_perso.jpg" },
            { name: "Gojo Satoru", img: "image/gojo_perso.jpg" },
            { name: "Aoi Todo", img: "image/aoi_todo_perso.jpg" },
            { name: "Ryomen Sukuna", img: "image/sukuna_perso.jpg" }
        ]
    },
 
    "star-embracing swordmaster": {
        title: "Star-Embracing Swordmaster",
        image: "image/vlad.webp",
        synopsis: "Razen, un jeune homme rejeté comme sans talent, possède en réalité une affinité unique avec toutes les étoiles. Sa destinée cachée va bouleverser l'équilibre du monde de l'épée.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Affinité stellaire / Arts de l'épée",
        characters: [
            { name: "Vlad De Sohara", img: "image/vlad_perso.jpg" },
            { name: "Joseph Bayezid", img: "image/joseph_perso.jpg" },
            { name: "Alicia Heinal", img: "image/alicia_perso.jpg" },
            { name: "Zemina", img: "image/zemina_perso.jpg" },
            { name: "Mircea Dragulia", img: "image/mircea_dragulia_perso.jpg" },
            { name: "Justia", img: "image/justia_perso.jpg" },
            { name: "Jager", img: "image/jager_perso.jpg" },
            { name: "Rutiger Bayezid", img: "image/rutiger_perso.jpg" }
        ]
    },
 
    "demon slayer": {
        title: "Demon Slayer",
        image: "image/demonsl.webp",
        synopsis: "Tanjiro Kamado voit sa famille massacrée par des démons. Sa sœur Nezuko survit mais est transformée en démon. Il devient pourfendeur de démons pour trouver un remède et venger les siens.",
        episodes: "44+",
        tomes: "23",
        saisons: "3+",
        powerSystem: "Souffles (styles de combat) / Marque du pourfendeur",
        characters: [
            { name: "Tanjiro Kamado", img: "image/tanjiro_perso.jpg" },
            { name: "Nezuko Kamado", img: "image/nezuko_perso.jpg" },
            { name: "Zenitsu Agatsuma", img: "image/zenitsu_perso.jpg" },
            { name: "Inosuke Hashibira", img: "image/inosuke_perso.jpg" },
            { name: "Muzan Kibutsuji", img: "image/muzan_perso.jpg" }
        ]
    },
 
    "chronicles of a lazy sovereign": {
        title: "Chronicles Of A Lazy Sovereign",
        image: "image/lazysovereign.webp",
        synopsis: "Un homme réincarné dans le corps d'un prince paresseux d'un empire fantastique tente de vivre tranquillement, mais ses talents cachés et les intrigues politiques le rattrapent sans cesse.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Magie royale / Stratégie politique",
        characters: [
            { name: "Wi Yeonho", img: "image/wi_yeonho_perso.jpg" },
            { name: "Seria", img: "image/seria_perso.jpg" }
        ]
    },
 
    "dr stone": {
        title: "Dr Stone",
        image: "image/drstone.webp",
        synopsis: "Après une mystérieuse pétrification de toute l'humanité, Senku Ishigami se réveille des millénaires plus tard. Avec son génie scientifique, il entreprend de reconstruire la civilisation depuis zéro.",
        episodes: "35 + Stone Wars + New World",
        tomes: "26",
        saisons: "3",
        powerSystem: "Science (aucune magie) / Ingéniosité et technologie",
        characters: [
            { name: "Senku Ishigami", img: "image/senku_perso.jpg" },
            { name: "Taiju Oki", img: "image/taiju_perso.jpg" },
            { name: "Tsukasa Shishio", img: "image/tsukasa_perso.jpg" },
            { name: "Chrome", img: "image/chrome_perso.jpg" },
            { name: "Kohaku", img: "image/kohaku_perso.jpg" }
        ]
    },
 
    "a regressor's tale of cultivation": {
        title: "A Regressor's Tale Of Cultivation",
        image: "image/cultuvator.webp",
        synopsis: "Un cultivateur qui a atteint le sommet de sa voie régresse dans le temps pour corriger ses erreurs passées et atteindre une immortalité véritable avec ceux qu'il a perdus.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Cultivation / Qi / Régression temporelle",
        characters: [
            { name: "Seo Eun-Ha", img: "image/seoeunha_perso.jpg" },
            { name: "Mok Hyeon", img: "image/mokhyeon_perso.jpg" }
        ]
    },
 
    "the promised neverland": {
        title: "The Promised Neverland",
        image: "image/tpneverland.webp",
        synopsis: "Emma, Norman et Ray vivent dans un orphelinat idyllique. Quand ils découvrent la terrible vérité sur leur destin, ils complotent une évasion périlleuse sous l'œil vigilant de leur 'mère'.",
        episodes: "23",
        tomes: "20",
        saisons: "2",
        powerSystem: "Intelligence / Survie (sans magie)",
        characters: [
            { name: "Emma", img: "image/emma_perso.jpg" },
            { name: "Norman", img: "image/norman_perso.jpg" },
            { name: "Ray", img: "image/ray_perso.jpg" },
            { name: "Isabella", img: "image/isabella_perso.jpg" }
        ]
    },
 
    "wild ranker": {
        title: "Wild Ranker",
        image: "image/wildranker.webp",
        synopsis: "Dans un monde de chasseurs et de donjons, un combattant aux méthodes brutales et instinctives gravit les rangs sans suivre les règles conventionnelles du système.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Système de rangs / Combat instinctif",
        characters: [
            { name: "Protagoniste", img: "image/wildranker_mc_perso.jpg" }
        ]
    },
 
    "fire force": {
        title: "Fire Force",
        image: "image/fire force.webp",
        synopsis: "Dans un futur où des humains spontanément combustibles, appelés Infernaux, terrorisent la société, Shinra Kusakabe rejoint la Brigade des Pompiers Spéciaux pour percer le mystère de ces phénomènes.",
        episodes: "48",
        tomes: "34",
        saisons: "2",
        powerSystem: "Pyrokinésie (Ignition) / Adolla Burst",
        characters: [
            { name: "Shinra Kusakabe", img: "image/shinra_perso.jpg" },
            { name: "Arthur Boyle", img: "image/arthur_ff_perso.jpg" },
            { name: "Maki Oze", img: "image/maki_oze_perso.jpg" },
            { name: "Captain Obi", img: "image/obi_perso.jpg" }
        ]
    },
 
    "the divine demon grand ascension": {
        title: "The Divine Demon Grand Ascension",
        image: "image/tddga.webp",
        synopsis: "Un démon légendaire réincarné dans un monde de cultivation cherche à atteindre les plus hauts sommets tout en jonglant entre son identité démoniaque et sa nouvelle vie.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Cultivation démonique / Qi démoniaque",
        characters: [
            { name: "Bu Eun-Seol", img: "image/bu_eun_seol_perso.jpg" },
            { name: "Bu Jan-Yang", img: "image/bu_jan_yang_perso.jpg" },
            { name: "Dan So-Ok", img: "image/dan_so_ok_perso.jpg" },
            { name: "Cheon Woon", img: "image/cheon_woon_perso.jpg" }
        ]
    },
 
    "vinland saga": {
        title: "Vinland Saga",
        image: "image/vs.webp",
        synopsis: "Thorfinn, fils d'un grand guerrier viking, jure de venger son père tué par le mercenaire Askeladd. Sa quête de vengeance le plonge au cœur des guerres vikings entre Angleterre et Danemark.",
        episodes: "48",
        tomes: "27+",
        saisons: "2",
        powerSystem: "Combat médiéval viking (aucune magie)",
        characters: [
            { name: "Thorfinn", img: "image/thorfinn_perso.jpg" },
            { name: "Askeladd", img: "image/askelad_perso.jpg" },
            { name: "Canute", img: "image/canute_perso.jpg" },
            { name: "Thorkell", img: "image/thorkell_perso.jpg" }
        ]
    },
 
    "zombie dad": {
        title: "Zombie Dad",
        image: "image/zombiedad.webp",
        synopsis: "Un père de famille se réveille en zombie mais conserve sa conscience. Il tente de protéger sa famille et de trouver un remède tout en cachant sa véritable nature dans un monde post-apocalyptique.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Capacités de zombie / Évolution",
        characters: [
            { name: "Père Zombie", img: "image/zombiedad_mc_perso.jpg" },
            { name: "Sa fille", img: "image/zombiedad_daughter_perso.jpg" }
        ]
    },
 
    "blue lock": {
        title: "Blue Lock",
        image: "image/bluelock.webp",
        synopsis: "Après l'échec du Japon en Coupe du Monde, la fédération lance le projet Blue Lock : 300 attaquants enfermés dans une installation pour créer l'attaquant égoïste ultime capable de scorer en finale mondiale.",
        episodes: "24 + Season 2",
        tomes: "29+",
        saisons: "2",
        powerSystem: "Compétences footballistiques / Éveil d'aptitudes spéciales",
        characters: [
            { name: "Yoichi Isagi", img: "image/yoichi_perso.jpg" },
            { name: "Meguru Bachira", img: "image/bachira_perso.jpg" },
            { name: "Seishiro Nagi", img: "image/nagi_perso.jpg" },
            { name: "Rensuke Kunigami", img: "image/kunigami_perso.jpg" },
            { name: "Rin Itoshi", img: "image/rin_perso.jpg" }
        ]
    },
 
    "the regressed mercenary's machinations": {
        title: "The Regressed Mercenary's Machinations",
        image: "image/mercenary.webp",
        synopsis: "Un mercenaire légendaire régresse dans le temps et utilise sa vaste expérience de combat et ses connaissances du futur pour réécrire son destin et bâtir un empire.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Combat / Stratégie militaire / Régression",
        characters: [
            { name: "Ghislain Perdium", img: "image/ghislain_perdium_perso.jpg" },
            { name: "Rosalyn Branford", img: "image/rosalyn_brandford_perso.jpg" },
            { name: "Vanessa", img: "image/vanessa_perso.jpg" },
            { name: "Claude", img: "image/claude_perso.jpg" },
            { name: "Belinda", img: "image/belinda_perso.jpg" },
            { name: "Lucas", img: "image/lucas_perso.jpg" }
            
        ]
    },
 
    "black clover": {
        title: "Black Clover",
        image: "image/blackclo.webp",
        synopsis: "Asta, né sans magie dans un monde où elle est universelle, rêve de devenir Roi des Mages. Grâce à un grimoire de 5 trèfles aux pouvoirs anti-magie, il défie tous les pronostics.",
        episodes: "170",
        tomes: "36+",
        saisons: "4+",
        powerSystem: "Magie / Grimoires / Anti-magie (Asta)",
        characters: [
            { name: "Asta", img: "image/asta_perso.jpg" },
            { name: "Yuno", img: "image/yuno_perso.jpg" },
            { name: "Noelle Silva", img: "image/noel_perso.jpg" },
            { name: "Juluis Novachrono", img: "image/juluis_novachrono_perso.jpg" },
            { name: "Yami Sukehiro", img: "image/yami_perso.jpg" }
        ]
    },
 
    "ice lord": {
        title: "Ice Lord",
        image: "image/icelord.webp",
        synopsis: "Un seigneur de glace d'une puissance colossale navigue dans un monde de politique et de guerre, utilisant ses pouvoirs glaçants pour imposer sa domination et protéger ce qui lui est cher.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Cryokinésie / Aura glaciale",
        characters: [
            { name: "Protagoniste Glace", img: "image/icelord_mc_perso.jpg" }
        ]
    },
 
    "tokyo ghoul": {
        title: "Tokyo Ghoul",
        image: "image/tokyog.webp",
        synopsis: "Ken Kaneki, un lycéen ordinaire, survit à une attaque de Goule mais se retrouve lui-même transformé en hybride mi-humain, mi-goule. Il tente de trouver sa place dans ces deux mondes qui se déchirent.",
        episodes: "48",
        tomes: "14 + :re (16)",
        saisons: "4",
        powerSystem: "Kagune (organe de combat des goules) / Quinque (armes des chasseurs)",
        characters: [
            { name: "Ken Kaneki", img: "image/kaneki_perso.jpg" },
            { name: "Touka Kirishima", img: "image/touka_perso.jpg" },
            { name: "Rize Kamishiro", img: "image/rize_perso.jpg" },
            { name: "Kishou Arima", img: "image/arima_perso.jpg" }
        ]
    },
 
    "bad born blood": {
        title: "Bad Born Blood",
        image: "image/badborn.webp",
        synopsis: "Une histoire de rivalités entre clans, de sang et de trahison où le protagoniste, né du mauvais côté de la ligne, doit survivre et s'imposer dans un monde de gangs et de violence.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Combat / Héritage sanguin",
        characters: [
            { name: "Protagoniste", img: "image/badborn_mc_perso.jpg" }
        ]
    },
 
    "tokyo revenger": {
        title: "Tokyo Revenger",
        image: "image/tokyorevenger.webp",
        synopsis: "Takemichi Hanagaki, raté de 26 ans, découvre qu'il peut voyager dans le passé. Il tente de sauver son ex-petite amie assassinée en changeant le futur depuis ses années lycée dans les gangs de Tokyo.",
        episodes: "63",
        tomes: "31",
        saisons: "3",
        powerSystem: "Voyage temporel / Gangs de délinquants",
        characters: [
            { name: "Takemichi Hanagaki", img: "image/takemichi_perso.jpg" },
            { name: "Mikey (Manjiro Sano)", img: "image/mikey_perso.jpg" },
            { name: "Draken (Ken Ryuguji)", img: "image/draken_perso.jpg" },
            { name: "Hinata Tachibana", img: "image/tachibana_perso.jpg" }
        ]
    },
 
    "questim": {
        title: "Questim",
        image: "image/questim.webp",
        synopsis: "Dans un monde de quêtes et de systèmes de jeu intégrés à la réalité, le protagoniste explore des donjons et relève des défis pour monter en puissance et percer les mystères de cet univers.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Système de quêtes / Compétences RPG",
        characters: [
            { name: "Kim Soo-Hyun", img: "image/kim_soohyun_perso.jpg" },
            { name: "Haru Seong", img: "image/haru_seong_perso.jpg" },
            { name: "Chaerin Baek", img: "image/chaerin_baek_perso.jpg" },
            { name: "Gukja Yang", img: "image/gukja_yang_perso.jpg" },
            { name: "Johan Seong", img: "image/johan_seong_perso.jpg" },
            { name: "Choyun", img: "image/choyun_perso.jpg" },
            { name: "Lee Jihyun", img: "image/lee_jihyeon_perso.jpg" }
        ]
    },
 
    "captain tsubasa": {
        title: "Captain Tsubasa",
        image: "image/tsubasa.webp",
        synopsis: "Tsubasa Ozora rêve de devenir le meilleur joueur de football du monde. Avec son style flamboyant et sa passion dévorante, il gravit les échelons du football japonais jusqu'aux scènes internationales.",
        episodes: "124 (original) + 52 (2018)",
        tomes: "37 + suites",
        saisons: "Plusieurs versions",
        powerSystem: "Compétences footballistiques surhumaines",
        characters: [
            { name: "Tsubasa Ozora", img: "image/tsubasa_perso.jpg" },
            { name: "Genzo Wakabayashi", img: "image/genzo_perso.jpg" },
            { name: "Hyuga Kojiro", img: "image/kojiro_perso.jpg" }
        ]
    },
 
    // ===================== MANHWAS SUPPLÉMENTAIRES =====================
 
    "lecteur omniscient": {
        title: "Lecteur Omniscient",
        image: "image/ltomni.webp",
        synopsis: "Kim Dokja est le seul lecteur d'un roman web obscur. Quand le monde réel commence à suivre exactement l'intrigue du roman, il utilise sa connaissance parfaite de l'histoire pour survivre.",
        episodes: "Non adapté (animé annoncé)",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Constellations / Compétences obtenues via scénarios",
        characters: [
            { name: "Kim Dokja", img: "image/kim_dokja_perso.jpg" },
            { name: "Yoo Jonghyuk", img: "image/yoo_joonghyu_perso.jpg" },
            { name: "Han Sooyoung", img: "image/han_sooyoung_perso.jpg" }
        ]
    },
 
    "the return of the blossoming blade": {
        title: "The Return Of The Blossoming Blade",
        image: "image/trotbb.webp",
        synopsis: "Un maître de l'épée légendaire régresse dans le passé et reconstruit son chemin vers la puissance absolue, tout en corrigeant les tragédies de sa vie antérieure.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Arts de l'épée / Ki / Régression",
        characters: [
            { name: "Cheongmyeong", img: "image/cheongm_yeong_perso.jpg" },
            { name: "Jogeol", img: "image/jogeol_perso.jpg" },
            { name: "Yoo Iseol", img: "image/yoo_iseol_perso.jpg" },
            { name: "Yunjong", img: "image/yunjong_perso.jpg" },
            { name: "Tang Soso", img: "image/tang_soso_perso.jpg" },
            { name: "Tang Bo", img: "image/tang_bo_perso.jpg" },
            { name: "Baek Cheon", img: "image/baek_cheon_perso.jpg" },
            { name: "Cheon Ma", img: "image/cheon_ma_perso.jpg" },
            { name: "Cheongmun", img: "image/cheongmun_perso.jpg" }
        ]
    },
 
    "nano machine": {
        title: "Nano Machine",
        image: "image/nano.webp",
        synopsis: "Cheon Yeo-Woon, un bâtard méprisé dans un clan martial, reçoit des nanomachines d'un descendant du futur. Ces machines boostent ses capacités et lui permettent de devenir invincible.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Nanomachines futuristes + Arts martiaux Murim",
        characters: [
            { name: "Cheon Yeo-Woon", img: "image/cheon_yeo_woon_perso.jpg" },
            { name: "Hu Bong", img: "image/hu_bong_perso.jpg" },
            { name: "Blade God", img: "image/blade_god_perso.jpg" },
            { name: "Wang Yogun", img: "image/wang_yogun_perso.jpg" },
            { name: "Mun Ku", img: "image/mun_ku_perso.jpg" }
            
        ]
    },
 
    "infinite mage": {
        title: "Infinite Mage",
        image: "image/infinite.webp",
        synopsis: "Shirone, fils de paysans, rêve de devenir mage dans une société où la magie est réservée à l'élite. Admis dans une académie de magie, son talent hors norme va bousculer l'ordre établi.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Magie / Rêverie (Spirit Zone)",
        characters: [
            { name: "Shirone", img: "image/shirone_perso.jpg" },
            { name: "Iruki", img: "image/iruki_perso.jpg" },
            { name: "Nade", img: "image/nade_perso.jpg" }
        ]
    },
 
    "swordmaster's youngest son": {
        title: "Swordmaster's Youngest Son",
        image: "image/sys.webp",
        synopsis: "Jin Runcandel, le fils le moins talentueux du plus grand clan d'épéistes, régresse après avoir été exécuté. Il utilise ses mémoires passées pour devenir le plus puissant des Runcandel.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Arts de l'épée Runcandel / Pactes magiques",
        characters: [
            { name: "Jin Runcandel", img: "image/jin_runcandel_perso.jpg" },
            { name: "Murakan", img: "image/murakan_perso.jpg" },
            { name: "Luna Runcandel", img: "image/luna_perso.jpg" },
            { name: "Joshua Runcandel", img: "image/joshua_runcandel_perso.jpg" },
            { name: "Chiron Runcandel", img: "image/chiron_perso.jpg" },
            { name: "Rosa Runcandel", img: "image/rosa_runcandel_perso.jpg" },
            { name: "Gilly Mcrolan", img: "image/gilly_perso.jpg" }
        ]
    },
 
    "standard of reincarnation": {
        title: "Standard Of Reincarnation",
        image: "image/sor.webp",
        synopsis: "Le plus grand épéiste, ennemi juré d'un clan, se réincarne dans le corps du fils rejeté de ce même clan. Il doit naviguer entre son passé ennemi et son nouveau destin.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Arts de l'épée / Héritage martial",
        characters: [
            { name: "Daven", img: "image/daven_perso.jpg" }
        ]
    },
 
    "murim login": {
        title: "Murim Login",
        image: "image/murimlog.webp",
        synopsis: "Un chasseur de bas rang trouve une tablette VR qui le transporte dans un monde de Murim. En gagnant des compétences dans le jeu, ces capacités se transfèrent dans le monde réel.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Arts martiaux Murim (VR → Réel) / Ki",
        characters: [
            { name: "Jin Taekyung", img: "image/jin_tae_kyung_perso.jpg" },
            { name: "Jin Wikyung", img: "image/jin_wi_kyung_perso.jpg" },
            { name: "Eun Seo-Wol", img: "image/eun_seo_wol_perso.jpg" },
            { name: "Kim Hwajong", img: "image/kim_hwajong_perso.jpg" },
            { name: "Cheongpung", img: "image/cheongpung_perso.jpg" },
            { name: "Choi Min-Woo", img: "image/choi_min_woo_perso.jpg" },
            { name: "Mae Jong-Hak", img: "image/mae_jong_hak_perso.jpg" },
            { name: "Hong Dao", img: "image/hong_dao_perso.jpg" },
            { name: "Lee Jungryong", img: "image/lee_jungryong_perso.jpg" },
            { name: "Medecin Divin", img: "image/jin_tae_kyung_perso.jpg" }
        ]
    },
 
    "damn reincarnation": {
        title: "Damn Reincarnation",
        image: "image/damnreincarnation.webp",
        synopsis: "Hamel, un héros légendaire mort en sacrifiant sa vie, se réincarne en Eugène Lionhart, un jeune noble. Il cherche à terminer la mission inachevée de sa vie passée.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Magie / Combat héroïque / Héritage divin",
        characters: [
            { name: "Eugène Lionhart (Hamel)", img: "image/eugene_perso.jpg" },
            { name: "Christina", img: "image/christina_perso.jpg" }
        ]
    },
 
    "eleceed": {
        title: "Eleceed",
        image: "image/eleceed.webp",
        synopsis: "Jiwoo Seo, un lycéen aux réflexes surhumains liés à l'électricité, rencontre Kayden, un agent secret dans le corps d'un chat. Ensemble ils évoluent dans un monde d'utilisateurs de pouvoirs.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Capacités d'éveil / Électrokinésie",
        characters: [
            { name: "Jiwoo Seo", img: "image/jiwoo_perso.jpg" },
            { name: "Kayden", img: "image/kayden_perso.jpg" },
            { name: "Yoo Jin Young", img: "image/yoo_jin_young_perso.webp" },
            { name: "Gestella", img: "image/gestella_perso.jpg" },
            { name: "Pluton", img: "image/pluton_perso.jpg" },
            { name: "Kartein", img: "image/kartein_perso.jpg" }
        
        
        ]
    },
 
    "absolute sword sense": {
        title: "Absolute Sword Sense",
        image: "image/sword sense.webp",
        synopsis: "Soh Woonhwi, espion d'un clan démoniaque, régresse dans le passé avec la capacité d'entendre parler les épées. Il utilise ce don unique pour changer son destin.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Sens de l'épée / Communication avec les lames / Ki",
        characters: [
            { name: "Soh Woonhwi", img: "image/soh_woonhwi_perso.jpg" },
            { name: "Sima Chak", img: "image/sima_chak_perso.jpg" },
            { name: "Baek Hyang-Muk", img: "image/baek_hyang_muk_perso.jpg" },
            { name: "Cheon Mu-Seong", img: "image/cheon_mu_seong_perso.jpg" },
            { name: "Jin Song-Baek", img: "image/jin_song_baek_perso.jpg" },
            { name: "Hyuk Cheon-Man", img: "image/hyuk_cheon_man_perso.jpg" },
            { name: "Baek Hye-Hyang", img: "image/baek_hye_hyang_perso.jpg" },
            { name: "Seolbaek", img: "image/seol_baek_perso.jpg" }
        ]
    },
 
    "the world after the fall": {
        title: "The World After The Fall",
        image: "image/twatf.webp",
        synopsis: "Dans un donjon sans issue, tous les survivants ont fui vers le passé sauf un homme : Jaehwan. Il choisit de percer le donjon seul et découvre un monde au-delà de toute imagination.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Volonté / Compétences de régresseurs / Seigneurs",
        characters: [
            { name: "Jaehwan", img: "image/jaehwan_perso.jpg" },
            { name: "Yoo Seolha", img: "image/yoo_seolha_perso.jpg" },
            { name: "Kartlon Javier", img: "image/kartlon_perso.webp" },
            { name: "Sameng Garam", img: "image/sameng_garam_perso.jpg" }
        ]
    },
 
    "x & ash": {
        title: "X & Ash",
        image: "image/x&ash.webp",
        synopsis: "Une histoire intense entre deux personnages aux origines et pouvoirs opposés, liés par un destin commun dans un univers sombre et complexe.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Pouvoirs spéciaux / Combat",
        characters: [
            { name: "X", img: "image/x_perso.jpg" },
            { name: "Ash", img: "image/ash_perso.jpg" }
        ]
    },
 
    "high school mercenary": {
        title: "High School Mercenary",
        image: "image/hsm.webp",
        synopsis: "Un mercenaire légendaire en mission sous couverture comme lycéen. Sa brutalité de vétéran heurte le monde ordinaire du lycée avec un résultat souvent comique mais toujours explosif.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Combat militaire / Tactiques de mercenaire",
        characters: [
            { name: "Yoo Ijin", img: "image/yoo_ijin_perso.jpg" },
            { name: "002", img: "image/002_perso.jpg" },
            { name: "003", img: "image/003_perso.jpg" },
            { name: "008", img: "image/y008_perso.jpg" },
            { name: "004", img: "image/004_perso.jpg" },
            { name: "016", img: "image/016_perso.webp" },
            { name: "005", img: "image/005_perso.jpg" },
            { name: "Yoo Ijin", img: "image/006_perso.jpg" }
        ]
    },
 
    "jungle juice": {
        title: "Jungle Juice",
        image: "image/junglej.webp",
        synopsis: "Suchan Jang, un étudiant modèle, voit sa vie basculer quand un spray expérimental lui donne des ailes d'insecte. Il plonge dans un monde caché de mutants à insectes vivant dans l'ombre.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Mutations insectes / Capacités physiques augmentées",
        characters: [
            { name: "Suchan Jang", img: "image/suchan_perso.jpg" },
            { name: "Hyunbin Joo", img: "image/hyunbin_joo_perso.jpg" }
        ]
    },
 
    "hectopascal": {
        title: "Hectopascal",
        image: "image/hecto.webp",
        synopsis: "Dans un monde où certains humains possèdent des capacités surnaturelles liées à la pression atmosphérique, le protagoniste doit survivre dans un système de combats et d'organisations secrètes.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Pression atmosphérique / Capacités physiques",
        characters: [
            { name: "Park Han-Jun", img: "image/park_han_jun_perso.jpg" },
            { name: "Kim Donghyun", img: "image/kim_donghyun_perso.jpg" }
        ]
    },
 
    "revenge of the iron blooded sword hound": {
        title: "Revenge Of The Iron Blooded Sword Hound",
        image: "image/rotibsh.webp",
        synopsis: "Vikir, le Chien de Chasse aux veines de fer, a été trahi et exécuté par ceux qu'il servait. Il régresse avant sa mort et trace son chemin de vengeance méthodique contre ceux qui l'ont condamné.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Arts martiaux / Venin / Régression",
        characters: [
            { name: "Vikir Van Baskerville", img: "image/vikir_perso.jpg" },
            { name: "Camus Morgue", img: "image/camus_morgue_perso.jpg" },
            { name: "Dolores", img: "image/dolores_perso.jpg" },
            { name: "Sinclair", img: "image/sinclair_perso.jpg" }
        ]
    },
 
    "academy transcendance": {
        title: "Academy Transcendance",
        image: "image/academyt.webp",
        synopsis: "Un être transcendant s'infiltre dans une académie de talents pour des raisons mystérieuses. Sa puissance dépasse de loin tous les étudiants et professeurs, mais il dissimule soigneusement ses capacités.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Transcendance / Magie suprême",
        characters: [
            { name: "Protagoniste Transcendant", img: "image/academyt_mc_perso.jpg" }
        ]
    },
 
    "doctor player": {
        title: "Doctor Player",
        image: "image/doctorplay.webp",
        synopsis: "Un médecin de génie se retrouve transporté dans un monde de jeu RPG. Il utilise ses connaissances médicales de manière créative pour soigner, combattre et progresser dans ce nouvel univers.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Compétences médicales / Système RPG",
        characters: [
            { name: "Raymond", img: "image/raymond_perso.jpg" }
        ]
    },
 
    "heavenly inquisition sword": {
        title: "Heavenly Inquisition Sword",
        image: "image/his.webp",
        synopsis: "Un épéiste d'une puissance divine mène une inquisition céleste dans un monde où les démons et les humains s'affrontent. Sa lame tranche autant les mensonges que les ennemis.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Arts de l'épée divine / Ki céleste",
        characters: [
            { name: "Yeon Jeokha", img: "image/yeon_jeokha_perso.jpg" },
            { name: "Namgong Yeon", img: "image/namgong_yeon_perso.jpg" }
        ]
    },
 
    "designed bully": {
        title: "Designed Bully",
        image: "image/designedbully.webp",
        synopsis: "Une histoire sombre sur le harcèlement scolaire vue sous plusieurs angles, explorant les dynamiques de pouvoir, de manipulation et les conséquences psychologiques sur les victimes et bourreaux.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Aucun (drame / psychologique)",
        characters: [
            { name: "Daegun Kwan", img: "image/daegun_kwon_perso.jpg" },
            { name: "Heejun", img: "image/heejun_perso.jpg" },
            { name: "Lee Bokhwa", img: "image/lee_bokhwa_perso.jpg" },
            { name: "Yang Mohyeon", img: "image/yang_mohyeon_perso.jpg" },
            { name: "Yeowool", img: "image/yeowool_perso.jpg" },
            { name: "Baek Sooji", img: "image/baek_sooji_perso.jpg" },
            { name: "Suhyuk", img: "image/suhyuk_perso.jpg" }
        ]
    },
 
    "reality quest": {
        title: "Reality Quest",
        image: "image/rq.webp",
        synopsis: "Ha Do-wan, harcelé au lycée, se retrouve pris dans un système de quêtes qui lui impose des missions dans la réalité. En accomplissant ces quêtes, il gagne des statistiques et devient plus fort.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Système de quêtes réelles / Stats augmentées",
        characters: [
            { name: "Ha Do-wan", img: "image/dowan_perso.jpg" },
            { name: "Sunjae Choi", img: "image/sunjae_choi_perso.jpg" },
            { name: "Han Eun-Seong", img: "image/eunseong_han_perso.jpg" },
            { name: "Sehun Kang", img: "image/sehun_kang_perso.jpg" },
            { name: "Shin Sehee", img: "image/shin_sehee_perso.jpg" },
            { name: "Siyeon", img: "image/siyeon_perso.jpg" },
            { name: "Seokyeong", img: "image/seok_yeong_perso.jpg" },
            { name: "Kim Cheongwol", img: "image/kim_cheong_wol_perso.jpg" },
            { name: "Cheon Minyul", img: "image/cheon_minyul_perso.jpg" },
            { name: "Hyun Jin-Seo", img: "image/hyun_jin_seo_pero.jpg" },
            { name: "Joo Arin", img: "image/joo_arin_perso.jpg" }
        ]
    },
 
    "the build up": {
        title: "The Build Up",
        image: "image/buildup.webp",
        synopsis: "Un combattant déterminé gravit les échelons du monde du combat, renforçant chaque aspect de sa personne dans une ascension méthodique et acharnée vers le sommet.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Combat / Entraînement physique intense",
        characters: [
            { name: "Kang", img: "image/kang_maru_perso.jpg" },
            { name: "Yuna Choi", img: "image/yuna_choi_perso.jpg" },
            { name: "Seong Si-Woo", img: "image/seong_si_woo_perso.webp" }
        ]
    },
 
    "heavenly cultivation simulation": {
        title: "Heavenly Cultivation Simulation",
        image: "image/cultivation_simulation.webp",
        synopsis: "Le protagoniste découvre un système de simulation de cultivation qui lui permet de tester des millions d'années d'entraînement en quelques instants, atteignant des niveaux impossibles.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Simulation de cultivation / Qi / Immortalité",
        characters: [
            { name: "Seol hwi", img: "image/seol_hwi_perso.jpg" },
            { name: "Gon Ma", img: "image/gon_ma_perso.jpg" },
            { name: "So Ryeong", img: "image/so_ryeong_perso.jpg" }
        ]
    },
 
    "chronicles of the demon faction": {
        title: "Chronicles of The Demon Faction",
        image: "image/demon_faction.webp",
        synopsis: "Un espion infiltré dans la faction démoniaque régresse dans le passé. Avec ses connaissances des secrets les plus sombres des deux camps, il remodèle l'histoire à sa façon.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Arts martiaux Murim / Techniques démoniaques",
        characters: [
            { name: "Seo Ryang", img: "image/seo_ryang_perso.jpg" },
            { name: "Lee cheonsang", img: "image/lee_cheonsang_perso.jpg" },
            { name: "Yeon Sang-Rin", img: "image/yeo_sang_rin_perso.jpg" },
            { name: "Ma Dongpil", img: "image/ma_dongpil_perso.jpg" }
        ]
    },
 
    "the warrior highschool": {
        title: "The Warrior Highschool",
        image: "image/warriorhighschool.webp",
        synopsis: "Dans un lycée où les futurs guerriers s'entraînent pour combattre des monstres qui menacent le monde, un élève aux capacités cachées se fraye un chemin vers le sommet.",
        episodes: "Non adapté",
        tomes: "N/A (Webtoon)",
        saisons: "N/A",
        powerSystem: "Compétences de guerrier / Combat contre monstres",
        characters: [
            { name: "Protagoniste", img: "image/warriorhigh_mc_perso.jpg" }
        ]
    },
 
    // ===================== MANGAS SUPPLÉMENTAIRES (mangas.html) =====================
 
    "attaque des titans": {
        title: "Attaque Des Titans",
        image: "image/aot.webp",
        synopsis: "L'humanité survit retranchée derrière d'immenses murs pour se protéger des Titans, des géants dévorant les humains. Eren Jäger jure d'exterminer tous les Titans après que sa mère fut dévorée.",
        episodes: "87",
        tomes: "34",
        saisons: "4",
        powerSystem: "Titans / Équipement manœuvre tridimensionnelle / Titans héritiers",
        characters: [
            { name: "Eren Jäger", img: "image/eren_perso.jpg" },
            { name: "Mikasa Ackerman", img: "image/mikasa_perso.jpg" },
            { name: "Armin Arlett", img: "image/armin_perso.jpg" },
            { name: "Levi Ackerman", img: "image/levi_perso.jpg" },
            { name: "Zeke Jäger", img: "image/zeke_perso.jpg" }
        ]
    },
 
    "my hero academia": {
        title: "My Hero Academia",
        image: "image/mha.webp",
        synopsis: "Dans un monde où 80% de la population possède des super-pouvoirs (Alter), Izuku Midoriya naît sans capacité. Le plus grand héros lui lègue son pouvoir et il intègre l'école U.A. pour devenir le meilleur héros.",
        episodes: "138+",
        tomes: "40+",
        saisons: "7",
        powerSystem: "Alter (superpouvoir individuel) / One For All",
        characters: [
            { name: "Izuku Midoriya", img: "image/midoriya_perso.jpg" },
            { name: "Katsuki Bakugo", img: "image/bakugo_perso.jpg" },
            { name: "All Might", img: "image/all_might_perso.jpg" },
            { name: "Shoto Todoroki", img: "image/shoto_perso.jpg" },
            { name: "All For One", img: "image/all_for_one_perso.jpg" }
        ]
    },
 
    "one punch man": {
        title: "One Punch Man",
        image: "image/opm.webp",
        synopsis: "Saitama est un héros si puissant qu'il terrasse tout ennemi d'un seul coup de poing. Cette force absolue le plonge dans un ennui existentiel profond, cherchant un adversaire capable de le faire ressentir quelque chose.",
        episodes: "24 + OVA",
        tomes: "28+",
        saisons: "2",
        powerSystem: "Force physique absolue / Aucun système défini",
        characters: [
            { name: "Saitama", img: "image/saitama_perso.jpg" },
            { name: "Genos", img: "image/genos_perso.jpg" },
            { name: "Garou", img: "image/garou_perso.jpg" },
            { name: "Bang", img: "image/bang_perso.jpg" }
        ]
    },
 
    "assassination classroom": {
        title: "Assassination Classroom",
        image: "image/assaclass.webp",
        synopsis: "Une créature tentaculaire, Koro-sensei, détruit la moitié de la lune et menace de faire de même avec la Terre. Il devient professeur d'une classe de cancres avec pour mission de les laisser l'assassiner avant la fin de l'année.",
        episodes: "47",
        tomes: "21",
        saisons: "2",
        powerSystem: "Compétences d'assassinat / Vitesse supersonique (Koro-sensei)",
        characters: [
            { name: "Koro-sensei", img: "image/koro_perso.jpg" },
            { name: "Nagisa Shiota", img: "image/nagisa_perso.jpg" },
            { name: "Karma Akabane", img: "image/karma_perso.jpg" },
            { name: "Irina Jelavić", img: "image/irina_perso.jpg" }
        ]
    },
 
    "jojo's bizarre adventure": {
        title: "Jojo's Bizarre Adventure",
        image: "image/jojo.webp",
        synopsis: "Une saga multi-générationnelle suivant la famille Joestar dans des aventures extraordinaires à travers différentes époques, chacune avec un protagoniste différent et des pouvoirs uniques.",
        episodes: "190+",
        tomes: "131 (toutes parties)",
        saisons: "5 parties adaptées",
        powerSystem: "Hamon / Stands (manifestations de l'âme)",
        characters: [
            { name: "Jonathan Joestar", img: "image/jonathan_perso.jpg" },
            { name: "Dio Brando", img: "image/dio_perso.jpg" },
            { name: "Jotaro Kujo", img: "image/jotaro_perso.jpg" },
            { name: "Giorno Giovanna", img: "image/giorno_perso.jpg" }
        ]
    },
 
    "parasite": {
        title: "Parasite",
        image: "image/parasite.webp",
        synopsis: "Des parasites extraterrestres envahissent la Terre en prenant le contrôle du cerveau des humains. Shinichi Izumi survit partiellement : le parasite Migi ne contrôle que sa main droite, et ils coexistent.",
        episodes: "24",
        tomes: "10",
        saisons: "1",
        powerSystem: "Capacités parasitaires (transformation / combat)",
        characters: [
            { name: "Shinichi Izumi", img: "image/shinichi_perso.jpg" },
            { name: "Migi", img: "image/migi_perso.jpg" },
            { name: "Ryoko Tamura", img: "image/reiko_perso.jpg" }
        ]
    },
 
    "haikyuu": {
        title: "Haikyuu",
        image: "image/haikyuu.webp",
        synopsis: "Shoyo Hinata, malgré sa petite taille, rêve de devenir un grand joueur de volley-ball. En intégrant le lycée Karasuno, il forme un duo explosif avec le génie froid Tobio Kageyama.",
        episodes: "85",
        tomes: "45",
        saisons: "4",
        powerSystem: "Aucun (sport / réaliste)",
        characters: [
            { name: "Shoyo Hinata", img: "image/shoyo_perso.jpg" },
            { name: "Tobio Kageyama", img: "image/tobio_perso.jpg" },
            { name: "Koshi Sugawara", img: "image/koshi_perso.jpg" },
            { name: "Daichi Sawamura", img: "image/daichi_perso.jpg" }
        ]
    },
 
    "kuroko basket": {
        title: "Kuroko Basket",
        image: "image/kuroko.webp",
        synopsis: "Tetsuya Kuroko, l'ombre des Miracles de la Génération, rejoint le lycée Seirin avec un partenaire puissant. Leur but : battre les cinq autres anciens coéquipiers de Kuroko, devenus des adversaires redoutables.",
        episodes: "75",
        tomes: "30",
        saisons: "3",
        powerSystem: "Compétences basketballistiques spéciales (Zone, Passes misdirection...)",
        characters: [
            { name: "Tetsuya Kuroko", img: "image/kuroko_perso.jpg" },
            { name: "Taiga Kagami", img: "image/kagami_perso.jpg" },
            { name: "Seijuro Akashi", img: "image/akashi_perso.jpg" }
        ]
    },
 
    "bungo stray dogs": {
        title: "Bungo Stray Dogs",
        image: "image/bungost.webp",
        synopsis: "Atsushi Nakajima, orphelin à la rue, est recruté par l'Agence des Détectives Armés, une organisation dont les membres ont tous des capacités surnaturelles. Ils s'affrontent à la mafia de Port Mafia.",
        episodes: "60+",
        tomes: "23+",
        saisons: "5",
        powerSystem: "Pouvoirs nommés d'après des auteurs littéraires réels",
        characters: [
            { name: "Atsushi Nakajima", img: "image/atsushi_perso.jpg" },
            { name: "Osamu Dazai", img: "image/dazai_perso.jpg" },
            { name: "Chuya Nakahara", img: "image/chuya_perso.jpg" },
            { name: "Ryunosuke Akutagawa", img: "image/akutagawa_perso.jpg" }
        ]
    },
 
    "food wars": {
        title: "Food Wars",
        image: "image/foodwar.webp",
        synopsis: "Soma Yukihira intègre Totsuki, la plus élite des écoles culinaires, avec un taux d'abandon de 99%. Sa cuisine rustique mais inventive défie les nobles et aristocrates de la gastronomie.",
        episodes: "86",
        tomes: "36",
        saisons: "5",
        powerSystem: "Aucun (culinaire / compétition)",
        characters: [
            { name: "Soma Yukihira", img: "image/soma_perso.jpg" },
            { name: "Erina Nakiri", img: "image/erina_perso.jpg" },
            { name: "Megumi Tadokoro", img: "image/me_perso.jpg" }
        ]
    },
 
    "kingdom": {
        title: "Kingdom",
        image: "image/kingdom.webp",
        synopsis: "Shin, un orphelin esclave dans la Chine des Royaumes Combattants, rêve de devenir le plus grand général sous les cieux. Aux côtés du futur roi Ying Zheng, il trace sa voie dans des batailles épiques.",
        episodes: "38+",
        tomes: "70+",
        saisons: "5+",
        powerSystem: "Stratégie militaire / Combat au corps à corps (réaliste historique)",
        characters: [
            { name: "Shin (Li Xin)", img: "image/shin_perso.jpg" },
            { name: "Ying Zheng", img: "image/ying_perso.jpg" },
            { name: "Ou Ki", img: "image/ou_ki_perso.jpg" },
            { name: "Mou Bu", img: "image/mou_bu_perso.jpg" }
        ]
    }
};
    


// --- 2. CRÉATION DYNAMIQUE DU MODAL PLEIN ÉCRAN & RECHERCHE ---
const UIHTML = `
<div class="search-wrapper">
    <div class="search-box">
        <input type="text" id="manga-search" placeholder="Rechercher un manga...">
        <div class="search-icon-btn">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
    </div>
</div>
 
<div id="custom-modal" class="modal-overlay" style="display:none;">
    <div class="modal-fullscreen-content">
        <span class="close-modal">&times;</span>
        <div class="modal-layout">
            <div class="modal-left">
                <img id="modal-img" src="" alt="Manga Cover">
            </div>
            <div class="modal-right">
                <h1 id="modal-title"></h1>
                <p class="modal-meta"><strong>Système de pouvoir :</strong> <span id="modal-power"></span></p>
                <div class="modal-stats-grid">
                    <div><strong>Épisodes</strong><span id="modal-episodes"></span></div>
                    <div><strong>Tomes</strong><span id="modal-tomes"></span></div>
                    <div><strong>Saisons</strong><span id="modal-saisons"></span></div>
                </div>
                <div class="modal-synopsis-box">
                    <h3>Synopsis</h3>
                    <p id="modal-synopsis"></p>
                </div>
                <div class="modal-characters-section">
                    <h3>Personnages principaux</h3>
                    <div class="carousel-container">
                        <button class="carousel-btn prev-btn">&#10094;</button>
                        <div class="carousel-track-container">
                            <div id="carousel-track" class="carousel-track"></div>
                        </div>
                        <button class="carousel-btn next-btn">&#10095;</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
 
const UIStyles = `
.search-wrapper { position: fixed; top: 20px; right: 20px; z-index: 999; font-family: sans-serif; }
.search-box { display: flex; align-items: center; background: #222; border: 1px solid #444; border-radius: 30px; padding: 5px; transition: width 0.4s ease; width: 40px; overflow: hidden; height: 40px; justify-content: flex-end; }
.search-box:hover, .search-box:focus-within { width: 250px; padding: 5px 15px; }
.search-box input { width: 180px; border: none; background: transparent; color: white; outline: none; font-size: 14px; display: block; opacity: 0; transition: opacity 0.3s; }
.search-box:hover input, .search-box:focus-within input { opacity: 1; }
.search-icon-btn { color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; }
.card, .manga-item, .box { max-width: 220px !important; width: 220px !important; flex: 0 0 220px !important; }
.modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(10, 10, 10, 0.95); z-index: 10000; display: flex; justify-content: center; align-items: center; }
.modal-fullscreen-content { width: 100vw; height: 100vh; color: #fff; padding: 60px 40px; overflow-y: auto; position: relative; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; box-sizing: border-box; }
.close-modal { position: absolute; top: 25px; right: 35px; font-size: 45px; cursor: pointer; color: #888; transition: color 0.2s; z-index: 10001; }
.close-modal:hover { color: #fff; }
.modal-layout { display: flex; gap: 50px; max-width: 1200px; margin: 0 auto; align-items: flex-start; }
.modal-left { flex: 0 0 320px; }
.modal-left img { width: 100%; height: 480px; object-fit: cover; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.modal-right { flex: 1; }
.modal-right h1 { font-size: 3rem; margin-top: 0; margin-bottom: 10px; font-weight: 800; letter-spacing: -1px; }
.modal-meta { font-size: 1.1rem; color: #aaa; margin-bottom: 25px; }
.modal-stats-grid { display: flex; gap: 20px; margin-bottom: 30px; }
.modal-stats-grid div { background: #1a1a1a; padding: 15px 25px; border-radius: 8px; border: 1px solid #333; min-width: 100px; text-align: center; }
.modal-stats-grid strong { display: block; font-size: 0.85rem; color: #888; text-transform: uppercase; margin-bottom: 5px; }
.modal-stats-grid span { font-size: 1.2rem; font-weight: bold; }
.modal-synopsis-box { background: rgba(255,255,255,0.03); padding: 20px; border-radius: 8px; margin-bottom: 35px; line-height: 1.6; color: #ddd; }
.modal-synopsis-box h3 { margin-top: 0; color: #fff; }
.modal-characters-section h3 { margin-bottom: 15px; border-left: 4px solid #ff4a5a; padding-left: 10px; }
.carousel-container { display: flex; align-items: center; position: relative; }
.carousel-track-container { overflow: hidden; width: 100%; }
.carousel-track { display: flex; gap: 15px; transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1); }
.character-card { min-width: 130px; width: 130px; text-align: center; background: #161616; padding: 10px; border-radius: 8px; border: 1px solid #222; }
.character-card img { width: 100%; height: 160px; object-fit: cover; border-radius: 6px; }
.character-card p { margin: 8px 0 0 0; font-size: 0.85rem; font-weight: 500; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
.carousel-btn { background: rgba(0,0,0,0.7); color: white; border: 1px solid #333; width: 40px; height: 40px; cursor: pointer; font-size: 18px; z-index: 10; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.2s; flex-shrink: 0; }
.carousel-btn:hover { background: #fff; color: #000; }
@media (max-width: 850px) {
    .modal-layout { flex-direction: column; align-items: center; }
    .modal-left { flex: 0 0 auto; width: 240px; }
    .modal-left img { height: 350px; }
    .modal-right h1 { text-align: center; font-size: 2rem; }
}
`;
 
document.body.insertAdjacentHTML('beforeend', UIHTML);
const styleSheet = document.createElement("style");
styleSheet.innerText = UIStyles;
document.head.appendChild(styleSheet);
 
 
// --- 3. GESTIONNAIRE DU MODAL ET CARROUSEL ---
const modal = document.getElementById('custom-modal');
const closeBtn = document.querySelector('.close-modal');
const track = document.getElementById('carousel-track');
let carouselPosition = 0;
 
function openModal(workKey) {
    const item = dataManghwa[workKey.toLowerCase()];
    if (!item) return;
 
    document.getElementById('modal-title').innerText = item.title;
    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-synopsis').innerText = item.synopsis;
    document.getElementById('modal-episodes').innerText = item.episodes;
    document.getElementById('modal-tomes').innerText = item.tomes;
    document.getElementById('modal-saisons').innerText = item.saisons;
    document.getElementById('modal-power').innerText = item.powerSystem;
 
    track.innerHTML = '';
    carouselPosition = 0;
    track.style.transform = `translateX(0px)`;
 
    item.characters.forEach(char => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `<img src="${char.img}" alt="${char.name}" onerror="this.src='https://placehold.co/120x150/1a1a1a/888?text=${encodeURIComponent(char.name)}'"><p>${char.name}</p>`;
        track.appendChild(card);
    });
 
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
 
closeBtn.onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};
 
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
});
 
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display !== 'none') {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
});
 
document.querySelector('.next-btn').onclick = () => {
    const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
    if (carouselPosition > -maxScroll) {
        carouselPosition -= 145;
        track.style.transform = `translateX(${Math.max(carouselPosition, -maxScroll)}px)`;
    }
};
 
document.querySelector('.prev-btn').onclick = () => {
    if (carouselPosition < 0) {
        carouselPosition += 145;
        track.style.transform = `translateX(${Math.min(carouselPosition, 0)}px)`;
    }
};
 
 
// --- 4. TABLE DE CORRESPONDANCE TITRES → CLÉS ---
const titleToKey = {
    "naruto":                                       "naruto",
    "solo leveling":                                "solo leveling",
    "one piece":                                    "one piece",
    "legend of the northen blade":                  "legend of the northen blade",
    "dragon ball":                                  "dragon ball",
    "drangon ball":                                 "dragon ball",
    "tower of god":                                 "tower of god",
    "hunterxhunter":                                "hunterxhunter",
    "god of high school":                           "god of high school",
    "god of highschool":                            "god of high school",
    "full metal alchimiste":                        "full metal alchimiste",
    "full metal alchimist":                         "full metal alchimiste",
    "unordinary":                                   "unordinary",
    "death note":                                   "death note",
    "noblesse":                                     "noblesse",
    "gto":                                          "gto",
    "lookism":                                      "lookism",
    "bleach":                                       "bleach",
    "the breaker":                                  "the breaker",
    "city hunter":                                  "city hunter",
    "nicky larson":                                 "city hunter",
    "wind breaker":                                 "wind breaker",
    "fairy tail":                                   "fairy tail",
    "the beginning after the end":                  "the beginning after the end",
    "the begining after the end":                   "the beginning after the end",
    "jujutsu kaisen":                               "jujutsu kaisen",
    "star-embracing swordmaster":                   "star-embracing swordmaster",
    "demon slayer":                                 "demon slayer",
    "chronicles of a lazy sovereign":               "chronicles of a lazy sovereign",
    "chronicles of a lazy sovereign":               "chronicles of a lazy sovereign",
    "dr stone":                                     "dr stone",
    "a regressor's tale of cultivation":            "a regressor's tale of cultivation",
    "the promised neverland":                       "the promised neverland",
    "wild ranker":                                  "wild ranker",
    "fire force":                                   "fire force",
    "the divine demon grand ascension":             "the divine demon grand ascension",
    "the divine demon's grand ascension":           "the divine demon grand ascension",
    "vinland saga":                                 "vinland saga",
    "zombie dad":                                   "zombie dad",
    "blue lock":                                    "blue lock",
    "the regressed mercenary's machinations":       "the regressed mercenary's machinations",
    "black clover":                                 "black clover",
    "ice lord":                                     "ice lord",
    "tokyo ghoul":                                  "tokyo ghoul",
    "bad born blood":                               "bad born blood",
    "tokyo revenger":                               "tokyo revenger",
    "questim":                                      "questim",
    "captain tsubasa":                              "captain tsubasa",
    "lecteur omniscient":                           "lecteur omniscient",
    "the return of the blossoming blade":           "the return of the blossoming blade",
    "nano machine":                                 "nano machine",
    "infinite mage":                                "infinite mage",
    "swordmaster's youngest son":                   "swordmaster's youngest son",
    "swwordmaster's youngest son":                  "swordmaster's youngest son",
    "standard of reincarnation":                    "standard of reincarnation",
    "standar of reincarnation":                     "standard of reincarnation",
    "murim login":                                  "murim login",
    "damn reincarnation":                           "damn reincarnation",
    "eleceed":                                      "eleceed",
    "absolute sword sense":                         "absolute sword sense",
    "the world after the fall":                     "the world after the fall",
    "x & ash":                                      "x & ash",
    "high school mercenary":                        "high school mercenary",
    "jungle juice":                                 "jungle juice",
    "hectopascal":                                  "hectopascal",
    "revenge of the iron blooded sword hound":      "revenge of the iron blooded sword hound",
    "return of the iron blooded sword hound":       "revenge of the iron blooded sword hound",
    "academy transcendance":                        "academy transcendance",
    "doctor player":                                "doctor player",
    "heavenly inquisition sword":                   "heavenly inquisition sword",
    "designed bully":                               "designed bully",
    "reality quest":                                "reality quest",
    "the build up":                                 "the build up",
    "heavenly cultivation simulation":              "heavenly cultivation simulation",
    "chronicles of the demon faction":              "chronicles of the demon faction",
    "the warrior highschool":                       "the warrior highschool",
    "attaque des titans":                           "attaque des titans",
    "my hero academia":                             "my hero academia",
    "one punch man":                                "one punch man",
    "assassination classroom":                      "assassination classroom",
    "jojo's bizarre adventure":                     "jojo's bizarre adventure",
    "jojo's bizzarre adventure":                    "jojo's bizarre adventure",
    "parasite":                                     "parasite",
    "haikyuu":                                      "haikyuu",
    "kuroko basket":                                "kuroko basket",
    "bungo stray dogs":                             "bungo stray dogs",
    "food wars":                                    "food wars",
    "kingdom":                                      "kingdom",
};
 
 
// --- 5. INTERCEPTION DES CLICS (Universelle) ---
document.addEventListener('click', (e) => {
    const card = e.target.closest('.card, .manga-item, .box');
    if (!card) return;
 
    const rawText = card.innerText.toLowerCase().trim();
 
    // Cherche la correspondance la plus longue (la plus précise)
    let foundKey = null;
    let bestMatchLength = 0;
 
    for (const [title, key] of Object.entries(titleToKey)) {
        if (rawText.includes(title) && title.length > bestMatchLength) {
            foundKey = key;
            bestMatchLength = title.length;
        }
    }
 
    if (foundKey) {
        openModal(foundKey);
    }
});
 
 
// --- 6. RECHERCHE ULTRA STABLE ---
document.getElementById('manga-search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.card, .manga-item, .box');
 
    cards.forEach(card => {
        const title = card.innerText.toLowerCase();
        if (title.includes(query)) {
            card.style.setProperty('display', '', 'important');
        } else {
            card.style.setProperty('display', 'none', 'important');
        }
    });
});