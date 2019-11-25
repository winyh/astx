import React, { Component } from 'react';
import { Icon } from "antd"
import "./index.scss"

class Head extends Component { 
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className="head">
        <div className="logo">
          ASTX
        </div>

        <div className="action">
          <div className="item">
            <Icon type="arrow-left" />
          </div>

          <div className="item">
            <Icon type="arrow-right" />
          </div>

          <div className="item">
            <Icon type="eye" />
          </div>
          
          <div className="item">
            <Icon type="cloud-download" />
          </div>

          <div className="item">
            <Icon type="delete" />
          </div>

          <div className="item">
            <a  href="https://github.com/winyh/astx" target="_blank" rel="noopener noreferrer"><Icon type="github" /></a>
          </div>
        </div>

      </div>
    )
  }

}

export default Head;
