import React from 'react';
import './New.css'

class New extends React.Component{
    render(){
      return(
        <div className="tt" >
          <img src={this.props.src}></img>
          <h2>{this.props.name}</h2>
          <h5>{this.props.dt}</h5>
        </div>
      );
    }
  }
export default New;