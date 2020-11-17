import {observable,action} from 'mobx';


class state {
    @observable num = 1;
    @observable activeRoutes = [];

    @action
    changeRoutes = route =>{
        this.activeRoutes.push({...route})
    }
}
const store = new state();
export default store