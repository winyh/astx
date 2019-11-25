import React, { Component } from 'react';
import { Tabs, Icon, Button } from 'antd';
import { antdImport } from '../../help/antd';
import * as antd from 'antd';

import "./index.scss"

const { TabPane } = Tabs;

console.log(Button.propTypes)

class Tool extends Component { 
  constructor(props){
    super(props)
    this.state = {
      components: []
    }
  }

  callback = (key) => {
    console.log(key)
  }

  componentDidMount(){
    this.setState({
      components: antdImport(antd)
    })
  } 

  render(){
    const { components } = this.state
    return(
      <div className="tool">
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab={<Icon type="appstore" />} key="1">
            <div className="alls">

              { 
                components.map( (item, index) => (
                  <div className="component" key={index} tag={item.tag} draggable="true">
                    <div className="item">
                      <Icon type={item.icon} />
                      <br />
                      { item.label }
                    </div>
                  </div>
                )) 
              }
              
            </div>  
          </TabPane>
          <TabPane tab={<Icon type="form" />} key="2">
            当前组件编辑
          </TabPane>
          <TabPane tab={<Icon type="setting" />} key="3">
            页面配置
          </TabPane>
        </Tabs>
      </div>
    )
  }

}

export default Tool;
