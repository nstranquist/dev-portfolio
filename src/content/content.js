
/**** style guide for content formatting: ****/

// 1) if item is an array (multiple text strings to be formatted),
// then it"s name should be plural (i.e. "subtitles")
// 2) each page"s content should be exported as its own object
// 3) "Page Content" contains all content needed for the base layout (nothing page-specific)
// 3) grammar: camelCase for variable names, unless it is a page header section, where all words are captilized

/**** end of style guide ****/


export const PageContent = {
  "headerContent": {
    navTitle: "Nico Stranquist | Portfolio",
    //imgUrl: "path-to-image"
  },
  "footerContent": {
    heading: "Thanks for stopping by!",
    smallText: "Nico Stranquist, 2020"
  }
}

// content by page
export const AboutMeContent = {
  "Overview": {
    title: "A Technical Overview",
    details: "An enthusiastic software developer with specialization in javascript"
  },
  languages: [
    {
      name: "Javascript",
      level: "advanced",
      years: 5,
      // projects: 28,
    },
    {
      name: "Python",
      level: "intermediate",
      years: 2,
    },
    {
      name: "NoSQL",
      level: "intermediate",
      years: 4,
    },
    {
      name: "SQL",
      level: "beginner",
      years: 1
    },
    {
      name: "Java",
      level: "beginner",
      years: 1,
    },
    {
      name: "C++",
      level: "beginner",
      years: 0.5,
    },
    {
      name: "C#",
      level: "intermediate",
      years: 2
    },
  ],
  skills: [
    {
      id: 'frontend',
      sectionTitle: "Front-End Web Development:",
      details: [
        "HTML", "CSS",
        "JavaScript / ES6/7/8",
        "React.js", "Vue.js", "Svelte.js",
        "WebGL", "Three.js",
      ]
    },
    {
      id: 'mobile',
      sectionTitle: "Mobile Development:",
      details: [
        "React Native",
        "Flutter / Dart",
        "Android (Native)"
      ]
    },
    {
      id: "api",
      sectionTitle: "Api Development",
      details: [
        "REST",
        "RESTful Microservices",
        "GraphQL",
        "JSON",
      ]
    },
    {
      id: 'backend',
      sectionTitle: "Backend Development:",
      details: [
        "Node.js", "Express.js",
        "Websockets / Socket.io",
        "Flask", "Django",
        "NoSQL", "SQL",
        "MongoDB", "Firestore", "Postgres", "MySQL", "Redis",
        "FastAPI",
      ]
    },
    {
      id: 'cloud',
      sectionTitle: "Cloud Platforms:",
      details: [
        "Docker / Compose",
        "AWS",
        "Google Cloud",
        "Firebase/Firestore",
      ]
    },
    {
      id: "testing",
      sectionTitle: "Testing Applications",
      details: [
        "Jest",
        "Mocha",
        "Chai"
      ]
    },
    {
      id: 'game',
      sectionTitle: "Game Development:",
      details: [
        "Unity",
        "Phaser.js",
        "Socket.io",
      ]
    },
  ],
}

