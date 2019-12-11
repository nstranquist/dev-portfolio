import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// import pages for each route
import { AboutMe } from './pages/AboutMe'
import { Projects } from './pages/Projects'
import { ProjectDetail } from './pages/ProjectDetail'  // use params.id to get projects data

export const Routes = () => {
  // TODO: pass props into components with util function
  return (
    <Switch>
      <Route exact path='/aboutme' component={AboutMe} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/projects/:id' component={ProjectDetail} />
      <Route path='/' render={() => <Redirect to='/projects' />} />
    </Switch>
  )
}
