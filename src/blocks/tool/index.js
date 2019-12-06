import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import { antdImport } from '../../help/antd';
import * as antd from 'antd';

import { useDrag } from 'react-dnd'
import ItemTypes from '../../help/type'

import "./index.scss"

const { TabPane } = Tabs;

// console.log(Button.propTypes)
// console.log(Button.defaultProps)
console.log(antd.Button.defaultProps)

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
      components: antdImport()
    })
  } 

  render(){
    const { components } = this.state

    const Box = (props) => {
      const { option } = props;
      const { tag, icon, label } = option;
      const [{ isDragging }, drag] = useDrag({
        item: { name:tag, type: ItemTypes.BOX },
        end: (item, monitor) => {
          const dropResult = monitor.getDropResult()
          if (item && dropResult) {
            alert(`You dropped ${tag} into ${dropResult.name}!`)
          }
        },
        collect: monitor => ({
          isDragging: monitor.isDragging(),
        }),
      })
      const opacity = isDragging ? 0.4 : 1
      
      const style = isDragging ? {
        border: '1px dashed gray',
        backgroundColor: 'white',
        cursor: 'move'
      } : null

      return (
        <div ref={drag} style={{ ...style, opacity }} className="component" tag={tag}>
          <div className="item">
            <Icon type={icon} />
            <br />
            { label }
          </div>
        </div>
      )
    }

    return(
      <div className="tool">
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab={<Icon type="appstore" />} key="1">
            <div className="alls">

              { 
                components.map( (item, index) => (
                  <Box option={item} key={index} />
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
