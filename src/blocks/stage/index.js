import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useDrop } from 'react-dnd';

import { Compile } from "../../core/compile";
import { generateInitJson } from '../../help';
import ItemTypes from '../../help/type';

import "./index.scss"

class Stage extends Component { 
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
    const json = JSON.parse(localStorage.getItem("tree")) || ""
    const stage = document.getElementById("stage");
    console.log(json)
    if(json){
      ReactDOM.render(Compile(json), stage);
    }
  }

  render(){

    const Dustbin = () => {
      const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: (item, monitor) => {
          let json = generateInitJson(item.name)
          console.log(json)
          localStorage.setItem("tree", JSON.stringify(json))
          ReactDOM.render(Compile(json), document.getElementById("stage"));
          return { name: 'Stage' }
        },
        collect: monitor => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
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
          <div  id="stage" className="stage">
            
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
