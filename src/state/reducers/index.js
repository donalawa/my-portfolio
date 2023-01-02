import { combineReducers } from "redux";
import projectsReducer from './projectsReducer';

const reducers = combineReducers({
    projects: projectsReducer
});


export default reducers;