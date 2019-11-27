import React, { Component } from 'react';
import { Tabs, Icon, Button } from 'antd';
import { antdImport } from '../../help/antd';
import * as antd from 'antd';

import { useDrag } from 'react-dnd'
import ItemTypes from '../../help/type'

import "./index.scss"

const { TabPane } = Tabs;

// console.log(Button.propTypes)
console.log(Button.defaultProps)

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

    const Box = (props) => {
      const { item } = props;
      const { name } = item;
      const [{ isDragging }, drag] = useDrag({
        item: { name, type: ItemTypes.BOX },
        end: (item, monitor) => {
          const dropResult = monitor.getDropResult()
          if (item && dropResult) {
            alert(`You dropped ${item.name} into ${dropResult.name}!`)
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
        <div ref={drag} style={{ ...style, opacity }} className="component" tag={item.tag}>
          <div className="item">
            <Icon type={item.icon} />
            <br />
            { item.label }
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
                  <Box item={item} key={index} />
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
