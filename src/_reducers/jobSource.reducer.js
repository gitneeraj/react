import { jobSourceConstants } from '../_constants';
import * as moment from 'moment';

const initialState = {
    default: {
        status: 1,
        filters: {
            startDate: null,
            endDate: null,
            search: '',
            company: 0,
            daterange: moment().subtract(30, 'days').format('DD-MM-YYYY') + ' to ' + moment().format('DD-MM-YYYY')
        },
        
    },
    list: {
        loading: false,
        error: null,
        data: []
    },    
    view: {
        loading: false,
        error: null,
        data: {}
    }
}

export const jobSource = (state = initialState, action) => {
    switch(action.type){
        // List jobSource
        case jobSourceConstants.LIST_REQUEST:
            return {
                ...state,
                list: {
                    loading: true,
                    data: []
                }
            }
        case jobSourceConstants.LIST_SUCCESS: 
            return {
                ...state,
                list: {
                    loading: false,
                    data: action.data
                }
            }
        case jobSourceConstants.LIST_FAILURE:
            return {
                ...state,
                list: {
                    data: [],
                    loading: false,
                    error: action.error
                }
            }
        
        // View jobSource
        case jobSourceConstants.VIEW_REQUEST:
            return {
                ...state,
                default: {
                    loading: true
                }
            }
        case jobSourceConstants.VIEW_SUCCESS: 
            return {
                ...state,
                default: {
                    ...action.data,
                    loading: false
                }
            }
        case jobSourceConstants.VIEW_FAILURE:
            return {
                ...state,
                default: {
                    loading: false,
                    error: action.error
                }
            }
        
        // Add jobSource
        case jobSourceConstants.ADD_REQUEST:
            return {
                ...state
            }
        case jobSourceConstants.ADD_SUCCESS: 
            return {
                ...state
            }
        case jobSourceConstants.ADD_FAILURE:
            return {
                ...state
            }

        // Update jobSource
        case jobSourceConstants.UPDATE_REQUEST:
            return {
                ...state
            }
        case jobSourceConstants.UPDATE_SUCCESS: 
            return {
                ...state
            }
        case jobSourceConstants.UPDATE_FAILURE:
            return {
                ...state
            }

        // Search jobSource
        case jobSourceConstants.SEARCH_REQUEST:
            return {
                ...state,
                list: {
                    loading: true,
                    data: []
                }
            }
        case jobSourceConstants.SEARCH_SUCCESS: 
            return {
                ...state,
                list: {
                    loading: false,
                    data: action.data
                }
            }
        case jobSourceConstants.SEARCH_FAILURE:
            return {
                ...state,
                list: {
                    loading: false,
                    error: action.error
                }
            }
        default:
            return state;
    }
}