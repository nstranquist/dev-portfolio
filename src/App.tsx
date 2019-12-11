import React from 'react';

// import components
import { AppBar } from './components/layout/AppBar'
import { AppFooter } from './components/layout/AppFooter'
import { Projects as ProjectsPage } from './pages/Projects'

// import content
import { PageContent } from './content'

// import styles
import { useAppStyles } from './styles/AppStyles'

export default function App() {
  const AppStyles = useAppStyles()
  const { headerContent, footerContent } = PageContent

  return (
    <>
      <AppBar content={headerContent} iconClass={AppStyles.icon} />
      <ProjectsPage />
      <AppFooter content={footerContent} footerClass={AppStyles.footer} />
    </>
  );
}
