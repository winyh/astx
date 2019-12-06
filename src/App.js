import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { observer, inject } from 'mobx-react';

import Head from "./blocks/head";
import Side from "./blocks/side";
import Stage from "./blocks/stage";
import Tool from "./blocks/tool";

import './App.css';

@inject("stage", "tool")
@observer
class App extends Component{

  render(){
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <Head />
          
          <div className="main">
            <Side />
            <div className="canvas">
              <Stage />
            </div>  
            <Tool />
          </div>
        </div>
      </DndProvider>
    );
  }
}

export default App;
