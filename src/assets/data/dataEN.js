import { imgAbout, imgFelicaPhoto, imgGoodBoy, imgJetbrains, imgMotivator, imgMrCoffee, imgPortfolio, imgSpeedVelo } from "../images";
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
                "Hello world! I'm an ex-professional seafarer with over 10 years of experience in the Oil & Gas industry. However, my career took a turn when I discovered web development four years ago. Since then, I've gained practical experience in two different companies and completed several online courses. I'm currently working towards my first degree in web development. I have hands-on experience with various technologies such as HTML, CSS, Sass, Less, JavaScript, jQuery, PHP, React, Redux, Python, Flask, C, MongoDB, SQL, and more. I'm passionate about web and application development and eager to contribute my skills to new projects."
        }
    },
    "journey": {
        "title": "my it journey",
        "cards": [
            {
                "title": "Omega 365 France",
                "subtitle": "Web Developer - Work",
                "description":
                    "Have successfully achieved internal certification, demonstrating my ability to meet high product standards. I work extensively with SQL Server and utilizing TSQL for effective database management. Additionally, I became proficient in utilizing the company's own framework for developing web-based applications. This certification has equipped me with the necessary skills to ensure high-quality products and deliver robust web solutions using SQL Server and the company's framework. Notably, I have had the privilege of working with prominent clients like Total Energies, delivering solutions tailored to their specific requirements.",
                "infobar": ["2023-2024", "Certificate", "Web development"],
                "link": "https://omega365.com/",
            },
            {
                "title": "la fabrique du numerique paloise",
                "subtitle": "Web Developer Integrator - Studying",
                "description":
                    "During my Alternance program for Web Developer Integrator, I gained valuable knowledge and skills across several domains. I learned design principles to create visually appealing websites and honed my abilities in full-stack web development using modern technology stacks. Additionally, I acquired proficiency in utilizing CMS systems like WordPress for efficient content management. The program also covered project planning, enabling me to effectively manage web development projects. Overall, this program equipped me with a comprehensive skill set necessary for success as a web developer integrator.",
                "infobar": ["2022-2024", "Diploma Bac+2", "Web development"],
                "link": "https://fabriquenumerique.fr/centre-de-formation/integrateur-developpeur-web/",
            },
            {
                "title": "Harvard University - edx online",
                "subtitle": "CS50 Introduction to Computer Science - Online Course",
                "description":
                    "Successfully completed one of the most iconic computer science courses, which covered a wide range of essential topics. The course delved into important areas such as abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. Moreover, the course equipped me with practical skills in various programming languages, including C, Python, SQL, JavaScript, CSS, and HTML. This diverse language exposure empowers me to tackle diverse projects and solve problems across different domains.",
                "infobar": ["2022-2023", "Certificate", "Computer science"],
                "link": "https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0",
            },
            {
                "title": "freeCodeCamp.org",
                "subtitle": "JavaScript Algorithms and Data Structures - Online Course",
                "description":
                    "In this course, I focused on mastering the fundamentals of JavaScript, including variables, arrays, objects, loops, classes, functions and more. I applied this knowledge by creating algorithms and data structures. Gained insight into two important programming paradigms: Object-Oriented Programming (OOP) and Functional Programming (FP). This course provided me with a solid foundation in JavaScript and equipped me with essential programming skills.",
                "infobar": ["2022", "Certificate", "JavaScript"],
                "link": "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
            },
            {
                "title": "JetBrains academy",
                "subtitle": "Frontend Core - Online Course",
                "description":
                    "During this course, I significantly enhanced my knowledge using the most popular development tool suite favored by programmers worldwide. The course covered the essential aspects of JavaScript, HTML, and CSS, unveiling the immense potential of modern frontend development. Through this experience, I gained a deeper understanding of how these technologies work together to create dynamic and captivating user interfaces.",
                "infobar": ["2022", "Certificate", "Frontend Web development"],
                "link": "https://hyperskill.org/tracks/5",
            },
            {
                "title": "ecenta baltic labs",
                "subtitle": "SAP Consultant (Frontend UI/UX Web developer) - Work",
                "description":
                    "Completed the initial training for UI/UX front-end development in SAP Hybris. Throughout the training, I gained hands-on experience in configuring page interfaces, which involved working with themes, creating and modifying components, layouts, and more. I also had the opportunity to work with existing frameworks / libraries and integrate new ones into the Hybris environment. This training allowed me to gain a comprehensive understanding of the structure and workings of Hybris, enhancing my skills as a UI/UX front-end developer.",
                "infobar": ["2021", "References", "Frontend Web development"],
                "link": "https://www.ecenta.com/en/",
            },
            {
                "title": "first steps ...",
                "subtitle": "Udemy, Youtube, Modern Javascript - Self learning",
                "description":
                    "I embarked on my learning journey by enrolling in an outdated course on Udemy. However, my quest for knowledge didn't end there. I furthered my learning by exploring freely available resources on the internet, such as YouTube tutorials, informative articles, and the insightful book titled \"Modern JavaScript.\" This combination of diverse materials allowed me to expand my understanding and start a new chapter in life.",
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
                    "For the final project of the Frontend Core track at Jetbrains, I created a design inspired by the original Jetbrains Academy website. With meticulous attention to detail, I recreated the elements and layout, ensuring a seamless user experience. This project allowed me to demonstrate my ability to replicate and adapt existing designs while adding my own touch of creativity.",
                "link": "https://www.figma.com/file/gLeeGgN7Hkn9FNIRRI62dG/JetBrains-Course-finished?node-id=0%3A1",
            },
            {
                "img": imgGoodBoy,
                "title": "Project Good-Boy",
                "description":
                    "As part of my studies at \"La fabrique du numérique,\" I embarked on a variety of exciting projects, and this particular design holds a special place among them. Focused on the concept of an exo-suit for dogs, the project merges cutting-edge technology with a deep understanding of animal welfare. The design I created showcases a high-tech exoskeleton tailored specifically for canine companions, enhancing their mobility, strength, and overall well-being.",
                "link": "https://www.figma.com/file/T2t3qdCNVyE1YauWNSuCUl/Project-%22GOOD-BOY%22?node-id=2%3A2",
            },
            {
                "img": imgSpeedVelo,
                "title": "Speed-Velo",
                "description":
                    "For the ecommerce project centered around a premium road bike store, I crafted a captivating design tailored to the world of high-performance cycling. Built on the WordPress platform, the website combines sleek aesthetics with user-friendly functionality, providing an immersive shopping experience for bike enthusiasts. With meticulous attention to detail, I integrated elegant visuals, intuitive navigation, and seamless product showcasing to showcase the exquisite collection of road bikes.",
                "link": "https://www.figma.com/file/UzqEeHjv54T00gJf8mP2Yg/Speed-Bike?type=design&node-id=0%3A1&t=jNcIsQFaCcUZb5uR-1",
            },
            {
                "img": imgFelicaPhoto,
                "title": "Felica Photographe",
                "description":
                    "I had the pleasure of designing a captivating landing page for a talented photographer, aimed at showcasing her unique services. The landing page captures the essence of the photographer's style, leveraging captivating imagery and thoughtful design elements to create a memorable user experiencel. This project exemplifies my ability to translate a photographer's vision into a compelling digital presence that captivates viewers and attracts potential clients.",
                "link": "https://www.figma.com/file/zkplsSrsF624tl5gE2Wt7d/Untitled?node-id=0%3A1",
            },
            {
                "img": imgMrCoffee,
                "title": "Mr Coffee",
                "description":
                    "As part of my studies at \"La fabrique du numérique,\" I had the opportunity to work on a diverse range of design projects, and this particular one involved creating a design for a coffee store. The design captures the essence of the coffee store's brand. With a focus on creating a cozy and inviting atmosphere, enhancing the overall customer experience.",
                "link": "https://www.figma.com/file/ZxgKthPoY6TpFJsEPiuVSV/mr-coffee?type=design&node-id=0%3A1&t=bu46g3WZRzZu5yfB-1",
            },
            {
                "img": imgMotivator,
                "title": "Motivator",
                "description":
                    "I had designed a motivational platform centered around storytelling. This project aimed to provide a resource where inspiring stories of remarkable individuals could be shared and celebrated. By creating an engaging platform that showcases the journeys and achievements of inspiring people, this project serves as a source of motivation and empowerment for users seeking inspiration in their own lives.",
                "link": "https://www.figma.com/file/Ol6bnmsdOYFJZDSKRH5kp7/Motivator?node-id=0%3A1",
            },
            {
                "img": imgPortfolio,
                "title": "My Portfolio",
                "description":
                    "I created my own portfolio page, showcasing my skills, experience, and creativity. With a focus on presenting my work in the best possible light, I designed a visually striking and user-friendly portfolio website. The layout embodies my personal brand and style, incorporating clean aesthetics, intuitive navigation, and effective presentation of projects. This project allowed me to demonstrate my design expertise while creating a platform that effectively represents my professional journey and serves as a showcase for my work.",
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
                "title": "EventStar",
                "subtitle": "Web application",
                "description":
                    "This application provides a comprehensive event management solution. It features role-based functionality, catering to different user types: User, Organizer, and Admin. As a User, individuals can register for events across various locations. Organizers, on the other hand, possess additional privileges. They have the ability to create and manage events that they have created. The Admin role encompasses the highest level of access and control. Administrators have the authority to manage all aspects of the application, including users, events, locations, and more.",
                "info": ["PHP", "Bootstrap", "MySQL", "JavaScript", "jQuery"],
                "link": "",
                "code": "https://github.com/mrKlava/eventstar_project"
            },
            {
                "title": "My Portfolio",
                "subtitle": "Single Page Application",
                "description":
                    "This React-based page serves as my portfolio, showcasing my work and accomplishments. While it is currently under construction, exciting updates are on the horizon. One notable enhancement is the implementation of state management using Redux-toolkit, which will ensure efficient handling and organization of data throughout the application. Additionally, the portfolio will soon become a multi-language experience, thanks to the integration of i18n.",
                "info": ["HTML", "SCSS", "React", "Redux-toolkit", "i18n"],
                "link": "https://mrklava.github.io/portfolio/",
                "code": "https://github.com/mrKlava/portfolio"
            },
            {
                "title": "Mongo",
                "subtitle": "Web page",
                "description":
                    "This practice web page was crafted with the assistance of the BrainsCloud YouTube channel. It showcases a fully responsive design, achieved through the implementation of Media Query Breakpoints in CSS. Additionally, jQuery has been utilized to enhance interactivity, particularly for mobile navigation and the collapsible accordion-style description sections. To showcase reviews, the page employs the dynamic and visually appealing Slick carousel. The project serves as an opportunity to gain hands-on experience with responsive design techniques and leveraging popular libraries like jQuery.",
                "info": ["HTML", "CSS", "JavaScript", "jQuery"],
                "link": "https://mrklava.github.io/MoGo/",
                "code": "https://github.com/mrKlava/MoGo"
            },
            {
                "title": "Outdoor",
                "subtitle": "Web page",
                "description":
                    "This web page is a replica of a captivating WordPress theme developed during a learning experience at \"La fabrique du numérique\". The project demonstrates a comprehensive and fully responsive multi-page layout that uses Media Query Breakpoints in SCSS, ensuring flawless adaptability across diverse screen sizes. Additionally, JavaScript has been employed to enhance interactivity, enabling seamless mobile navigation and enabling the dynamic configuration of the impressive Swiper slider.",
                "info": ["HTML", "Sass", "JavaScript"],
                "link": "https://mrklava.github.io/outdoor/",
                "code": "https://github.com/mrKlava/outdoor"
            },
            {
                "title": "Felica Photographe",
                "subtitle": "Single Page Application",
                "description":
                    "This web page was crafted to showcase photography skills and highlight the photographer's services. It was initially created using pure HTML and LESS, however, recognizing the need for further enhancements, the page was subsequently remastered as a multi-language Single Page Application (SPA) using the powerful React framework, combined with the flexibility and elegance of Sass for advanced styling. This revitalized version retains its core purpose of promoting the photographer's exceptional services.",
                "info": ["HTML", "Sass", "JavaScript", "React", "i18n"],
                "link": "https://mrklava.github.io/felica-zoom-photo/",
                "code": "https://github.com/mrKlava/felica-zoom-photo"
            },
            {
                "title": "ActiveBox",
                "subtitle": "Web page",
                "description":
                    "This web page was created for practice purposes, with invaluable assistance from the esteemed YouTube channel, BrainsCloud. The project showcases a seamlessly responsive website design that adeptly employs Media Query Breakpoints in CSS, ensuring optimal adaptability across various devices. Implementation of jQuery elevates user experience by introducing interactivity, notably in the form of mobile navigation and accordion-style description dropdowns. Slick carousel was added to showcase testimonials.",
                "info": ["HTML", "CSS", "JavaScript", "jQuery"],
                "link": "https://mrklava.github.io/activeBox/",
                "code": "https://github.com/mrKlava/activeBox"
            },
            {
                "title": "Jetbrains Project",
                "subtitle": "Single Page Application",
                "description":
                    "The \"Portfolio\" project serves as the culmination of the JetBrains course, showcasing five other projects completed throughout the program. Originally developed using pure HTML, CSS, and JS, these projects have been skillfully remastered using the powerful React framework. This transition to React brings numerous benefits, including improved performance, enhanced interactivity, and a more efficient development process.The \"Portfolio\" project stands as a testament to the acquired skills and knowledge from the course, highlighting the ability to leverage cutting-edge technologies to elevate the quality and functionality of web applications.",
                "info": ["HTML", "CSS", "JavaScript", "React"],
                "link": "https://mrklava.github.io/jetbrains-course/",
                "code": "https://github.com/mrKlava/jetbrains-course"
            },
            {
                "title": "Motivator",
                "subtitle": "Single Page Application",
                "description":
                    "This pet project, developed using React, aims to create a motivating platform with multiple pages, featuring inspiring stories. While still a work in progress, the project demonstrates a commitment to delivering a comprehensive and dynamic platform. To effectively manage states, Redux-toolkit has been employed, providing a robust state management solution. Additionally, MongoDB Realm is utilized for authentication and data storage, ensuring secure and reliable handling of user information. The project's future plans include implementing multilingual support using i18n.",
                "info": ["HTML", "Sass", "JavaScript", "React", "i18n", "Redux", "React Router", "MongoDB"],
                "link": "https://mrklava.github.io/motivator_react/",
                "code": "https://github.com/mrKlava/motivator_react"
            },
            {
                "title": "Hangman",
                "subtitle": "Web game",
                "description":
                    "Hangman is an early project that showcases the implementation of the beloved classic game, Hangman. This engaging web application was developed using the fundamental languages of the Internet: HTML, CSS, and JavaScript. By leveraging these three core technologies, the project brings the timeless game of Hangman to life. Through a combination of HTML for structuring the content, CSS for styling and layout, and JavaScript for logic and interactivity, Hangman offers an entertaining and immersive gaming experience.",
                "info": ["HTML", "CSS", "JavaScript"],
                "link": "https://mrklava.github.io/Hangman/",
                "code": "https://github.com/mrKlava/Hangman"
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
            { name: 'LinkedIn', src: 'https://www.linkedin.com/in/artursklava/', svg: <SvgLinkedin />, type: "link", link: "https://www.linkedin.com/in/artursklava/" },
            { name: 'GitHub', src: 'https://github.com/mrKlava', svg: <SvgGithub />, type: "link", link: "https://github.com/mrKlava" },
            { name: 'Email', src: 'mr.a.klava@gmail.com', svg: <SvgEmail />, type: "email", link: "mailto:mr.a.klava@gmail.com?subject=Portfolio Page" },
            { name: 'Number', src: '+33782974495', svg: <SvgPhone />, type: "number", link: "tel:+33782974495" },
        ]
    }
}