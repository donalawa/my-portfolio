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


export  const getContactInfo = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.GET_CONTACT_INFO
        })
    }
}

export const setContactInfo = (info) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SET_CONTACT_INFO,
            payload: info
        })
    }
}



// ACTIVE FILE
export  const getActiveFile = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.GET_ACTIVE_FILE
        })
    }
}

export const setActiveFile = (info) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SET_ACTIVE_FILE,
            payload: info
        })
    }
}


// ABOUT INFO OR PROFESIONAL  INFO

export  const getAboutInfo = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.GET_ABOUT_INFO
        })
    }
}

export const setAboutInfo = (info) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SET_ABOUT_INFO,
            payload: info
        })
    }
}


// HOBBIES
export  const getHobbies = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.GET_HOBBIES
        })
    }
}

export const setHobbies = (info) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SET_HOBBIES,
            payload: info
        })
    }
}

