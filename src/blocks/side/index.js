import React, { Component } from 'react';
import { Icon, Tooltip } from "antd"
import "./index.scss"

class Side extends Component { 
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <div className="side">

        <div className="bar">
          <ul className="wrap">
            <li>
              <Tooltip placement="right" title="新增页面">
                <Icon type="plus-circle" />
              </Tooltip>
            </li>

            <li>
              <Tooltip placement="right" title="服务器">
                <Icon type="cloud-server" />
              </Tooltip>
            </li>

            <li>
              <Tooltip placement="right" title="数据库">
                <Icon type="database" />
              </Tooltip>
            </li>

            <li>
              <Tooltip placement="right" title="节点">
                <Icon type="cluster" />
              </Tooltip>
            </li>

            <li>
              <Tooltip placement="right" title="资源">
                <Icon type="picture" />
              </Tooltip>
            </li>
          </ul>


          <ul className="wrap">
            <li>
              <Tooltip placement="right" title="移动端">
                <Icon type="mobile" />
              </Tooltip>
            </li>

            <li>
              <Tooltip placement="right" title="桌面端">
                <Icon type="desktop" />
              </Tooltip>
            </li>

            <li style={{ marginBottom:"20px" }}>
              <Tooltip placement="right" title="账户">
                <Icon type="user" />
              </Tooltip>
            </li>
          </ul>

        </div>
        


        
        
        
        
      </div>
    )
  }

}

export default Side;
