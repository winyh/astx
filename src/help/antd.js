const antdImport = (antd) => {
	console.log(antd)
	let antds = Object.keys(antd);
	console.log(antds)
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
					tag:"Button",
					label:"日历",
					icon:"border"
				}
				break;
			case "Card":
				res = {
					tag:"Card",
					label:"卡片",
					icon:"border"
				}
				break;
			case "Collapse":
				res = {
					tag:"Collapse",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Carousel":
				res = {
					tag:"Carousel",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Cascader":
				res = {
					tag:"Cascader",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Checkbox":
				res = {
					tag:"Checkbox",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Col":
				res = {
					tag:"Col",
					label:"按钮",
					icon:"border"
				}
				break;
			case "ConfigProvider":
				res = {
					tag:"ConfigProvider",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Comment":
				res = {
					tag:"Comment",
					label:"按钮",
					icon:"border"
				}
				break;
			case "DatePicker":
				res = {
					tag:"DatePicker",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Descriptions":
				res = {
					tag:"Descriptions",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Divider":
				res = {
					tag:"Divider",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Dropdown":
				res = {
					tag:"Dropdown",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Drawer":
				res = {
					tag:"Drawer",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Empty":
				res = {
					tag:"Empty",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Form":
				res = {
					tag:"Form",
					label:"表单",
					icon:"border"
				}
				break;
			case "Icon":
				res = {
					tag:"Icon",
					label:"图标",
					icon:"border"
				}
				break;
			case "Input":
				res = {
					tag:"Input",
					label:"按钮",
					icon:"border"
				}
				break;
			case "InputNumber":
				res = {
					tag:"InputNumber",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Layout":
				res = {
					tag:"Layout",
					label:"按钮",
					icon:"border"
				}
				break;
			case "List":
				res = {
					tag:"List",
					label:"按钮",
					icon:"border"
				}
				break;
			case "LocaleProvider":
				res = {
					tag:"LocaleProvider",
					label:"按钮",
					icon:"border"
				}
				break;
			case "message":
				res = {
					tag:"message",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Menu":
				res = {
					tag:"Menu",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Mentions":
				res = {
					tag:"Mentions",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Modal":
				res = {
					tag:"Modal",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Statistic":
				res = {
					tag:"Statistic",
					label:"按钮",
					icon:"border"
				}
				break;
			case "notification":
				res = {
					tag:"notification",
					label:"按钮",
					icon:"border"
				}
				break;
			case "PageHeader":
				res = {
					tag:"PageHeader",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Pagination":
				res = {
					tag:"Pagination",
					label:"分页",
					icon:"border"
				}
				break;
			case "Popconfirm":
				res = {
					tag:"Popconfirm",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Popover":
				res = {
					tag:"Popover",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Progress":
				res = {
					tag:"Progress",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Radio":
				res = {
					tag:"Radio",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Rate":
				res = {
					tag:"Rate",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Result":
				res = {
					tag:"Result",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Row":
				res = {
					tag:"Row",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Select":
				res = {
					tag:"Select",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Skeleton":
				res = {
					tag:"Skeleton",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Spin":
				res = {
					tag:"Spin",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Steps":
				res = {
					tag:"Steps",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Switch":
				res = {
					tag:"Switch",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Table":
				res = {
					tag:"Table",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Transfer":
				res = {
					tag:"Transfer",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Tree":
				res = {
					tag:"Tree",
					label:"按钮",
					icon:"border"
				}
				break;
			case "TreeSelect":
				res = {
					tag:"TreeSelect",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Tabs":
				res = {
					tag:"Tabs",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Tag":
				res = {
					tag:"Tag",
					label:"按钮",
					icon:"border"
				}
				break;
			case "TimePicker":
				res = {
					tag:"TimePicker",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Timeline":
				res = {
					tag:"Timeline",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Tooltip":
				res = {
					tag:"Tooltip",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Typography":
				res = {
					tag:"Typography",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Mention":
				res = {
					tag:"Mention",
					label:"按钮",
					icon:"border"
				}
				break;
			case "Upload":
				res = {
					tag:"Upload",
					label:"按钮",
					icon:"border"
				}
				break;
			default:
				res = {
					tag:"Affix",
					label:"固钉",
					icon:"table"
				}
		}

		return res
	})

	return components
}

export {
	antdImport
}