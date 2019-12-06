import { observable, action } from "mobx";

class ToolStore {
    @observable loading = false;
    @observable activeId = ""; 
    @observable activeTag = "";
    @observable activeProps = {
        
    }

    constructor() {
        this.name = 'winyh'
    }

    @action.bound
    setActiveTag (tag){
        this.activeTag = tag
    }
}

const tool = new ToolStore()

export default tool