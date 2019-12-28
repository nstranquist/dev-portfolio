import React from 'react'
import { Container, Typography, Divider } from '@material-ui/core'
import { AboutMeContent } from '../content'

const { Overview, Skills } = AboutMeContent

export const AboutMe = () => {
  return (
    <Container style={{paddingTop: 30}} className="aboutme-container">
      <Typography variant="h2" gutterBottom>About Nico</Typography>
      <Typography variant="body1" gutterBottom>
          Some descriptive text about nico. This section should eventually include:</Typography>

      <Divider style={{marginTop:20, marginBottom:20}} />
      
      {/* Overview Section */}
      <section className="overview-section">
        <Typography variant="h5" gutterBottom>Overview</Typography>
        <Typography variant="body1" gutterBottom>{Overview.title}</Typography>
        <Typography variant="body1" gutterBottom>{Overview.details}</Typography>
      </section>

      <Divider style={{marginTop:20, marginBottom:30}} />

      {/* Skills Section */}
      <section className="skills-section">
        <Typography variant="h5" gutterBottom>Skills</Typography>
        {Skills.skills.map((skill: string, index: number) => {
          if(skill.length < 1)
            return <Divider key={index} style={{marginTop:15, marginBottom:10}} />

          return <Typography key={index}>{skill}</Typography>
        })}
      </section>

      {/* <Divider style={{marginTop:20, marginBottom:30}} /> */}

      {/* More Content Here */}
    </Container>
  )
}
