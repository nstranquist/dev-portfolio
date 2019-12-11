import React from 'react';

// import components
import { AppBar } from './components/layout/AppBar'
import { AppFooter } from './components/layout/AppFooter'
import { Projects as ProjectsPage } from './pages/Projects'
import { useAppStyles } from './styles/AppStyles'

export default function App() {
  const AppStyles = useAppStyles()

  return (
    <>
      <AppBar iconClass={AppStyles.icon} />
      <ProjectsPage />
      <AppFooter footerClass={AppStyles.footer} />
    </>
  );
}
