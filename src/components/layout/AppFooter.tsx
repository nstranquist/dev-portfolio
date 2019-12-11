import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'

interface IProps {
  footerClass: any
}

export const AppFooter: React.FC<IProps> = ({
  footerClass
}) => (
  <footer className={footerClass}>
    <Typography variant="h6" align="center" gutterBottom>
      Thanks for stopping by!
    </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      Please reach out on
      <Link href="https://github.com" target="_blank"> GitHub </Link>
      or
      <Link href="https://linkedin.com" target="_blank"> LinkedIn </Link>
      for inquiries
    </Typography>
    <Typography variant="body2" color="textSecondary" align="center">
      Nico Stranquist, 2019
    </Typography>
  </footer>
)
