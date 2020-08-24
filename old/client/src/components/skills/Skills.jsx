import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import SkillItem from './SkillItem';
import Grid from '@material-ui/core/Grid';

class Skills extends Component{
  constructor(props){
    super(props);

    this.state = {
      skills: false,
      sorted:{}
    }

    this.getSkills = this.getSkills.bind(this);
  }

  getSkills(){
    console.log('Getting Skills...')
    axios.get('/skills')
    .then((result)=>{
      this.setState({
        skills:result.data
      })
    })
    .catch((err)=>console.error(err))

  }

  componentDidMount(){
    this.getSkills();
  }


  render(){
    if(!this.state.skills){
      return(
        <div className="skills-loading-holder">
          <div style={{textAlign:"center",paddingTop:"15%"}}>
            <CircularProgress style={{width:"15vw",height:"15vw"}}/> Fetching My Skills from the mongoDB databse. This should not take more than a couple seconds...
          </div>
        </div>
      )
    } else {
      return(
        <div className="skills-holder">
            <div className="skills-text" style={{textAlign:"center"}}>
              <h2>A list of all software skills that I am proficient in.</h2>
              <p>Fun Fact: This website uses mongoDB to store the data for my skills and adventures.</p>
            </div>

            <Grid container spacing={2} direction="row">
              {this.state.skills.map((skill,i)=>{
              return(
                <Grid item key={i}>
                  <SkillItem skill={skill} key={i}/>
                </Grid>
              )
            })}
            </Grid>
        </div>
      )

    }

  }
}

export default Skills;