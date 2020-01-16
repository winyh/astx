import React, { Component } from 'react';
import * as monaco from 'monaco-editor';
import MonacoEditor from 'react-monaco-editor';

import "./index.scss"

class Code extends Component { 
  constructor(props){
    super(props)
    this.state = {
      code: '// type your code...',
    }
  }

  editorDidMount = (editor, monaco) => {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange = (newValue, e) => {
    console.log('onChange', newValue, e);
  }

  render(){
  	const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };

    return(
      <div className="code">
        <MonacoEditor
	        width="100%"
	        height="400"
	        language="javascript"
	        theme="vs-dark"
	        value={code}
	        options={options}
	        onChange={this.onChange}
	        editorDidMount={this.editorDidMount}
	    />
      </div>
    )
  }

}

export default Code;
