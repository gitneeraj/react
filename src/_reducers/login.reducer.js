import { userConstants } from '../constants';

const initialState = {
    loading: false,
    error: null,
    data: null
}

export const login = (state = initialState, action) => {
    switch(action.type){
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userConstants.LOGIN_SUCCESS: 
            return {
                ...initialState,
                loading: false,
                data: action.data,
            }
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}