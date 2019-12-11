import React from 'react'
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
        {subtitles.map((subtitle: string) => (
          <>
            <span>{subtitle}</span>
            <br/>
          </>
        ))}
      </Typography>
      <div className={heroButtonsClass}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Fab variant="extended" color="primary" href="https://github.com" target="_blank">
              <GitHubIcon className={iconClass} />
              {ctaPrimary}
            </Fab>
          </Grid>
          <Grid item>
            <Fab variant="extended">
              {/* TODO: set up routing so I can pull this page up */}
              {ctaSecondary}
            </Fab>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
