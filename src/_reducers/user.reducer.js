import { userConstants } from '../_constants';

const initialState = {
    list: {
        loading: false,
        error: null,
        data: []
    },    
    view: {
        loading: false,
        error: null,
        data: { 
            status: 1,
            search: ''
        }
    }
}

export const user = (state = initialState, action) => {
    switch(action.type){
        // List User
        case userConstants.LIST_REQUEST:
            return {
                ...state,
                list: {
                    loading: true,
                    data: []
                }
            }
        case userConstants.LIST_SUCCESS: 
            return {
                ...state,
                list: {
                    loading: false,
                    data: action.data
                }
            }
        case userConstants.LIST_FAILURE:
            return {
                ...state,
                list: {
                    data: [],
                    loading: false,
                    error: action.error
                }
            }
        
        // View user
        case userConstants.VIEW_REQUEST:
            return {
                ...state,
                view: {
                    loading: true
                }
            }
        case userConstants.VIEW_SUCCESS: 
            return {
                ...state,
                view: {
                    loading: false,
                    data: action.data
                }
            }
        case userConstants.VIEW_FAILURE:
            return {
                ...state,
                view: {
                    loading: false,
                    error: action.error
                }
            }
        
        // Add User
        case userConstants.ADD_REQUEST:
            return {
                ...state
            }
        case userConstants.ADD_SUCCESS: 
            return {
                ...state
            }
        case userConstants.ADD_FAILURE:
            return {
                ...state
            }

        // Update User
        case userConstants.UPDATE_REQUEST:
            return {
                ...state
            }
        case userConstants.UPDATE_SUCCESS: 
            return {
                ...state
            }
        case userConstants.UPDATE_FAILURE:
            return {
                ...state
            }

        // Search user
        case userConstants.SEARCH_REQUEST:
            return {
                ...state,
                list: {
                    loading: true,
                    data: []
                }
            }
        case userConstants.SEARCH_SUCCESS: 
            return {
                ...state,
                list: {
                    loading: false,
                    data: action.data
                }
            }
        case userConstants.SEARCH_FAILURE:
            return {
                ...state,
                list: {
                    data: [],
                    loading: false,
                    error: action.error
                }
            }
        default:
            return state;
    }
}