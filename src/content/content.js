
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
    smallText: "Nico Stranquist, 2019"
  }
}

// content by page
export const AboutMeContent = {
  "Overview": {
    title: "A Technical Overview",
    details: "An enthusiastic, well-rounded software developer with specialized skills in javascript"
  },
  "Skills": {
    // TODO: break skills up into individual items
    skills: [
      "Front-End Web Development:",
      "- Html, Css, Pre-processors",
      "- JavaScript",
      "- React.js",
      "- Vue.js",
      "- WebGL, three.js",
      "",
      "Mobile Development:",
      "- React Native",
      "- Flutter",
      "",
      "Game Development:",
      "- Unity",
      "- Phaser.js",
      "- Socket.io",
      "",
      "Backend Development:",
      "- Node.js",
      "- Flask, Django",
      "- NoSQL, SQL",
      "- MongoDB, Postgres, MySQL",
      "",
      "Cloud Platforms:",
      "- AWS",
      "- Firebase",
      "- App Engine",
    ],
  },
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
      id: "kanban-board",
      title: "KanBan Board",
      details: "Re-creating a tool used in Agile development",
      imageUrl: "/images/kanban-board.png",
      imageTitle: "screenshot of the kanban board project",
      codeUrl: "https://github.com/nstranquist/coding-challenge",
      demoUrl: "https://nstranquist.github.io/coding-challenge/",
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
      id: "city-passport",
      title: "City Passport",
      details: "Lets users collect stamps while visiting the coolest places in their city",
      // imageUrl: "",
      imageTitle: "screenshot of city passport project",
      codeUrl: "https://github.com/nstranquist/city-passport",
      // demoUrl: "",
    },
    {
      id: "timeshift-clock",
      title: "TimeShift Clock",
      details: "Use this app to shift time in your favor. It redesigns the traditional clock with a focus on human productivity and psychology",
      // imageUrl: "",
      imageTitle: "screenshot of the timeshift clock app",
      codeUrl: "nstranquist/timeshift-clock-grayscale",
      demoUrl: "https://timeshift-grayscale.surge.sh",
    },
    {
      id: "coding-idler",
      title: "Coding Idler",
      details: "A classic idler game, created in plain html, css, and javascript",
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
      id: "event-dashboard-react",
      title: "Event Dashboard in React",
      details: "A minimalist dashboard where users can sign in, add and delete events",
      // imageUrl: "",
      imageTitle: "screenshot of the events dashboard",
      codeUrl: "https://github.com/nstranquist/react-dashboard-v1",
      demoUrl: "https://event-dashboard-dee20.firebaseapp.com",
    }
  ]
}
