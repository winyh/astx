import React, { Component } from 'react';
import { useDrop } from 'react-dnd';
import "./index.scss"

import ItemTypes from '../../help/type';

const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}

class Stage extends Component { 
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){

    const Dustbin = () => {
      const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: () => ({ name: 'Dustbin' }),
        collect: monitor => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      })
      const isActive = canDrop && isOver
      let backgroundColor = '#222'
      if (isActive) {
        backgroundColor = 'darkgreen'
      } else if (canDrop) {
        backgroundColor = 'darkkhaki'
      }
      return (
        <div ref={drop} style={{ ...style, backgroundColor }}>
          {isActive ? 'Release to drop' : 'Drag a box here'}
        </div>
      )
    }

    return(
      <div className="stage">
        <Dustbin />
      </div>
    )
  }

}

export default Stage;
