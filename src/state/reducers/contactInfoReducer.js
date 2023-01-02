import actionTypes from "../action-creators/actionTypes"


let initialState = {contactInfo: {}};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_CONTACT_INFO:
            return {
                ...state
            }
        case actionTypes.SET_CONTACT_INFO:
            return {
                ...state,
                contactInfo: action.payload
            }
        default:
            return state
    }
}

export default reducer;