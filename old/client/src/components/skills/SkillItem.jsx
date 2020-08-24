import React , { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';

const SkillItem = ({skill}) =>{
  return(
    <div className={`${skill.skill}-skill-holder`}>
        <div className="skill-image-holder" style={{padding:"3%"}}>
          <Avatar src={skill.img} style={{width:"15vw",height:"15vw"}}/>
        </div>
        <div className="skill-title-holder" style={{textAlign:"center"}}>
          <h3 >{skill.skill}</h3>
        </div>
    </div>
  )
};

export default SkillItem;