export const ProjectsContent = {
  "ProjectsHero": {
    title: "Hi, my name is Nico.",
    subtitles: [
      "Welcome to my art gallery--",
      "I mean, dev portfolio!",
    ],
    ctaPrimary: "GitHub",
    ctaSecondary:"Tech Skills",
    // TODO: add social media button bar beneath this, as an array of objects with title, iconName, and link
  },
  "Projects": [
    {
      id: "idle-time",
      title: "Idle Time",
      details: "A fullstack productivity app with a unique twist",
      imageUrl: "/images/idle-time.png",
      imageTitle: "screenshot of the idle time project",
      codeUrl: "https://github.com/nstranquist/idle-time"
    },
    {
      id: "runescape-sim",
      title: "Runescape Sim",
      details: "A simulation game built with React, Node/Express, and MongoDB",
      imageUrl: "/images/runescape-sim.png",
      imageTitle: "screenshot of the runescape-sim project",
      codeUrl: "https://github.com/nstranquist/runescape-sim",
      demoUrl: "https://sharp-minsky-3d2211.netlify.app"
    },
    {
      id: "kanban-board",
      title: "KanBan Board",
      details: "Re-creating a tool used in Agile development",
      imageUrl: "/images/kanban-board.png",
      imageTitle: "screenshot of the kanban board project",
      codeUrl: "https://github.com/nstranquist/coding-challenge",
      demoUrl: "https://nstranquist.github.io/coding-challenge/",
    },
    {
      id: "free-code-explorer",
      title: "FreeCodeExplorer",
      details: "A tribute to FreeCodeCamp, this app helps users find courses to learn coding and keep track of their progress",
      imageUrl: "/images/free-code-explorer.png",
      imageTitle: "screenshot of FreeCodeExplorer project",
      codeUrl: "https://github.com/nstranquist/free-code-explorer",
      demoUrl: "https://wizardly-golick-3964fe.netlify.app/"
    },
    {
      id: "meme-battle",
      title: "Meme Battle",
      details: "A mobile app made during a hackathon where friends can battle each other! Uses react-native, giphy search, mongodb, and node.js",
      imageUrl: "/images/meme-battle.jpg",
      imageTitle: "screenshot of the mobile app membattle",
      codeUrl: "https://github.com/nstranquist/meme-battle",
      demoUrl: "https://devpost.com/software/memebattle-98m7vo"
    },
    {
      id: "openstl-vacancy-search",
      title: "OpenSTL Vacancy Search",
      details: "A tool made in collaboration with OpenSTL for searching vacancies in the city of St. Louis",
      imageUrl: "/images/vacancy-search.png",
      imageTitle: "a screenshot of the project",
      codeUrl: "https://github.com/OpenSTL/VacantSearch",
      demoUrl: "https://openstl.github.io/VacantSearch/",
    },
    {
      id: "rpg-quest-pt-3",
      title: "RPG Quest (pt 3)",
      details: "An rpg game where users can level up and fight monsters, or elect to practice their hacking skills (Node.js version coming soon, hackers)",
      // imageUrl: "",
      imageTitle: "screenshot of rpg quest project",
      codeUrl: "https://github.com/nstranquist/rpg-quest-pt3",
      // demoUrl: "",
    },
    {
      id: "coding-idler",
      title: "Coding Idler",
      details: "A classic idler game, created in plain html, css, and javascript",
      imageUrl: "/images/coding-idler.png",
      imageTitle: "screenshot of coding idler",
      codeUrl: "https://github.com/nstranquist/coding-idler-pt1",
      demoUrl: "https://coding-idler.surge.sh/",
    },
    {
      id: "js-facial-recognition",
      title: "JS Facial Recognition",
      details: "Real-time facial recognition in-browser using JavaScript",
      // imageUrl: "",
      imageTitle: "screenshot of facial recognition project",
      codeUrl: "https://github.com/nstranquist/js-facial-recog",
      // demoUrl: "",
    },
    {
      id: "real-estate-dashboard",
      title: "Real Estate Dashboard",
      details: "A real estate brokerage dashboard made for a friend",
      imageUrl: "/images/brokerage-dashboard.png",
      imageTitle: "screenshot of the real estate dashboard",
      codeUrl: "https://github.com/nstranquist/real-estate-dashboard",
      demoUrl: "https://sharp-colden-afe3b6.netlify.app"
    },
    {
      id: "caffeinder",
      title: "Caffeinder",
      details: "An app to find caffeine near you! Uses Google Places API with React front-end and Mapbox to help render the map",
      imageUrl: "/images/caffeinder.png",
      imageTitle: "screenshot of caffeinder project",
      codeUrl: "https://github.com/nstranquist/caffeinder",
    },
    {
      id: "timeshift-clock",
      title: "TimeShift Clock",
      details: "Use this app to shift time in your favor. It redesigns the traditional clock with a focus on human productivity and psychology",
      imageUrl: "/images/timeshift-clock.png",
      imageTitle: "screenshot of the timeshift clock app",
      codeUrl: "nstranquist/timeshift-clock-grayscale",
      demoUrl: "https://timeshift-grayscale.surge.sh",
    },
    {
      id: "startup-dashboard",
      title: "Startup Dashboard",
      details: "A dashboard prototype made for a local STL startup",
      // imageUrl: "",
      // imageTitle: "screenshot of the startup dashboard project",
      codeUrl: "https://github.com/nstranquist/startup-dashboard",
      demoUrl: ""
    },
    {
      id: "dashboard-design",
      title: "Design for a Startup Dashboard",
      details: "A simple design for a startup dashboard",
      imageUrl: "/images/dashboard-ui.png",
      imageTitle: "screenshot of the startup dashboard",
      codeUrl: "https://github.com/nstranquist/dashboard-design",
      demoUrl: "https://dashboard-design.surge.sh/"
    },
    {
      id: "city-passport",
      title: "City Passport",
      details: "Lets users collect stamps while visiting the coolest places in their city",
      // imageUrl: "",
      imageTitle: "screenshot of city passport project",
      codeUrl: "https://github.com/nstranquist/city-passport",
      // demoUrl: "",
    },
    {
      id: "event-dashboard-react",
      title: "Event Dashboard in React",
      details: "A minimalist dashboard where users can sign in, add and delete events",
      // imageUrl: "",
      imageTitle: "screenshot of the events dashboard",
      codeUrl: "https://github.com/nstranquist/react-dashboard-v1",
      demoUrl: "https://event-dashboard-dee20.firebaseapp.com",
    },
  ]
}

    // {
    //   id: "my-trade-plan",
    //   title: "MyTradePlan",
    //   details: "An app that helps users create, track, and update their trades",
    //   imageUrl: "",
    //   imageTitle: "A screenshot of the app",
    //   codeUrl: "https://github.com/nstranquist/my-trade-plan",
    //   demoUrl: "",
    // },