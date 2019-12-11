import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// import custom components
import { ProjectsHero } from '../components/projects/ProjectsHero'

// import content object to populate page with portfolio data
import { ProjectsContent } from '../content'

// import styles
import { useProjectStyles } from '../styles/ProjectsStyles'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Projects = () => {
  const classes = useProjectStyles();

  return (
    <>
      <CssBaseline />
      <main>
        {/* Hero Section */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <ProjectsHero content={ProjectsContent.ProjectsHero} heroButtonsClass={classes.heroButtons} />
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
