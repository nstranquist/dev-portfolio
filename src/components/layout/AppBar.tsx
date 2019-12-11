import React from 'react'
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
  return (
    <AppBarMUI position="relative">
      <Toolbar>
        <Link href="https://github.com" target="_blank" style={{color:'white'}}>
          <GitHubIcon className={iconClass} />
        </Link>
        <Typography variant="h6" color="inherit" noWrap>
          {navTitle}
        </Typography>
      </Toolbar>
    </AppBarMUI>
  )
}