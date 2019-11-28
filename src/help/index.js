import * as antd from 'antd';
const uuidv4 = require('uuid/v4');

const generateUUID = () => uuidv4()

const getJsxClass = (name) => antd[name]

const getDefaultProps = (name) => antd[name].defaultProps

const generateInitJson = (tag) => (
	{	
		id:generateUUID(),
		type:tag,
		props:{
			...getDefaultProps(tag),
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

