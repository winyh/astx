import { observable, action } from "mobx";

class StageStore {
	@observable name;
    @observable loading = false;
    @observable activeId = ""; 
    @observable activeTag = "";
    @observable activeProps = {
        
    }

    constructor() {
        this.name = 'winyh'
    }

    @action.bound
    setActiveId (id){
        this.activeId = id
    }

    @action.bound
    setActiveTag (tag){
        this.activeTag = tag
    }
}

const stage = new StageStore()

export default stage