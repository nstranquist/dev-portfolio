import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar as AppBarMUI } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

interface IProps {
  content: any
  iconClass: any
}

export const AppBar: React.FC<IProps> = ({
  content: {
    navTitle
  },
  iconClass
}) => {

  // TODO: add a NavList for nav options, integrate with react-router for routing

  return (
    <AppBarMUI position="relative">
      <Toolbar>
        <Link href="https://github.com/nstranquist/dev-portfolio" target="_blank" style={{color:'white'}}>
          <GitHubIcon className={iconClass} />
        </Link>
        <RouterLink to='/projects' style={{color:'white', textDecoration:'none'}}>
          <Typography variant="h6" color="inherit" noWrap>
            {navTitle}
          </Typography>
        </RouterLink>
        {/* NavList Here */}
      </Toolbar>
    </AppBarMUI>
  )
}