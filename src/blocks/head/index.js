import React, { Component } from 'react';
import { Icon, Tooltip } from "antd"
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
            <Tooltip title="撤销">
              <Icon type="arrow-left" />
            </Tooltip>
          </div>

          <div className="item">
            <Tooltip  title="恢复">
              <Icon type="arrow-right" />
            </Tooltip>
          </div>

          <div className="item">
            <Tooltip  title="源码">
              <Icon type="codepen" />
            </Tooltip>
          </div>

          <div className="item">
            <Tooltip  title="预览">
              <Icon type="eye" />
            </Tooltip>
          </div>
          
          <div className="item">
            <Tooltip  title="下载">
              <Icon type="cloud-download" />
            </Tooltip>
          </div>

          <div className="item">
            <Tooltip  title="清空">
              <Icon type="delete" />
            </Tooltip>
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
