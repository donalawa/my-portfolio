import actionTypes from "../action-creators/actionTypes"


let initialState = {allProjects: []};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_ALL_PROJECTS:
            return {
                ...state
            }
        case actionTypes.SET_ALL_PROJECTS:
            return {
                ...state,
                allProjects: action.payload
            }
        default:
            return state
    }
}

export default reducer;