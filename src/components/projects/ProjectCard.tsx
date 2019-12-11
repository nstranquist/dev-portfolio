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

export interface ProjectCard {
  title: string
  subtitle: string
  imageUrl?: string
  imageTitle?: string
  codeUrl: string
  demoUrl?: string
}

interface IProps {
  cardData: any
  cardClass: any
  cardContentClass: any
  cardMediaClass: any
  // cardIconClass: any
}

// issue: <CardMedia /> not letting me assign an 'alt' property to the image... hmm
export const ProjectCard: React.FC<IProps> = ({
  cardData: {
    title,
    subtitle,
    imageUrl="https://placekitten.com/500/300",
    imageTitle="Image Title",
    codeUrl,
    demoUrl=null
  },
  cardClass,
  cardContentClass,
  cardMediaClass,
  // cardIconClass
}) => {
  // could add a hover or 'flip' feature to card, would pass in as prop to <CardWrapped> or something
  const [flipped, setFlipped] = useState<boolean>(false)

  return (
    // <Link to={`/projects/${title}`} style={{textDecoration: 'none', color:'inherit'}}>
      <Card className={cardClass}>
        <CardMedia
          className={cardMediaClass}
          image={imageUrl}
          title={imageTitle}
        />
        <CardContent className={cardContentClass}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>
            {subtitle}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href={codeUrl} target="_blank">
            {/* Code/Nav Icon Here */}
            <AttachFileIcon />
            Code
          </Button>
          <Button size="small" color="primary" href={demoUrl} target="_blank">
            See Demo
            <ArrowForwardIcon />
          </Button>
        </CardActions>
      </Card>
    // </Link>
  )
}
