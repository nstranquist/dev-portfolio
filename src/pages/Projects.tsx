import React from 'react';
// import { Link } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// import custom components
import { ProjectsHero } from '../components/projects/ProjectsHero'
import { ProjectCard } from '../components/projects/ProjectCard'

// import content object
import { ProjectsContent } from '../content'

// import styles
import { useProjectStyles } from '../styles/ProjectsStyles'


export const Projects = () => {
  const classes = useProjectStyles();

  const projects = ProjectsContent.Projects

  return (
    <>
      <CssBaseline />
      <main>
        {/* Hero Section */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <ProjectsHero
              content={ProjectsContent.ProjectsHero}
              heroButtonsClass={classes.heroButtons} 
              iconClass={classes.icon}
            />
          </Container>
        </div>
        {/* Projects Grid Section */}
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {projects.map((project, index) => (
                <Grid item key={project.id} xs={12} sm={6} md={4}>
                  <ProjectCard
                    cardData={project} 
                    cardClass={classes.card}
                    cardContentClass={classes.cardContent}
                    cardMediaClass={classes.cardMedia}
                    detailsPath={`/projects/${project.id}`}
                    imageNumber={index+1}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </main>
    </>
  );
}
