import React from 'react'
import { Container, Typography, Divider } from '@material-ui/core'
import { AboutMeContent } from '../content'

const { Overview, Skills } = AboutMeContent

export const AboutMe = () => {
  return (
    <Container style={{paddingTop: 30}} className="aboutme-container">
      <Typography variant="h2" gutterBottom>About Nico</Typography>
      <Typography variant="body1" gutterBottom>Some descriptive text about nico. This section should eventually include:</Typography>
      <ul>
        <li>tech skills</li>
        <li>social media</li>
        <li>other cool graphics</li>
      </ul>
      <Divider style={{marginTop:20, marginBottom:20}} />
      {/* Add Content Here */}
      <section className="overview-section">
        <Typography variant="h5" gutterBottom>Overview</Typography>
        <Typography variant="body1" gutterBottom>{Overview.title}</Typography>
        <Typography variant="body1" gutterBottom>{Overview.details}</Typography>
        <Divider style={{marginTop:20, marginBottom:30}} />
      </section>
      <section className="skills-section">
        <Typography variant="h5" gutterBottom>Skills</Typography>
        {Skills.skills.map((skill: string) => {
          if(skill.length < 1)
            return <Divider style={{marginTop:15, marginBottom:10}} />

          return <Typography>{skill}</Typography>
        })}
      </section>
    </Container>
  )
}
