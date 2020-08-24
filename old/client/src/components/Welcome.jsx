import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import ReceiptIcon from '@material-ui/icons/Receipt';
import fileDownload from 'js-file-download';
import CodeIcon from '@material-ui/icons/Code';

class Welcome extends Component {
  constructor(props){
    super(props);

    this.downloadResume = this.downloadResume.bind(this);

  }

  downloadResume(){
    axios.get('/download',{responseType: 'blob'})
    .then((response)=>{
      fileDownload(response.data,'alexander-benko-resume.pdf');
    })
    .catch((err)=>console.error('Downloading Resume:',err))
  }

  render(){
    return(
      <div className="welcome-holder" style={{textAlign:"center",paddingTop:"5%"}}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <h1>Welcome To My Website!</h1>
            <iframe width="500" height="300" src="https://www.youtube.com/embed/GpeZlYaiX_A" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Grid>

          <Grid item>
            <h2>Want to see my Software Projects?</h2>
            <a style={{textDecoration:"none"}} href="https://github.com/alexbenko" target="_blank" rel="noopener noreferrer"><Button variant="contained" size="large" color="primary" startIcon={<CodeIcon />}>View Projects</Button></a>
          </Grid>

          <Grid item style={{paddingBottom:"2%"}}>
            <h2>Just want a copy of my resume? </h2>
            <Button onClick={this.downloadResume} variant="contained" size="large" color="primary" startIcon={<ReceiptIcon />}> Download My Resume</Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Welcome