import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

interface IProps {
  content: any
  heroButtonsClass: any
}

export const ProjectsHero: React.FC<IProps> = ({
  content: {
    title,
    subtitle,
    ctaPrimary,
    ctaSecondary
  },
  heroButtonsClass
}) => {
  return (
    <>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        {subtitle}
      </Typography>
      <div className={heroButtonsClass}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button variant="contained" color="primary">
              {ctaPrimary}
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              {ctaSecondary}
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
