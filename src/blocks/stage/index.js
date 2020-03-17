import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import { useDrop } from 'react-dnd';

import { Compile } from "../../core/compile";
import { generateInitJson, getUuid } from '../../help';
import ItemTypes from '../../help/type';

import "./index.scss"

@inject("stage", "tool")
@observer
class Stage extends Component { 
  constructor(props){
    super(props)
    this.state = {

    }
  }

  initRenderFn = () => {
    const json = JSON.parse(localStorage.getItem("tree")) || ""
    const stage = document.getElementById("stage");
    if(json){
      ReactDOM.render(Compile(json), stage);
    }
  }

  clickHandler = (e) => {
    const { tag } = e.target
    const id = getUuid(e.target)
    const { stage } = this.props
    if(id && id.indexOf("astx") !== -1){
      stage.setActiveId(id)
      stage.setActiveTag(tag)
    } else {
      console.warn("请检查当前组件是否具有id属性（属性值特征：astx+....）")
    }
  } 

  componentDidMount(){
    this.initRenderFn()
  }

  render(){

    const Dustbin = () => {
      const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: (item, monitor) => {
          console.log(item, monitor.getInitialClientOffset())
          let json = generateInitJson(item.name)
          localStorage.setItem("tree", JSON.stringify(json))
          console.log(Compile(json))
          ReactDOM.render(Compile(json), document.getElementById("stage"));
          return { name: 'Stage', id:'222wsasd' }
        },
        hover: (item, monitor) => {
          console.log(monitor.isOver())
        },
        collect: monitor => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop()
        }),
      })
      const isActive = canDrop && isOver
      let backgroundColor = '#fff'
      if (isActive) {
        backgroundColor = 'silver'
      } else if (canDrop) {
        backgroundColor = 'darkkhaki'
      }
      return (
        <div ref={drop} style={{ backgroundColor }} >
          {isActive ? 'Release to drop' : 'Drag a box here'}
          <div  id="stage" className="stage" onClick={this.clickHandler}>
            
          </div>  
        </div>
      )
    }

    return(
      <Fragment>
        <Dustbin />
      </Fragment>
    )
  }

}

export default Stage;
