import {combineReducers} from 'redux';

/** Add Reducers here **/
import {reducers as home} from '../screens/home/reducers';

const rootReducer = combineReducers({home});

export default rootReducer;
