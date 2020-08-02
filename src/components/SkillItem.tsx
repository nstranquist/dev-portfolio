import React from 'react'
import { Typography, Chip } from '@material-ui/core'
import { ISkill } from '../pages/AboutMe'


interface IProps {
  skill: ISkill
}

export const SkillItem: React.FC<IProps> = ({
  skill
}) => {
  
  
  return (
    <div className="skill-item" style={{marginBottom: "1.4rem"}}>
      <Typography variant="h5" gutterBottom>{skill.sectionTitle}</Typography>
      
      {skill.details.map((detail: string) => (
        <Chip label={detail} style={{marginRight: 4, cursor: 'pointer'}} />
      ))}
    </div>
  )
}
