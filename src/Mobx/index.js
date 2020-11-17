import {observable} from 'mobx';


class state {
    @observable num = 1;
}
const store = new state();
export default store