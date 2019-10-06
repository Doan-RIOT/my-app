import React from 'react';
import './Content.css';


class Content extends React.Component{
    render(){
      return(
        <div id="content">
          <img src={this.props.src}></img>
          <h1>{this.props.name}</h1>
          <h5>{this.props.dt}</h5>
          <p>{this.props.text}</p>
          <a>READ MORE</a>
        </div>
      );
    }
}

export default Content;