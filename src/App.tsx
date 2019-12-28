import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes'

// import components
import { AppBar } from './components/layout/AppBar'
import { AppFooter } from './components/layout/AppFooter'

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
      <div style={{display:'flex', flexDirection:'column', minHeight:'calc(100vh - 64px)'}}>
        <div style={{flex: 1}}>
          <Routes />
        </div>
        <AppFooter content={footerContent} footerClass={AppStyles.footer} />
      </div>
    </BrowserRouter>
  );
}
