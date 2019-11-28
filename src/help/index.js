import * as antd from 'antd';

const getDefaultProps = (name) => antd[name].defaultProps

const generateInitJson = (tag) => (
	{
		type:tag,
		props:{
			...getDefaultProps(tag)
		},
		children:[

		]
	}
)

export {
	getDefaultProps,
	generateInitJson
}

