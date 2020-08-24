import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import AdventureItem from './AdventureItem';

class Adventures extends Component{
  constructor(props){
    super(props);

    this.state = {
      adventures: false
    }
    this.getData = this.getData.bind(this);
  }

  getData(){
    axios.get('/adv')
    .then((result)=>{
      this.setState({
        adventures: result.data
      },()=>console.log(this.state))
    })
    .catch((err)=>console.error(`Getting Adventure Data: ${err}`))
  }


  componentDidMount(){
    this.getData()
  }


  render(){
    if(!this.state.adventures){
      return (
        <div className="adventures-loading-holder">
          <div style={{textAlign:"center",paddingTop:"15%"}}>
            <CircularProgress style={{width:"15vw",height:"15vw"}}/> Fetching Data from my mongoDB databse. This should not take more than a couple seconds...
          </div>
        </div>
      )
    } else {
      return(
        <div className="adventures-holder" >
          <div className="adventures-text" style={{textAlign:"center"}}>

              <h1 >My Adventures</h1>
              <p>When I am not developing software I am going to a lot of cool places with my girlfriend and dog.</p>
              <p>Click on a bubble to open the image in a new tab</p>
              <p>If the bubbles are taking a long time to load, hit refresh!</p>

          </div>
          <Grid container direction="row" spacing={2}>
          {this.state.adventures.map((data,i)=>{
            return(
              <Grid item key={i} xs={3}>
                <AdventureItem data={data} />
              </Grid>
            )
          })}
          </Grid>

        </div>
      )
    }
  }
}

export default Adventures;