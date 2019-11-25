import React from 'react';
import Head from "./blocks/head";
import Stage from "./blocks/stage";
import Tool from "./blocks/tool";
import './App.css';

function App() {
  return (
    <div className="App">
      <Head />
      
      <div className="main">
      	<div className="canvas">
      		<Stage />
      	</div>	
      	<Tool />
      </div>
    </div>
  );
}

export default App;
