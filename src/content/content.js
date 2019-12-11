
// content needed accross all pages
export const PageContent = {
  "headerContent": {
    navTitle: "Nico's Portfolio",
    //imgUrl: "path-to-image"
  },
  "footerContent": {
    heading: "Thanks for stopping by!",
    // subheading: ** will just hardcode, to keep it simple. Because Links are in Subheading
    smallText: "Nico Stranquist, 2019"
  }
}

// content by page
export const ProjectsContent = {
  "ProjectsHero": {
    title: 'Nico Stranquist',
    subtitle: 'An enthusiastic, well-rounded software developer with specialized skills in javascript',
    ctaPrimary: 'GitHub',
    ctaSecondary:' Contact',
    // add social media button bar beneath this, as an array of objects with title, iconName, and link
  },
  "Projects": [
    {
      title: "My First Project",
      details: "For testing purposes only",
      url: "https://github.com",
      imageUrl: "https://placekitten.com/100/100"
    }
  ]
}