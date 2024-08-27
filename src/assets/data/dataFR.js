import { imgAbout, imgFelicaPhoto, imgGoodBoy, imgJetbrains, imgMotivator, imgMrCoffee, imgPortfolio, imgSpeedVelo, imgPeaker } from "../images";


export const data = {
    "navbar": {
        "links": [
            { "text": "a propos", "link": "#about" },
            { "text": "parcours", "link": "#journey" },
            { "text": "Designs", "link": "#designs" },
            { "text": "projets", "link": "#works" },
            { "text": "Contacts", "link": "#contacts" },
        ],
        "langs": [
          {
              "id": 0,
              "short": 'en',
              "long": 'English',
              "active": true,
          },
          {
              "id": 1,
              "short": 'fr',
              "long": 'Français'
          },
      ]
    },
    "about": {
        "title": 'propos de moi',
        "img": imgAbout,
        "card": {
            "title": 'whoami',
            "titleSec": 'sudo ./about -r',
            "subtitle": "mr Arturs KLAVA -  Développeur Web et d'Applications",
            "text":
                "Je suis un ancien marin professionnel avec plus de 10 ans d'expérience principalement dans l'industrie pétrolière et gazière. Cependant, ma carrière a pris un tournant lorsque j'ai découvert le développement Web il y a quatre ans. Depuis lors, j'ai acquis une expérience pratique dans deux entreprises différentes et j'ai suivi plusieurs cours en ligne, y compris le célèbre CS50 de l'Université Harvard. J'ai obtenu mon premier diplôme en développement Web et je travaille actuellement sur la prochaine étape de mon éducation. J'ai une expérience pratique avec diverses technologies telles que HTML, CSS, Sass, Less, JavaScript, jQuery, PHP, React, Redux, Python, Flask, C, MongoDB, SQL, et plus encore. Je suis passionné par le développement Web et d'applications et impatient de mettre mes compétences au service de nouveaux projets."
        }
    },
    "journey": {
        "title": "mon parcours",
        "btn_text": "savoir plus",
        "cards": [
            {
                "title": "Lipstip",
                "subtitle": "Développeur Web Fullstack - Travail",
                "description":
                    "En tant que développeur web Full-Stack chez Lipstip, je suis responsable de la direction de l'équipe de développement et de la supervision de l'ensemble du cycle de vie du développement logiciel, de la conception au déploiement. J'ai mis en œuvre des applications web évolutives, en utilisant une stack technologique variée incluant Docker, React, Node.js, OVH Cloud, etc. Mes responsabilités comprenaient également le développement pratique, la réalisation de revues de code, et la planification du développement. De plus, j'ai encadré des développeurs juniors, en favorisant un environnement de travail collaboratif et innovant qui priorise l'amélioration continue et l'apprentissage.",
                "infobar": ["2024-EN COURS", "References", "Développement web"],
                "link": "https://www.linkedin.com/company/lipstip/",
            },
            {
                "title": "la fabrique du numerique",
                "subtitle": "Concepteur Développeur d’Applications - Studies",
                "description":
                    "Au cours de mes études dans le programme de développement d'applications, j'ai acquis des connaissances approfondies et une expérience pratique dans la conception, le développement et la maintenance d'applications logicielles. J'ai appris à travailler avec différents langages de programmation, ainsi qu'à maîtriser le cycle de vie du développement logiciel, y compris l'analyse des besoins, la conception du système, le codage, les tests et le déploiement. De plus, j'ai affiné mes compétences en résolution de problèmes, appris à travailler efficacement en équipe et me suis familiarisé avec différentes méthodologies de développement.",
                "infobar": ["2024-2025", "Diplôme Bac+3", "Développement d'applications"],
                "link": "https://fabriquenumerique.fr/",
            },
            {
                "title": "Omega 365 France",
                "subtitle": "Développeur de logiciels web - Travail",
                "description":
                    "Après avoir réussi à obtenir une certification interne, démontrant ma capacité à respecter des normes de qualité élevées pour les produits. Je travaille intensivement avec SQL Server et utilise TSQL. De plus, je suis devenu compétent dans l'utilisation du framework interne de l'entreprise pour le développement d'applications web, notamment pour un outil de gestion de projet. Cette certification m'a doté des compétences nécessaires pour garantir la livraison de produits de haute qualité et fournir des solutions web robustes en utilisant SQL Server et la pile technologique de l'entreprise (.NET, ASP, C#, jQuery, Razor, Appframe). À noter, j'ai eu le privilège de travailler avec des clients de renom comme Total Energies.",
                "infobar": ["2023-2024", "Certificat", "Développement web"],
                "link": "https://omega365.com/",
            },
            {
                "title": "la fabrique du numerique",
                "subtitle": "Développeur intégrateur en réalisation d’applications web - formation",
                "description":
                    "Pendant mes études, j'ai acquis des connaissances théoriques précieuses et des compétences pratiques dans plusieurs domaines. J'ai appris les principes de design pour créer des sites web attrayants visuellement et j'ai perfectionné mes compétences en développement web full-stack en utilisant des piles technologiques modernes (React, Node.js, PHP, Symfony). De plus, j'ai acquis une maîtrise dans l'utilisation des systèmes de gestion de contenu (CMS) comme WordPress pour une gestion efficace du contenu. Le programme a également abordé la planification de projets, me permettant de gérer efficacement des projets de développement web. Dans l'ensemble, ce programme m'a doté d'un ensemble de compétences complet nécessaire pour réussir en tant que développeur web.",
                "infobar": ["2022-2024", "Diplôme Bac+2", "Développement web"],
                "link": "https://fabriquenumerique.fr/",
            },
            {
                "title": "Harvard University - edx online",
                "subtitle": "CS50 Introduction to Computer Science - Online Course",
                "description":
                    "J'ai réussi avec succès l'un des cours les plus emblématiques en informatique, qui couvrait un large éventail de sujets essentiels. Le cours explorait des domaines importants tels que l'abstraction, les algorithmes, les structures de données, l'encapsulation, la gestion des ressources, la sécurité, le génie logiciel et le développement web. De plus, le cours m'a équipé de compétences pratiques dans divers langages de programmation, y compris C, Python, SQL, JavaScript, CSS et HTML. Cette exposition à des langages diversifiés me permet d'aborder différents projets et de résoudre des problèmes dans divers domaines.",
                "infobar": ["2022-2023", "Certificat", "Computer science"],
                "link": "https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0",
            },
            {
                "title": "freeCodeCamp.org",
                "subtitle": "JavaScript Algorithms and Data Structures - Online Course",
                "description":
                    "Dans ce cours, je me suis concentré sur la maîtrise des fondamentaux de JavaScript, y compris les variables, les tableaux, les objets, les boucles, les classes, les fonctions et bien plus encore. J'ai appliqué ces connaissances en créant des algorithmes et des structures de données. J'ai également acquis une compréhension approfondie de deux paradigmes de programmation importants : la Programmation Orientée Objet (POO) et la Programmation Fonctionnelle (PF). Ce cours m'a fourni une base solide en JavaScript et m'a doté de compétences de programmation essentielles.",
                "infobar": ["2022", "Certificat", "JavaScript"],
                "link": "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
            },
            {
                "title": "JetBrains academy",
                "subtitle": "Frontend Core - Online Course",
                "description":
                    "Au cours de cette formation, j'ai considérablement enrichi mes connaissances en utilisant la suite d'outils de développement la plus populaire plébiscitée par les programmeurs du monde entier. Le cours a couvert les aspects essentiels de JavaScript, HTML et CSS, révélant l'immense potentiel du développement frontend moderne. Grâce à cette expérience, j'ai acquis une compréhension approfondie de la manière dont ces technologies interagissent pour créer des interfaces utilisateur dynamiques et captivantes.",
                "infobar": ["2022", "Certificat", "Développement Web Frontend"],
                "link": "https://hyperskill.org/tracks/5",
            },
            {
                "title": "ecenta baltic labs",
                "subtitle": "Consultant SAP (Développeur Web Frontend UI/UX) - Travail",
                "description":
                    "J'ai terminé la formation initiale en développement front-end UI/UX avec SAP Hybris. Pendant cette période, j'ai acquis une expérience pratique dans la configuration des interfaces de page, ce qui impliquait de travailler avec des thèmes, de créer et de modifier des composants, des mises en page, et bien plus encore. J'ai également eu l'opportunité de travailler avec des frameworks et des bibliothèques existants, et d'intégrer de nouveaux éléments dans l'environnement Hybris. Cette expérience m'a permis d'acquérir une compréhension approfondie de la structure et du fonctionnement de Hybris, renforçant ainsi mes compétences en tant que développeur front-end UI/UX.",
                "infobar": ["2021", "References", "Développement Web Frontend"],
                "link": "https://www.ecenta.com/en/",
            },
            {
                "title": "Premiers pas ...",
                "subtitle": "Udemy, Youtube, Modern Javascript - Auto-apprentissage",
                "description":
                    "Je me suis lancé dans mon parcours d'apprentissage en m'inscrivant à un cours obsolète sur Udemy. Cependant, ma quête de connaissance ne s'est pas arrêtée là. J'ai approfondi mes connaissances en explorant des ressources disponibles gratuitement sur internet, telles que des tutoriels YouTube, des articles informatifs et le livre éclairant intitulé \"JavaScript Moderne\". Cette combinaison de matériaux divers m'a permis d'élargir ma compréhension, de commencer un nouveau chapitre dans ma vie et de trouver mon premier emploi en tant que développeur autodidacte.",
                "infobar": ["2020", "N/A", "Les bases du développement Web Frontend"],
                "link": "https://www.google.com/",
            },
        ],
    },
    "designs": {
        "title": "mes designs",
        "card": {
            "title": "sudo ./figma_projects -r",
            "subtitle": "Voici quelques conceptions Figma réalisées par moi",
        },
        "btn_text": "voir le design",
        "cards": [
            {
                "img": imgJetbrains,
                "title": "Jetbrains project",
                "description":
                    "Pour le projet final de la formation Frontend Core chez Jetbrains, j'ai créé un design inspiré du site web original de Jetbrains Academy. Avec une attention méticuleuse aux détails, j'ai recréé les éléments et la mise en page, garantissant une expérience utilisateur fluide. Ce projet m'a permis de démontrer ma capacité à reproduire et à adapter des designs existants tout en ajoutant ma touche de créativité.",
                "link": "https://www.figma.com/file/gLeeGgN7Hkn9FNIRRI62dG/JetBrains-Course-finished?node-id=0%3A1",
            },
            {
                "img": imgGoodBoy,
                "title": "Project Good-Boy",
                "description":
                    "Dans le cadre de mes études à \"La Fabrique du Numérique\", j'ai entrepris une variété de projets passionnants, et ce design particulier occupe une place spéciale parmi eux. Axé sur le concept d'une combinaison exo pour les chiens, le projet fusionne une technologie de pointe avec une profonde compréhension du bien-être animal. Le design que j'ai créé présente un exosquelette de haute technologie spécialement conçu pour les compagnons canins, améliorant leur mobilité, leur force et leur bien-être général.",
                "link": "https://www.figma.com/file/T2t3qdCNVyE1YauWNSuCUl/Project-%22GOOD-BOY%22?node-id=2%3A2",
            },
            {
                "img": imgSpeedVelo,
                "title": "Speed-Velo",
                "description":
                    "Pour le projet de commerce électronique centré autour d'un magasin de vélos de route haut de gamme, j'ai élaboré un design captivant adapté au monde du cyclisme de haute performance. Construit sur la plateforme WordPress, le site Web combine une esthétique épurée avec une fonctionnalité conviviale, offrant une expérience d'achat immersive pour les amateurs de vélo. Avec une attention méticuleuse aux détails, j'ai intégré des visuels élégants, une navigation intuitive et une démonstration de produits fluide pour mettre en valeur la collection exquise de vélos de route.",
                "link": "https://www.figma.com/file/UzqEeHjv54T00gJf8mP2Yg/Speed-Bike?type=design&node-id=0%3A1&t=jNcIsQFaCcUZb5uR-1",
            },
            {
                "img": imgFelicaPhoto,
                "title": "Felica Photographe",
                "description":
                    "J'ai eu le plaisir de concevoir une page d'atterrissage captivante pour une photographe talentueuse, dans le but de mettre en valeur ses services uniques. La page d'atterrissage capture l'essence du style de la photographe, en utilisant des images captivantes et des éléments de design réfléchis pour créer une expérience utilisateur mémorable. Ce projet illustre ma capacité à traduire la vision d'un photographe en une présence numérique convaincante qui captive les spectateurs et attire les clients potentiels.",
                "link": "https://www.figma.com/file/zkplsSrsF624tl5gE2Wt7d/Untitled?node-id=0%3A1",
            },
            {
                "img": imgMrCoffee,
                "title": "Mr Coffee",
                "description":
                    "Dans le cadre de mes études à \"La Fabrique du Numérique\", j'ai eu l'opportunité de travailler sur une gamme variée de projets de design, et celui-ci en particulier impliquait la création d'un design pour un café. Le design capture l'essence de la marque du café. Avec un accent sur la création d'une atmosphère chaleureuse et accueillante, améliorant ainsi l'expérience client globale.",
                "link": "https://www.figma.com/file/ZxgKthPoY6TpFJsEPiuVSV/mr-coffee?type=design&node-id=0%3A1&t=bu46g3WZRzZu5yfB-1",
            },
            {
                "img": imgMotivator,
                "title": "Motivator",
                "description":
                    "J'avais conçu une plateforme de motivation axée sur le récit. Ce projet visait à fournir une ressource où les histoires inspirantes de personnes remarquables pourraient être partagées et célébrées. En créant une plateforme captivante qui met en valeur les parcours et les réalisations de personnes inspirantes, ce projet sert de source de motivation et d'empowerment pour les utilisateurs en quête d'inspiration dans leur propre vie.",
                "link": "https://www.figma.com/file/Ol6bnmsdOYFJZDSKRH5kp7/Motivator?node-id=0%3A1",
            },
            {
                "img": imgPeaker,
                "title": "Peaker",
                "description":
                    "La conception de mon réseau social en plein air privilégie la simplicité et la fonctionnalité. Avec une interface propre et minimaliste, les utilisateurs peuvent naviguer facilement à travers les différentes fonctionnalités de la plateforme. Le schéma de couleurs s'inspire de la nature, avec des tons terreux et des accents vibrants évoquant l'esprit du plein air. Une mise en page intuitive et une typographie claire garantissent que les informations sont présentées de manière simple, permettant aux utilisateurs de se concentrer sur la connexion avec d'autres passionnés de plein air, de découvrir de nouvelles aventures et de partager leurs expériences de manière transparente.",
                "link": "https://www.figma.com/file/n1kpgtkxkPiFfVNCV3DTIr/Peaker?type=design&node-id=0%3A1&mode=design&t=RD5EGCBZLkoPLEqB-1",
            },
            {
                "img": imgPortfolio,
                "title": "My Portfolio",
                "description":
                    "J'ai créé ma propre page de portfolio, mettant en valeur mes compétences, mon expérience et ma créativité. En mettant l'accent sur la présentation de mon travail sous son meilleur jour, j'ai conçu un site web de portfolio visuellement frappant et convivial. La mise en page incarne ma marque personnelle et mon style, en intégrant une esthétique épurée, une navigation intuitive et une présentation efficace des projets. Ce projet m'a permis de démontrer mon expertise en design tout en créant une plateforme qui représente efficacement mon parcours professionnel et sert de vitrine pour mon travail.",
                "link": "https://www.figma.com/file/sly82M2UeQgLaz3c6e07vj/Portfolio?node-id=1%3A2",
            },
        ],
    },
    "works": {
        "title": "mes projets",
        "card": {
            "title": "sudo ./projects -r",
            "subtitle": "Mes projets réalisés avec différentes technologies.",
        },
        "btn_text": "Afficher",
        "cards": [
            {
                "title": "Simulateur de Livraison par Drone",
                "subtitle": "Application Web",
                "description":
                    "Ceci est une version de test, la version complète de l'application est en cours de développement. Le simulateur de livraison par drone avec pilote automatique est une application basée sur JavaScript où les utilisateurs sélectionnent simplement des points sur une carte et cliquent sur un bouton pour lancer les drones. La fonctionnalité de pilote automatique prend ensuite le relais, contrôlant les drones pour naviguer vers les destinations sélectionnées. Ce simulateur offre une expérience fluide et conviviale, permettant aux utilisateurs de simuler des livraisons par drone sans avoir besoin de contrôle manuel.",
                "info": ["HTML", "Sass", "JavaScript", "Leaflet"],
                "link": "https://mrklava.github.io/drone-test/",
                "code": "https://github.com/mrKlava/drone-test"
            },
            {
                "title": "Peaker",
                "subtitle": "SPA",
                "description":
                    "Ce vaste projet full-stack a servi de projet final pour mon examen de diplôme Bac+2, tout en étant simultanément un projet réel. Il est actuellement en cours de développement continu. Le concept tourne autour de la création d'un réseau social pour les amateurs de plein air, avec des fonctionnalités avancées de planification incluant des itinéraires, du matériel, la météo, et plus encore.",
                "info": ["React", "Sass","Node.js", "MySQL", "Express", "Leaflet", "JWT"],
                "link": "",
                "code": "https://github.com/mrKlava/peaker"
            },
            {
                "title": "Outdoor",
                "subtitle": "Page web",
                "description":
                    "Cette page web est une réplique d'un thème WordPress captivant développé lors d'une expérience d'apprentissage à \"La fabrique du numérique\". Le projet présente une mise en page multi-pages complète et entièrement réactive qui utilise des points de rupture de requêtes multimédias en SCSS, garantissant une adaptabilité parfaite sur des tailles d'écran diverses. De plus, JavaScript a été utilisé pour améliorer l'interactivité, permettant une navigation mobile fluide et configurant dynamiquement le magnifique slider Swiper.",
                "info": ["HTML", "Sass", "JavaScript"],
                "link": "https://mrklava.github.io/outdoor/",
                "code": "https://github.com/mrKlava/outdoor"
            },
            {
                "title": "EventStar",
                "subtitle": "Application Web",
                "description":
                    "Cette application propose une solution complète de gestion d'événements. Elle offre une fonctionnalité basée sur les rôles, adaptée à différents types d'utilisateurs : Utilisateur, Organisateur et Administrateur. En tant qu'utilisateur, les individus peuvent s'inscrire à des événements dans divers lieux. Les organisateurs, en revanche, disposent de privilèges supplémentaires. Ils ont la possibilité de créer et de gérer des événements qu'ils ont créés. Le rôle d'administrateur englobe le plus haut niveau d'accès et de contrôle. Les administrateurs ont l'autorité pour gérer tous les aspects de l'application, y compris les utilisateurs, les événements, les lieux, et plus encore.",
                "info": ["PHP", "Bootstrap", "MySQL", "JavaScript", "jQuery"],
                "link": "",
                "code": "https://github.com/mrKlava/eventstar_project"
            },
            {
                "title": "My Portfolio",
                "subtitle": "SPA",
                "description":
                    "Cette page basée sur React sert de portfolio, présentant mon travail et mes réalisations. Bien qu'elle soit actuellement en construction, des mises à jour passionnantes sont à venir. Une amélioration notable est l'implémentation de la gestion d'état à l'aide de Redux-toolkit, qui garantira une manipulation et une organisation efficaces des données dans toute l'application. De plus, le portfolio propose une expérience multi-langue grâce à l'intégration de i18n.",
                "info": ["React", "SCSS", "Redux-toolkit", "i18n", "GSAP", "React Router"],
                "link": "https://mrklava.github.io/portfolio/",
                "code": "https://github.com/mrKlava/portfolio"
            },
            {
                "title": "Mogo",
                "subtitle": "Page web",
                "description":
                    "Cette page web d'entraînement a été créée en recréant un design prêt à l'emploi. Elle présente un design entièrement réactif, obtenu grâce à la mise en œuvre de points de rupture des requêtes multimédias en CSS. De plus, jQuery a été utilisé pour améliorer l'interactivité, notamment pour la navigation sur mobile et les sections de description à style accordéon. Pour présenter les avis, la page utilise le carrousel dynamique et visuellement attrayant de Slick. Le projet offre l'opportunité d'acquérir une expérience pratique des techniques de design réactif et de tirer parti de bibliothèques populaires comme jQuery.",
                "info": ["HTML", "CSS", "JavaScript", "jQuery"],
                "link": "https://mrklava.github.io/MoGo/",
                "code": "https://github.com/mrKlava/MoGo"
            },
            {
                "title": "Felica Photographe",
                "subtitle": "SPA",
                "description":
                    "Cette page web a été conçue pour mettre en valeur les compétences en photographie et promouvoir les services du photographe. Elle a été initialement créée en utilisant uniquement HTML et LESS (elle a été refactorisée avec Sass), cependant, reconnaissant la nécessité d'améliorations supplémentaires, la page a ensuite été remasterisée en tant qu'Application à Page Unique (SPA) multi-langue en utilisant le puissant framework React, combiné à la flexibilité et l'élégance de Sass pour le style avancé. Cette version revitalisée conserve son objectif principal de promouvoir les services exceptionnels du photographe.",
                "info": ["HTML", "LESS", "Sass", "JavaScript", "React", "i18n"],
                "link": "https://mrklava.github.io/felica-zoom-photo/",
                "code": "https://github.com/mrKlava/felica-zoom-photo"
            },
            {
                "title": "ActiveBox",
                "subtitle": "Page web",
                "description":
                    "Cette page web d'entraînement a été créée en recréant un design prêt à l'emploi. Elle présente un design entièrement réactif, obtenu grâce à la mise en œuvre de points de rupture des requêtes multimédias en CSS. De plus, jQuery a été utilisé pour améliorer l'interactivité, notamment pour la navigation sur mobile et les sections de description à style accordéon. Pour présenter les avis, la page utilise le carrousel dynamique et visuellement attrayant de Slick. Le projet offre l'opportunité d'acquérir une expérience pratique des techniques de design réactif et de tirer parti de bibliothèques populaires comme jQuery.",
                "info": ["HTML", "CSS", "JavaScript", "jQuery"],
                "link": "https://mrklava.github.io/activeBox/",
                "code": "https://github.com/mrKlava/activeBox"
            },
            {
                "title": "Jetbrains Project",
                "subtitle": "SPA",
                "description":
                    "Le projet \"Portfolio\" sert de point culminant du cours JetBrains, présentant cinq autres projets réalisés tout au long du programme. Initialement développés en utilisant uniquement HTML, CSS et JS, ces projets ont été habilement remasterisés en utilisant le puissant framework React. Cette transition vers React apporte de nombreux avantages, notamment des performances améliorées, une interactivité accrue et un processus de développement plus efficace. Le projet \"Portfolio\" témoigne des compétences acquises et des connaissances du cours, mettant en évidence la capacité à exploiter les technologies de pointe pour améliorer la qualité et la fonctionnalité des applications web.",
                "info": ["HTML", "CSS", "JavaScript", "React"],
                "link": "https://mrklava.github.io/jetbrains-course/",
                "code": "https://github.com/mrKlava/jetbrains-course"
            },
            {
                "title": "Motivator",
                "subtitle": "SPA",
                "description":
                    "Ce projet personnel, développé avec React, vise à créer une plateforme motivante avec plusieurs pages, mettant en vedette des histoires inspirantes. Bien qu'il soit encore en cours de développement, le projet démontre un engagement à fournir une plateforme complète et dynamique. Pour gérer efficacement les états, Redux-toolkit a été utilisé, fournissant une solution robuste de gestion d'état. De plus, MongoDB Realm est utilisé pour l'authentification et le stockage des données, garantissant une manipulation sécurisée et fiable des informations utilisateur. Les futurs plans du projet incluent la mise en place d'un support multilingue en utilisant i18n.",
                "info": ["React","Sass", "JavaScript", "i18n", "Redux", "React Router", "MongoDB"],
                "link": "https://mrklava.github.io/motivator_react/",
                "code": "https://github.com/mrKlava/motivator_react"
            },
            {
                "title": "Motivator - Symfony",
                "subtitle": "Application Web",
                "description":
                    "e projet basé sur Symfony est une réplique du projet Motivator, démontrant ma capacité à m'adapter à différentes technologies tout en conservant le même aspect. Ce projet a été développé pendant la période de maîtrise de PHP et Symfony en particulier. Il s'agit d'une application full stack sécurisée.",
                "info": ["PHP", "Twig", "Symfony","Sass", "JavaScript", "MySQL"],
                "link": "",
                "code": "https://github.com/mrKlava/motivator-symfony"
            },
            {
                "title": "Hangman",
                "subtitle": "Jeu Web",
                "description":
                    "Le Pendu est un projet précoce qui présente l'implémentation du célèbre jeu classique, Le Pendu. Cette application web engageante a été développée en utilisant les langages fondamentaux d'Internet : HTML, CSS et JavaScript. En tirant parti de ces trois technologies de base, le projet donne vie au jeu intemporel du Pendu. Grâce à une combinaison de HTML pour structurer le contenu, de CSS pour le style et la mise en page, et de JavaScript pour la logique et l'interactivité, Le Pendu offre une expérience de jeu divertissante et immersive.",
                "info": ["HTML", "CSS", "JavaScript"],
                "link": "https://mrklava.github.io/Hangman/",
                "code": "https://github.com/mrKlava/Hangman"
            },
        ],
    },
    "contacts": {
        "title": "Vous voulez me contacter?",
        "card": {
            "title": "sudo ./contact -w",
            "subtitle": "N'hésitez pas à me contacter si vous avez des questions ou des propositions",
        },
        "info": [
            { name: 'LinkedIn', src: 'https://www.linkedin.com/in/artursklava/', type: "link", link: "https://www.linkedin.com/in/artursklava/" },
            { name: 'GitHub', src: 'https://github.com/mrKlava', type: "link", link: "https://github.com/mrKlava" },
            { name: 'Email', src: 'mr.a.klava@gmail.com', type: "email", link: "mailto:mr.a.klava@gmail.com?subject=Portfolio Page" },
            { name: 'Number', src: '+33782974495', type: "number", link: "tel:+33782974495" },
        ]
    }
}