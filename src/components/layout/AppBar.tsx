import React from 'react'
import { AppBar as AppBarMUI } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

interface IProps {
  iconClass: any
}

export const AppBar: React.FC<IProps> = ({
  iconClass
}) => {
  return (
    <AppBarMUI position="relative">
      <Toolbar>
        <CameraIcon className={iconClass} />
        <Typography variant="h6" color="inherit" noWrap>
          Nico's Portfolio
        </Typography>
      </Toolbar>
    </AppBarMUI>
  )
}