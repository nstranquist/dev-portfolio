import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AttachFileIcon from '@material-ui/icons/AttachFile'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
// styled components
// import { CardMediaStyle } from '../../styles/MediaCard'

export interface ProjectCard {
  title: string
  details: string
  imageUrl?: string
  imageTitle?: string
  codeUrl: string
  demoUrl?: string
  detailsPath: string
}

interface IProps {
  cardData: any
  cardClass: any
  cardContentClass: any
  cardMediaClass: any
  detailsPath: string
  // cardIconClass: any
}

// issue: <CardMedia /> not letting me assign an 'alt' property to the image... hmm
export const ProjectCard: React.FC<IProps> = ({
  cardData: {
    title,
    details,
    imageUrl,
    imageTitle="description of the image",
    codeUrl,
    demoUrl=null
  },
  cardClass,
  cardContentClass,
  cardMediaClass,
  detailsPath,
  // cardIconClass
}) => {
  // could add a hover or 'flip' feature to card, would pass in as prop to <CardWrapped> or something
  // const [flipped, setFlipped] = useState<boolean>(false)
  const getRandomImage = () => {
    // there are 3 possible image backgrounds: blue, green, and orange
    const randomNumber = Math.floor(Math.random() * 3);
    console.log('random number:', randomNumber)
    switch(randomNumber) {
      case 0:
        return '/images/blue-background.png'
      case 1:
        return '/images/green-background.png'
      case 2:
        return '/images/orange-background.png'
    }
  }

  return (
      <Card className={cardClass}>
        <Link to={detailsPath} style={{color:'inherit', textDecoration:'none'}}>
          {imageUrl ? (
            <CardMedia
              className={cardMediaClass}
              image={imageUrl}
              title={imageTitle}
            />
          ) : (
            <CardMedia
              className={cardMediaClass}
              image={getRandomImage()}
              title={imageTitle}
            />
          )}
        </Link>
        <CardContent className={cardContentClass}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>
            {details}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href={codeUrl} target="_blank">
            {/* Code/Nav Icon Here */}
            <AttachFileIcon />
            Code
          </Button>
          {demoUrl && (
            <Button size="small" color="primary" href={demoUrl} target="_blank">
              See Demo
              <ArrowForwardIcon />
            </Button>
          )}
        </CardActions>
      </Card>
  )
}
