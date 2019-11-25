const antdImport = (antd) => {
	let LocaleProvider, ConfigProvider, version, Mentions
	console.log(antd)
	let antds = Object.keys(antd);
	console.log(antds)
	console.log(LocaleProvider, ConfigProvider, version, Mentions)
	let components = antds.map( (item) => {
		let res = {}
		switch(item){
			case "Affix":
				res = {
					tag:item,
					label:"固钉",
					icon:"pushpin"
				}
				break;
			case "Anchor":
				res = {
					tag:item,
					label:"锚点",
					icon:"number"
				}
				break;
			case "AutoComplete":
				res = {
					tag:item,
					label:"自动完成",
					icon:"check"
				}
				break;
			case "Alert":
				res = {
					tag:"Alert",
					label:"提示",
					icon:"exclamation"
				}
				break;
			case "Avatar":
				res = {
					tag:"Avatar",
					label:"头像",
					icon:"user"
				}
				break;
			case "BackTop":
				res = {
					tag:"BackTop",
					label:"返回首页",
					icon:"to-top"
				}
				break;
			case "Badge":
				res = {
					tag:"Badge",
					label:"徽标",
					icon:"book"
				}
				break;
			case "Breadcrumb":
				res = {
					tag:"Breadcrumb",
					label:"面包屑",
					icon:"sort-ascending"
				}
				break;
			case "Button":
				res = {
					tag:"Button",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Calendar":
				res = {
					tag:"Calendar",
					label:"日历",
					icon:"calendar"
				}
				break;
			case "Card":
				res = {
					tag:"Card",
					label:"卡片",
					icon:"credit-card"
				}
				break;
			case "Collapse":
				res = {
					tag:"Collapse",
					label:"折叠面板",
					icon:"menu-unfold"
				}
				break;
			case "Carousel":
				res = {
					tag:"Carousel",
					label:"轮播图",
					icon:"swap"
				}
				break;
			case "Cascader":
				res = {
					tag:"Cascader",
					label:"级联",
					icon:"fall"
				}
				break;
			case "Checkbox":
				res = {
					tag:"Checkbox",
					label:"复选框",
					icon:"check-square"
				}
				break;
			case "Col":
				res = {
					tag:"Col",
					label:"栅格列",
					icon:"column-height"
				}
				break;
			case "ConfigProvider":
				res = {
					tag:"ConfigProvider",
					label:"全局配置",
					icon:"thunderbolt"
				}
				break;
			case "Comment":
				res = {
					tag:"Comment",
					label:"评论",
					icon:"message"
				}
				break;
			case "DatePicker":
				res = {
					tag:"DatePicker",
					label:"时间选择",
					icon:"clock-circle"
				}
				break;
			case "Descriptions":
				res = {
					tag:"Descriptions",
					label:"描述列表",
					icon:"ordered-list"
				}
				break;
			case "Divider":
				res = {
					tag:"Divider",
					label:"分割线",
					icon:"line"
				}
				break;
			case "Dropdown":
				res = {
					tag:"Dropdown",
					label:"下拉菜单",
					icon:"select"
				}
				break;
			case "Drawer":
				res = {
					tag:"Drawer",
					label:"抽屉",
					icon:"switcher"
				}
				break;
			case "Empty":
				res = {
					tag:"Empty",
					label:"空状态",
					icon:"stop"
				}
				break;
			case "Form":
				res = {
					tag:"Form",
					label:"表单",
					icon:"form"
				}
				break;
			case "Icon":
				res = {
					tag:"Icon",
					label:"图标",
					icon:"global"
				}
				break;
			case "Input":
				res = {
					tag:"Input",
					label:"输入框",
					icon:"edit"
				}
				break;
			case "InputNumber":
				res = {
					tag:"InputNumber",
					label:"数字输入",
					icon:"plus"
				}
				break;
			case "Layout":
				res = {
					tag:"Layout",
					label:"布局",
					icon:"pic-center"
				}
				break;
			case "List":
				res = {
					tag:"List",
					label:"列表",
					icon:"unordered-list"
				}
				break;
			case "message":
				res = {
					tag:"message",
					label:"全局提示",
					icon:"warning"
				}
				break;
			case "Menu":
				res = {
					tag:"Menu",
					label:"菜单导航",
					icon:"menu"
				}
				break;
			case "Mentions":
				res = {
					tag:"Mentions",
					label:"提及",
					icon:"share-alt"
				}
				break;
			case "Modal":
				res = {
					tag:"Modal",
					label:"对话框",
					icon:"block"
				}
				break;
			case "Statistic":
				res = {
					tag:"Statistic",
					label:"统计数值",
					icon:"bar-chart"
				}
				break;
			case "notification":
				res = {
					tag:"notification",
					label:"通知提醒",
					icon:"notification"
				}
				break;
			case "PageHeader":
				res = {
					tag:"PageHeader",
					label:"页头",
					icon:"profile"
				}
				break;
			case "Pagination":
				res = {
					tag:"Pagination",
					label:"分页",
					icon:"ellipsis"
				}
				break;
			case "Popconfirm":
				res = {
					tag:"Popconfirm",
					label:"确认气泡",
					icon:"heart"
				}
				break;
			case "Popover":
				res = {
					tag:"Popover",
					label:"气泡卡片",
					icon:"snippets"
				}
				break;
			case "Progress":
				res = {
					tag:"Progress",
					label:"进度条",
					icon:"percentage"
				}
				break;
			case "Radio":
				res = {
					tag:"Radio",
					label:"单选",
					icon:"instagram"
				}
				break;
			case "Rate":
				res = {
					tag:"Rate",
					label:"评分",
					icon:"star"
				}
				break;
			case "Result":
				res = {
					tag:"Result",
					label:"结果",
					icon:"check-circle"
				}
				break;
			case "Row":
				res = {
					tag:"Row",
					label:"栅格行",
					icon:"column-width"
				}
				break;
			case "Select":
				res = {
					tag:"Select",
					label:"选择器",
					icon:"more"
				}
				break;
			case "Skeleton":
				res = {
					tag:"Skeleton",
					label:"骨架屏",
					icon:"pic-left"
				}
				break;
			case "Spin":
				res = {
					tag:"Spin",
					label:"加载中",
					icon:"loading"
				}
				break;
			case "Steps":
				res = {
					tag:"Steps",
					label:"步骤条",
					icon:"fast-forward"
				}
				break;
			case "Switch":
				res = {
					tag:"Switch",
					label:"开关",
					icon:"retweet"
				}
				break;
			case "Table":
				res = {
					tag:"Table",
					label:"表格",
					icon:"table"
				}
				break;
			case "Transfer":
				res = {
					tag:"Transfer",
					label:"穿梭框",
					icon:"swap"
				}
				break;
			case "Tree":
				res = {
					tag:"Tree",
					label:"树形",
					icon:"apartment"
				}
				break;
			case "TreeSelect":
				res = {
					tag:"TreeSelect",
					label:"树选择",
					icon:"pull-request"
				}
				break;
			case "Tabs":
				res = {
					tag:"Tabs",
					label:"标签页",
					icon:"control"
				}
				break;
			case "Tag":
				res = {
					tag:"Tag",
					label:"标签",
					icon:"tags"
				}
				break;
			case "TimePicker":
				res = {
					tag:"TimePicker",
					label:"时间选择",
					icon:"clock-circle"
				}
				break;
			case "Timeline":
				res = {
					tag:"Timeline",
					label:"时间轴",
					icon:"stock"
				}
				break;
			case "Tooltip":
				res = {
					tag:"Tooltip",
					label:"文字提示",
					icon:"info-circle"
				}
				break;
			case "Typography":
				res = {
					tag:"Typography",
					label:"排版",
					icon:"italic"
				}
				break;
			case "Upload":
				res = {
					tag:"Upload",
					label:"文件上传",
					icon:"cloud-upload"
				}
				break;
			default:
				res = {
					tag:"",
					label:"空白",
					icon:"border"
				}
		}

		return res
	})

	return components
}

export {
	antdImport
}