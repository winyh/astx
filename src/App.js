import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Head from "./blocks/head";
import Stage from "./blocks/stage";
import Tool from "./blocks/tool";
import './App.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Head />
        
        <div className="main">
          <div className="canvas">
            <Stage />
          </div>  
          <Tool />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
