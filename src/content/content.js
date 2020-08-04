
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
