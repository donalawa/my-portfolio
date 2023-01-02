import { combineReducers } from "redux";
import projectsReducer from './projectsReducer';
import contactInfoReducer from  './contactInfoReducer';

const reducers = combineReducers({
    projects: projectsReducer,
    contact: contactInfoReducer
});


export default reducers;