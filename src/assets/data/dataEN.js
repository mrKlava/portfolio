import { imgAbout, imgFelicaPhoto, imgGoodBoy, imgJetbrains, imgMotivator, imgMrCoffee, imgPortfolio } from "../images";
import { SvgEmail, SvgGithub, SvgLinkedin, SvgPhone } from "../svg";

export const data = {
    "navbar": {
        "links": [
            { "text": "About", "link": "#about" },
            { "text": "Journey", "link": "#journey" },
            { "text": "Designs", "link": "#designs" },
            { "text": "Works", "link": "#works" },
            { "text": "Contact", "link": "#contacts" },
        ],
    },
    "about": {
        "title": 'about me',
        "img": imgAbout,
        "card": {
            "title": 'whoami',
            "titleSec": 'sudo ./about -r',
            "subtitle": 'mr Arturs KLAVA - Web / App developer',
            "text":
                "I will try to be short and straight. I am a really motivated person who is not afraid of challenges and the unknown. I believe that a human is capable of doing everything that he has planned and key for this is - WILL & ACTION. I am interested in developing myself as a high standard specialist in the IT industry. I started my journey from learning basic web developer tools such as HTML5, CSS3 and JS. Have passed courses: JetBrains - \"Frontend Developer\", freeCodeCamp.org - \"JavaScript Algorithms and Data Structures\". \n At this point I am deeply learning JS, React, and started with Redux and TS. Have experience with: HTML5, CSS3 (Less, Sass Bootstrap, Tailwind...), JS (JQuery, VUE, React...), Figma, Git, MongoDB. \n Feel free to contact me for more information according to my skills and experience."
        }
    },
    "journey": {
        "title": "my it journey",
        "cards": [
            {
                "title": "la fabrique du numerique paloise",
                "subtitle": "Web Developer Integrator - Studying",
                "description":
                    "Studying an Alternance program for Web Developer Integrator. Learning design principles, frontend and backend development. Learning to use CMS systems as WordPress.",
                "infobar": ["2022-2024", "Diploma bac +2", "Web development"],
                "link": "https://fabriquenumerique.fr/centre-de-formation/integrateur-developpeur-web/",
            },
            {
                "title": "Harvard University - edx online",
                "subtitle": "CS50 Introduction to Computer Science - Online Course",
                "description":
                    "Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering and web development. Languages include C, Python, SQL, and JavaScript, CSS and HTML.",
                "infobar": ["2022-2023", "Certificate", "Computer science"],
                "link": "https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0",
            },
            {
                "title": "freeCodeCamp.org",
                "subtitle": "JavaScript Algorithms and Data Structures - Online Course",
                "description":
                    "Learning and improving knowledge of the fundamentals of JavaScript including variables, arrays, objects, loops, and functions... Applying that knowledge by creating algorithms. Also learn two important programming styles or paradigms: Object Oriented Programming (OOP) and Functional Programming (FP).",
                "infobar": ["2022", "Certificate", "JavaScript"],
                "link": "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
            },
            {
                "title": "jetbrains academy",
                "subtitle": "Frontend Core - Online Course",
                "description":
                    "Learned the most popular development tool suite among programmers around the world - cover the basics of JavaScript, HTML, and CSS to discover the power of modern Frontend development.",
                "infobar": ["2022", "Certificate", "Frontend Web development"],
                "link": "https://hyperskill.org/tracks/5",
            },
            {
                "title": "ecenta baltic labs",
                "subtitle": "SAP Consultant (Frontend UI/UX Web developer) - Work",
                "description":
                    "Have passed initial training for UI/UX front-end development. Was configuring page interfaces (working with themes, changing and creating components, layouts and ect).I was working with existing frameworks and adding new ones to Hybris. During this period I learned Hybris structure.",
                "infobar": ["2021", "References", "Frontend Web development"],
                "link": "https://www.ecenta.com/en/",
            },
            {
                "title": "first steps ...",
                "subtitle": "Udemy, Youtube, Modern Javascript - Self learning",
                "description":
                    "Started my journey with an outdated course on Udemy and continued my learning with free materials found on the internet - YouTube, different articles and \"Modern Javascript\" book.",
                "infobar": ["2020", "N/A", "Basics of Frontend Web development"],
                "link": "https://www.google.com/",
            },
        ],
    },
    "designs": {
        "title": "my designs",
        "card": {
            "title": "sudo ./figma_projects -r",
            "subtitle": "Here are some figma designs made by me",
        },
        "cards": [
            {
                "img": imgJetbrains,
                "title": "Jetbrains project",
                "description":
                    "Made this design for Jetbrains final project of Frontend Core track. Copied original design of Jetbrains Academy website.",
                "link": "https://www.figma.com/file/gLeeGgN7Hkn9FNIRRI62dG/JetBrains-Course-finished?node-id=0%3A1",
            },
            {
                "img": imgGoodBoy,
                "title": "Project Good-Boy",
                "description":
                    "This is one of many designs created during studying at \"La fabrique du numérique\" as one of the projects.",
                "link": "https://www.figma.com/file/T2t3qdCNVyE1YauWNSuCUl/Project-%22GOOD-BOY%22?node-id=2%3A2",
            },
            {
                "img": imgFelicaPhoto,
                "title": "Felica Photographe",
                "description":
                    "Created this design of a landing page for photographer to promote her's services.",
                "link": "https://www.figma.com/file/zkplsSrsF624tl5gE2Wt7d/Untitled?node-id=0%3A1",
            },
            {
                "img": imgMrCoffee,
                "title": "Mr Coffee",
                "description":
                    "This is one of many designs created during studying at \"La fabrique du numérique\" as one of the projects.",
                "link": "https://www.figma.com/file/ZxgKthPoY6TpFJsEPiuVSV/mr-coffee?node-id=1%3A3",
            },
            {
                "img": imgMotivator,
                "title": "Motivator",
                "description":
                    "Motivator design was made for one of my pet projects.",
                "link": "https://www.figma.com/file/Ol6bnmsdOYFJZDSKRH5kp7/Motivator?node-id=0%3A1",
            },
            {
                "img": imgPortfolio,
                "title": "My Portfolio",
                "description":
                    "Yes. This page was also designed by me...",
                "link": "https://www.figma.com/file/sly82M2UeQgLaz3c6e07vj/Portfolio?node-id=1%3A2",
            },
        ],
    },
    "works": {
        "title": "my works",
        "card": {
            "title": "sudo ./projects -r",
            "subtitle": "Here are some my projects made using different stacks",
        },
        "cards": [
            {
                "title": "My Portfolio",
                "subtitle": "Single Page Application",
                "description":
                    "This portfolio is created on React. This SPA is still under construction. Soon coming: State handling is managed by Redux-toolkit. Multi language thanks to i18n.",
                "info": ["HTML", "SCSS", "React", "Redux-toolkit", "i18n"],
                "link": "https://github.com/mrKlava/MoGo"
            },
            {
                "title": "Mongo",
                "subtitle": "Web page",
                "description":
                    "This web page was created for practice purposes with help of YouTube channel BrainsCloud. This project is a fully responsive web page using Media Query Breakpoints in CSS and as well using jQuery to add interactivity for mobile navigation, accordion description dropout. For reviews sections used Slick carousel.",
                "info": ["HTML", "CSS", "JavaScript", "jQuery"],
                "link": "https://github.com/mrKlava/MoGo"
            },
            {
                "title": "Outdoor",
                "subtitle": "Web page",
                "description":
                    "This is a replica of one of the WordPress themes created as one of the projects during studying at \"La fabrique du numérique\". This project is a fully responsive multi page web page using Media Query Breakpoints in SCSS and as well using JavaScript to add interactivity for mobile navigation and configuration of Swiper slider.",
                "info": ["HTML", "Sass", "JavaScript"],
                "link": "#"
            },
            {
                "title": "Felica Photographe",
                "subtitle": "Single Page Application",
                "description":
                    "This page was created for a photographer initially on pure HTML and LESS and afterwards remastered as a multi language Single Page Application on React using Sass. This page was created to promote services.",
                "info": ["HTML", "Sass", "JavaScript", "React", "i18n"],
                "link": "https://github.com/mrKlava/felica-zoom-photo"
            },
            {
                "title": "ActiveBox",
                "subtitle": "Web page",
                "description":
                    "This web page was created for practice purposes with help of YouTube channel BrainsCloud. This project is a fully responsive website using Media Query Breakpoints in CSS and as well using jQuery to add interactivity for mobile navigation, accordion description dropout. For reviews sections used Slick carousel.",
                "info": ["HTML", "CSS", "JavaScript", "jQuery"],
                "link": "https://github.com/mrKlava/activeBox"
            },
            {
                "title": "Jetbrains Project",
                "subtitle": "Single Page Application",
                "description":
                    "This is the project \"Portfolio\" which includes five other projects from this course. During this course all projects were made on pure HTML, CSS and JS, but here they are remastered on React. ",
                "info": ["HTML", "CSS", "JavaScript", "React"],
                "link": "https://github.com/mrKlava/jetbrains-course"
            },
            {
                "title": "Motivator",
                "subtitle": "Single Page Application",
                "description":
                    "Pet project on React. Multi page motivation platform with motivating stories. Still under construction due to complexity. Using Redux-toolkit to manage states, MongoDB Realm for authentication and storing data. Will be multi language with help of i18n.",
                "info": ["HTML", "Sass", "JavaScript", "React", "i18n", "Redux", "React Router", "MongoDB"],
                "link": "https://github.com/mrKlava/motivator_react"
            },
            {
                "title": "Hangman",
                "subtitle": "Web game",
                "description":
                    "Hangman is my early project implementing a classic game - Hangman. It was created using three basic languages of Internet: HTML, CSS and Javascript",
                "info": ["HTML", "CSS", "JavaScript"],
                "link": "https://github.com/mrKlava/Hangman"
            },
        ],
    },
    "contacts": {
        "title": "Want to contact me?",
        "card": {
            "title": "sudo ./contact -w",
            "subtitle": "Feel free to contact me if you have any questions or proposals",
        },
        "info": [
            { svg: <SvgLinkedin />, type: "link", link: "https://www.linkedin.com/in/artursklava/" },
            { svg: <SvgGithub />, type: "link", link: "https://github.com/mrKlava" },
            { svg: <SvgEmail />, type: "email", link: "mailto:mr.a.klava@gmail.com?subject=Portfolio Page" },
            { svg: <SvgPhone />, type: "number", link: "tel:WillBeUpdated" },
        ]
    }
}