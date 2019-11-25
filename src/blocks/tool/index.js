import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import "./index.scss"

const { TabPane } = Tabs;

class Tool extends Component { 
  constructor(props){
    super(props)
    this.state = {

    }
  }

  callback = (key) => {
    console.log(key)
  } 

  render(){
    return(
      <div className="tool">
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab={<Icon type="appstore" />} key="1">
            预置组件库
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
