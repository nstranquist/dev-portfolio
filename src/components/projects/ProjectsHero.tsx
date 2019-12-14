import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import GitHubIcon from '@material-ui/icons/GitHub';

interface IProps {
  content: any
  heroButtonsClass: any
  iconClass: any
}

export const ProjectsHero: React.FC<IProps> = ({
  content: {
    title,
    subtitles,
    ctaPrimary,
    ctaSecondary
  },
  heroButtonsClass,
  iconClass
}) => {
  return (
    <>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        {subtitles.map((subtitle: string, index: number) => (
          <React.Fragment key={index}>
            <span>{subtitle}</span>
            <br/>
          </React.Fragment>
        ))}
      </Typography>
      <div className={heroButtonsClass}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Fab variant="extended" color="primary" href="https://github.com/nstranquist" target="_blank">
              <GitHubIcon className={iconClass} />
              {ctaPrimary}
            </Fab>
          </Grid>
          <Grid item>
            <Link to='/aboutme'>
              <Fab variant="extended">
                {/* TODO: set up routing so I can pull this page up */}
                {ctaSecondary}
              </Fab>
            </Link>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
