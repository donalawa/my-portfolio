import { combineReducers } from "redux";
import projectsReducer from './projectsReducer';
import contactInfoReducer from  './contactInfoReducer';
import aboutReducer from './aboutReducer';

const reducers = combineReducers({
    projects: projectsReducer,
    contact: contactInfoReducer,
    about: aboutReducer
});


export default reducers;