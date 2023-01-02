import actionTypes from "./actionTypes";

export const getAllProjects = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.GET_ALL_PROJECTS,
        })
    }
}


export const setAllProjects = (projects) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SET_ALL_PROJECTS,
            payload: projects
        })
    }
}

