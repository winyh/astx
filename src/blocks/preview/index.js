import React, { Component, Fragment } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import { Icon } from "antd";
import { Compile } from "../../core/compile";
import "./index.scss";

class Preview extends Component {

	constructor(props){
		super(props)
	    this.state = {
	      viewport: "desktop"
	    }
	}

	componentDidMount(){
		const view = document.getElementById('preview')
		const json = JSON.parse(localStorage.getItem("tree")) || ""
		if (json) {
			ReactDOM.render(Compile(json), view)
		}
	}

	switchViewPort = (viewport) => {
		console.log(viewport)
		this.setState({
			viewport
		})
	}

	render(){
		const { viewport } = this.state
		return(
			<Fragment>
				<div id="preview" className={ viewport === "desktop" ? "":"mobile"}></div>
				<div className="view-btns">
					<div className="btn" onClick={() => this.switchViewPort("desktop")}><Icon type="desktop" /></div>
					<div className="btn" onClick={() => this.switchViewPort("mobile")}><Icon type="mobile" /></div>
					<div className="btn"><Link to="/"><Icon type="logout" /></Link></div>
				</div>
			</Fragment>
		)
	}
}

export default Preview