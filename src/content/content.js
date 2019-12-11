
/**** style guide for content formatting: ****/

// 1) if item is an array (multiple text strings to be formatted),
// then it's name should be plural (i.e. "subtitles")
// 2) each page's content should be exported as its own object
// 3) 'Page Content' contains all content needed for the base layout (nothing page-specific)
// 3) grammar: camelCase for variable names, unless it is a page header section, where all words are captilized

/**** end of style guide ****/


export const PageContent = {
  "headerContent": {
    navTitle: "Nico Stranquist | Portfolio",
    // currently using hardcoded GitHub icon / link
    //imgUrl: "path-to-image"
  },
  "footerContent": {
    heading: "Thanks for stopping by!",
    // subheading: ** will just hardcode, to keep it simple. Because Links are in Subheading
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
    skills: [
      'JavaScript',
      'React.js',
      'NoSQL',
      'etc...'
    ],
  },
}

export const ProjectsContent = {
  "ProjectsHero": {
    title: 'Hi, my name is Nico.',
    subtitles: [
      "Welcome to my art gallery--",
      "I mean, dev portfolio!",
    ],
    // this content can just be hard-coded in the component actually
    ctaPrimary: 'GitHub',
    ctaSecondary:'Tech Skills',
    // add social media button bar beneath this, as an array of objects with title, iconName, and link
  },
  "Projects": [
    {
      title: "My First Project",
      details: "For testing purposes only",
      url: "https://github.com",
      imageUrl: "https://placekitten.com/300/500",
      imageTitle: 'example title',
      codeUrl: 'https://github.com/nstranquist',
      demoUrl: 'https://github.com',
    },
    {
      title: "My First Project",
      details: "For testing purposes only",
      url: "https://github.com",
      imageUrl: "https://placekitten.com/300/500",
      imageTitle: 'example title',
      codeUrl: 'https://github.com/nstranquist',
      demoUrl: 'https://github.com',
    },
    {
      title: "My First Project",
      details: "For testing purposes only",
      url: "https://github.com",
      imageUrl: "https://placekitten.com/300/500",
      imageTitle: 'example title',
      codeUrl: 'https://github.com/nstranquist',
      demoUrl: 'https://github.com',
    },
    {
      title: "My First Project",
      details: "For testing purposes only",
      url: "https://github.com",
      imageUrl: "https://placekitten.com/300/500",
      imageTitle: 'example title',
      codeUrl: 'https://github.com/nstranquist',
      demoUrl: 'https://github.com',
    },
    {
      title: "My First Project",
      details: "For testing purposes only",
      url: "https://github.com",
      imageUrl: "https://placekitten.com/300/500",
      imageTitle: 'example title',
      codeUrl: 'https://github.com/nstranquist',
      demoUrl: 'https://github.com',
    },
    {
      title: "My First Project",
      details: "For testing purposes only",
      url: "https://github.com",
      imageUrl: "https://placekitten.com/300/500",
      imageTitle: 'example title',
      codeUrl: 'https://github.com/nstranquist',
      demoUrl: 'https://github.com',
    },
    {
      title: "My First Project",
      details: "For testing purposes only",
      url: "https://github.com",
      imageUrl: "https://placekitten.com/300/500",
      imageTitle: 'example title',
      codeUrl: 'https://github.com/nstranquist',
      demoUrl: 'https://github.com',
    },
    {
      title: "My First Project",
      details: "For testing purposes only",
      url: "https://github.com",
      imageUrl: "https://placekitten.com/300/500",
      imageTitle: 'example title',
      codeUrl: 'https://github.com/nstranquist',
      demoUrl: 'https://github.com',
    },
    {
      title: "My First Project",
      details: "For testing purposes only",
      url: "https://github.com",
      imageUrl: "https://placekitten.com/300/500",
      imageTitle: 'example title',
      codeUrl: 'https://github.com/nstranquist',
      demoUrl: 'https://github.com',
    },
    {
      title: "My First Project",
      details: "For testing purposes only",
      url: "https://github.com",
      imageUrl: "https://placekitten.com/300/500",
      imageTitle: 'example title',
      codeUrl: 'https://github.com/nstranquist',
      demoUrl: 'https://github.com',
    },
  ]
}
