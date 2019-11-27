import React, { Component, Fragment } from 'react';
import { useDrop } from 'react-dnd';
import "./index.scss"

import ItemTypes from '../../help/type';

class Stage extends Component { 
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){

    const Stage = () => {
      const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: () => ({ name: 'Stage' }),
        collect: monitor => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      })
      const isActive = canDrop && isOver
      let backgroundColor = '#eee'
      if (isActive) {
        backgroundColor = 'silver'
      } else if (canDrop) {
        backgroundColor = 'darkkhaki'
      }
      return (
        <div ref={drop} style={{ backgroundColor }} className="stage">
          {isActive ? 'Release to drop' : 'Drag a box here'}
        </div>
      )
    }

    return(
      <Fragment>
        <Stage />
      </Fragment>
    )
  }

}

export default Stage;
