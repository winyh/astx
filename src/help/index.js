import * as antd from 'antd';

import { props as propsTree } from "./props"

const uuidv4 = require('uuid/v4');

const generateUUID = () => `winyh${uuidv4()}`

const getJsxClass = (name) => antd[name]

const getDefaultProps = (name) => antd[name].defaultProps

const setInitProps = (name) => propsTree[name]

const generateInitJson = (tag) => (
	{	
		id:generateUUID(),
		type:tag,
		props:{
			...getDefaultProps(tag),
			...setInitProps(tag)
		},
		children:[
		
		]
	}
)

export {
	generateUUID,
	getJsxClass,
	getDefaultProps,
	generateInitJson
}

