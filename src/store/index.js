import { configure } from "mobx";
import stage from './stage'
import tool from './tool'

configure({ enforceActions: 'always' })
 
const store = {
    stage,
    tool
}

export default store