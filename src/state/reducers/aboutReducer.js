import actionTypes from "../action-creators/actionTypes"


let initialState = {activeFile: {},  aboutInfo: [], hobbies: []};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_ACTIVE_FILE:
            return {
                ...state
            }
        case actionTypes.SET_ACTIVE_FILE:
            return {
                ...state,
                activeFile: action.payload
            }
        case actionTypes.GET_ABOUT_INFO:
            return {
                ...state
            }
        case actionTypes.SET_ABOUT_INFO:
            return {
                ...state,
                aboutInfo: action.payload
            }
        case actionTypes.GET_HOBBIES:
            return {
                ...state
            }
        case actionTypes.SET_HOBBIES:
            return {
                ...state,
                hobbies: action.payload
            }
        default:
            return state
    }
}

export default reducer;