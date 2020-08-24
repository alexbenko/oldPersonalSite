import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import ReceiptIcon from '@material-ui/icons/Receipt';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CodeIcon from '@material-ui/icons/Code';
import axios from 'axios';
import fileDownload from 'js-file-download';

class Contact extends Component{
  constructor(props){
    super(props);

    this.downloadResume = this.downloadResume.bind(this);
  }


  downloadResume(){
    axios.get('/download',{responseType: 'blob'})
    .then((response)=>{
      fileDownload(response.data,'alexander-benko-resume.pdf')
    })
    .catch((err)=>console.error('Downloading Resume:',err))
  }


  render(){
    return(
      <div className="contact-info-holder" style={{textAlign:"center",textDecoration:"none"}}>
        <Grid container direction="column">
          <Grid item>
            <h2> Like what you see? Feel Free To Contact Me </h2>
          </Grid>

          <Grid item style={{paddingBottom:"2%"}}>
            <Button onClick={this.downloadResume} variant="contained" size="large" color="primary" startIcon={<ReceiptIcon />}> Download My Resume</Button>
          </Grid>

          <Grid item style={{paddingBottom:"2%"}}>
            <a href="mailto:benkoalex521@gmail.com"><Button variant="contained" color="primary" size="large" startIcon={<MailIcon />}>Email Me</Button></a>
          </Grid>

          <Grid item style={{paddingBottom:"2%"}}>
            <a href="https://www.linkedin.com/in/alexander-benko-06b99a1a4/" target="_blank" rel="noopener noreferrer"><Button variant="contained" color="primary" size="large" startIcon={<BusinessCenterIcon />}>My Linkedin Profile</Button></a>
          </Grid>

          <Grid item style={{paddingBottom:"2%"}}>
            <a href="https://github.com/alexbenko" target="_blank" rel="noopener noreferrer"><Button variant="contained" color="primary" size="large" startIcon={<CodeIcon />}>My Github</Button></a>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Contact;