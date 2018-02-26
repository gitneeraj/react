import { companyConstants } from '../_constants';

const initialState = {
    loading: false,
    error: null,
    data: null
}

export const company = (state = initialState, action) => {
    switch(action.type){
        case companyConstants.LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case companyConstants.LIST_SUCCESS: 
            return {
                ...initialState,
                loading: false,
                data: action.data,
            }
        case companyConstants.LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}