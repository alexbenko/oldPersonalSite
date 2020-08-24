import React , { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';

class AdventureItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="adventure-item">
        <div className="adventure-image-holder" style={{padding:"3%"}}>

          <a href={this.props.data.img} target="_blank" rel="noopener noreferrer"><Avatar src={this.props.data.img} style={{width:"23vw",height:"23vw",cursor:"pointer"}}/></a>

        </div>
      </div>

    );
  }
}


export default AdventureItem;