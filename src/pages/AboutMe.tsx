import React from 'react'
import styled from 'styled-components'
import { Container, Typography, Divider } from '@material-ui/core'
import { AboutMeContent } from '../content'
import { SkillItem } from '../components/SkillItem'

const { languages, skills } = AboutMeContent

export interface ISkill {
  id: string
  sectionTitle: string
  details: [string]
}
export interface ILanguage {
  name: string
  level: string // 'beginner' | 'intermediate' | 'advanced'
  years: number
}

export const AboutMe = () => {
  return (
    <Container style={{paddingTop: 30}} className="aboutme-container">
      <Typography variant="h2" gutterBottom>Skills</Typography>
      {/* <Typography variant="body1" gutterBottom>
          Some descriptive text about nico. This section should eventually include:</Typography> */}

      {/* <Divider style={{marginTop:20, marginBottom:20}} /> */}
      
      {/* Overview Section */}
      {/* <section className="overview-section">
        <Typography variant="h5" gutterBottom>Overview</Typography>
        <Typography variant="body1" gutterBottom>{Overview.title}</Typography>
        <Typography variant="body1" gutterBottom>{Overview.details}</Typography>
      </section> */}

      <Divider style={{marginTop:20, marginBottom:20}} />

      <section className="skills-section languages-section">
        {/* <Typography variant="h5" gutterBottom>Languages:</Typography> */}

        <LanguageList className="language-list">
          {languages.map((language: ILanguage) => (
            <div className="language-item">
              <Typography>{language.name}</Typography>
            </div>
          ))}
        </LanguageList>
      </section>

      <Divider style={{marginTop:20, marginBottom:30}} />

      {/* Skills Section */}
      <section className="skills-section">

        {skills.map((skill: any) => (
          <SkillItem
            key={skill.id}
            skill={skill}
          />
        ))}

        {/* {Skills.skills.map((skill: string, index: number) => {
          if(skill.length < 1)
            return <Divider key={index} style={{marginTop:15, marginBottom:10}} />

          return <Typography key={index}>{skill}</Typography>
        })} */}
      </section>

      {/* <Divider style={{marginTop:20, marginBottom:30}} /> */}

      {/* More Content Here */}
    </Container>
  )
}

const LanguageList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .language-item {
    margin-right: 1rem;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`