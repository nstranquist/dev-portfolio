import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AttachFileIcon from '@material-ui/icons/AttachFile'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Project } from '../../types';
// styled components
// import { CardMediaStyle } from '../../styles/MediaCard'

interface IProps {
  cardData: Project
  cardClass: any
  cardContentClass: any
  cardMediaClass: any
  detailsPath: string
  imageNumber: number
  // cardIconClass: any
}

export const ProjectCard: React.FC<IProps> = ({
  cardData: {
    id,
    title,
    details,
    imageUrl,
    imageTitle="this project image has no description",
    codeUrl,
    demoUrl=null
  },
  cardClass,
  cardContentClass,
  cardMediaClass,
  detailsPath,
  imageNumber,
  // cardIconClass
}) => {
  // could add a hover or 'flip' feature to card, would pass in as prop to <CardWrapped> or something
  // const [flipped, setFlipped] = useState<boolean>(false)
  const getImage = () => {

    const imageRemainder = imageNumber % 4
    
    switch(imageRemainder) {
      case 0:
        return '/images/blue-background.png'
      case 1:
        return '/images/green-background.png'
      case 2:
        return '/images/orange-background.png'
      case 3:
        return '/images/yellow-background.png'
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
              image={getImage()}
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
