import * as antd from 'antd';

import { props as propsTree } from "./props"

const uuidv4 = require('uuid/v4');

const generateUUID = () => `astx${uuidv4()}`

const getJsxClass = (name) => antd[name]

const getDefaultProps = (name) => antd[name].defaultProps

const setInitProps = (name) => propsTree[name]

const generateInitJson = (tag) => (
	{	
		tag,
		id:generateUUID(),
		props:{
			...getDefaultProps(tag),
			...setInitProps(tag)
		},
		children:[
		
		]
	}
)

const getUuid = (ele) => {
	while(!ele.id){
		ele = ele.parentNode
	}

	if(ele.id.indexOf("astx") !== -1){
		return ele.id
	} else {
		return false
	}
}

export {
	generateUUID,
	getJsxClass,
	getDefaultProps,
	generateInitJson,
	getUuid
}

