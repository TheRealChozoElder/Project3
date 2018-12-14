//ToDo: Import vue and name it Vue
//ToDo: Import vuex and name it Vuex

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

import * as actions from './actions';

//ToDo Initialize Vuex using Vue.use()

export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }
});