import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'

interface IProps {
  content: any
  footerClass: any
}

export const AppFooter: React.FC<IProps> = ({
  content: {
    heading,
    smallText,
  },
  footerClass
}) => (
  <footer className={footerClass}>
    <Typography variant="h6" align="center" gutterBottom>
      {heading}
    </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      Please reach out on
      <Link href="https://github.com/nstranquist" target="_blank"> GitHub </Link>
      or
      <Link href="https://www.linkedin.com/in/nicholas-stranquist/" target="_blank"> LinkedIn </Link>
      for inquiries
    </Typography>
    <Typography variant="body2" color="textSecondary" align="center">
      {smallText}
    </Typography>
  </footer>
)
