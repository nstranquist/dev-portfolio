import React, {useState, useEffect} from 'react'
import { projects } from '../content'
import { Project } from '../types'
import { Container, Typography } from '@material-ui/core'
import Image from 'material-ui-image'

interface IProps {
  match: any
}

export const ProjectDetail: React.FC<IProps> = ({
  match,
}) => {
  const [project, setProject] = useState<Project | null>(null)
  
  useEffect(() => {
    // find project from projects content
    findProject()

  }, [match.params.id]) // only re-runs the effect of the match.params.id changes

  const findProject = () => {
    const project: Project = projects.find((project: Project) => project.id === match.params.id)!
    if(project) {
      setProject(project)
      console.log('set project to:', project)
    }
    else alert(`error: project ${match.params.id} is undefined`)
  }

  return (
    <Container className="project-detail-container" style={{paddingTop:30, textAlign:'center'}}>
      {project ? (
        <>
          <Typography variant="h2" gutterBottom className="project-detail-header">
            {project.title}</Typography>
          <Typography variant="h6" gutterBottom style={{marginBottom:20}}>
            {project.details}</Typography>
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              //@ts-ignore
              alt={project.imageTitle ? project.imageTitle : 'no image description provided'}
              onClick={() => window.location.assign(project.demoUrl!)}
              aspectRatio={(16/9)}
              style={{cursor:'pointer'}}
            />
          ) : (
            <p>no image available</p>
          )}
          {/* TODO: add readme snippet, demo, ... what else? add suggestions box? */}
        </>
      ) : (
        <p>loading project...</p>
      )}
    </Container>
  )
}
