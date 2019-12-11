import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes'

// import components
import { AppBar } from './components/layout/AppBar'
import { AppFooter } from './components/layout/AppFooter'
// import { Projects as ProjectsPage } from './pages/Projects'

// import content
import { PageContent } from './content'

// import styles
import { useAppStyles } from './styles/AppStyles'

export default function App() {
  const AppStyles = useAppStyles()
  const { headerContent, footerContent } = PageContent

  return (
    <BrowserRouter>
      <AppBar content={headerContent} iconClass={AppStyles.icon} />
      {/* TODO: replace with some kind of <RouterView> to switch routes */}
      <Routes />
      <AppFooter content={footerContent} footerClass={AppStyles.footer} />
    </BrowserRouter>
  );
}
