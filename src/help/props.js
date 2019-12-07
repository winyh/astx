var props = {
	AutoComplete:{
		allowClear:true,
		placeholder:"请输入",
		dataSource:["张三", "李四", "王五"]
	},
	Alert:{
		showIcon:true,
		type:"success",
		message:"这是提示信息",
	},
	Avatar:{
		icon:"user"
	},
	BackTop:{
		visibilityHeight:"100"
	},
	Badge:{
		count:99,
		title:"徽标"
	},
	Breadcrumb:{},
	Button:{
		type:"primary",
		children:["Click Me"]
	},
	Calendar:{},
	Card:{
		hoverable:true,
		loading:true,
		title:"这里是卡片标题"
	},
	Collapse:{},
	Carousel:{},
	Cascader:{
		options:[
		  {
		    value: 'zhejiang',
		    label: 'Zhejiang',
		    children: [
		      {
		        value: 'hangzhou',
		        label: 'Hangzhou',
		        children: [
		          {
		            value: 'xihu',
		            label: 'West Lake',
		          },
		        ],
		      },
		    ],
		  },
		  {
		    value: 'jiangsu',
		    label: 'Jiangsu',
		    children: [
		      {
		        value: 'nanjing',
		        label: 'Nanjing',
		        children: [
		          {
		            value: 'zhonghuamen',
		            label: 'Zhong Hua Men',
		          },
		        ],
		      },
		    ],
		  },
		]
	},
	Checkbox:{},
	Col:{
		style:{
			height:"200px"
		}
	},
	Comment:{},
	DatePicker:{},
	Descriptions:{},
	Divider:{
		dashed:true,
		style:{
			color:"red",
			background:"#000"
		},
		children:[" 分割线"]
	},
	Dropdown:{},
	Drawer:{
		title:"这是一个抽屉",
        placement:"right",
        closable:true,
        visible:true
	},
	Empty:{},
	Form:{},
	Icon:{
		type:"apple"
	},
	Input:{
		addonBefore:"user",
		placeholder:"请输入账号",
		allowClear:true
	},
	InputNumber:{
		max:10,
		min:0,
		precision:2
	},
	Layout:{},
	List:{},
	message:{},
	Menu:{},
	Mentions:{},
	Modal:{},
	Statistic:{
		title:"年收入(¥)",
		value:999888,
		precision:2
	},
	notification:{},
	PageHeader:{
		style:{
	      border: '1px solid rgb(235, 237, 240)',
	    },
	    title:"这是标题",
	    subTitle:"这是次标题"
	},
	Pagination:{
		defaultCurrent:1,
		total:50
	},
	Popconfirm:{},
	Popover:{},
	Progress:{
		type:"circle",
		percent:75,
		status:"active"
	},
	Radio:{},
	Rate:{},
	Result:{},
	Row:{
		style:{
			height:"200px",
			border: "1px dashed blue"
		}
	},
	Select:{},
	Skeleton:{
		active:true,
		avatar:true,
		title:true
	},
	Slider:{},
	Spin:{},
	Steps:{},
	Switch:{},
	Table:{
		dataSource:[
		  {
		    key: '1',
		    name: '胡彦斌',
		    age: 32,
		    address: '西湖区湖底公园1号',
		  },
		  {
		    key: '2',
		    name: '胡彦祖',
		    age: 42,
		    address: '西湖区湖底公园1号',
		  },
		],
		columns:[
		  {
		    title: '姓名',
		    dataIndex: 'name',
		    key: 'name',
		  },
		  {
		    title: '年龄',
		    dataIndex: 'age',
		    key: 'age',
		  },
		  {
		    title: '住址',
		    dataIndex: 'address',
		    key: 'address',
		  },
		],
		border:true
	},
	Transfer:{},
	Tree:{},
	TreeSelect:{},
	Tabs:{},
	Tag:{
		color:"purple",
		children:["purple"]
	},
	TimePicker:{},
	Timeline:{},
	Tooltip:{},
	Typography:{},
	Mention:{},
	Upload:{
		props:{
		  name: 'file',
		  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		  headers: {
		    authorization: 'authorization-text',
		  },
		  onChange(info) {
		    if (info.file.status !== 'uploading') {
		      console.log(info.file, info.fileList);
		    }
		    if (info.file.status === 'done') {
		      console.log(`${info.file.name} file uploaded successfully`);
		    } else if (info.file.status === 'error') {
		      console.log(`${info.file.name} file upload failed.`);
		    }
		  },
		},
		children:['点击上传']
	}
}



export {
	props
}