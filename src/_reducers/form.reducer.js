export const Form = {
    companyForm: (state, action) => {
        switch (action.type) {
            case 'FORM_SAVE_SUCCESS':
                return {
                    ...state,
                    values: {},
                    anyTouched: false,
                    fields: {},
                }
            default:
                return state
        }
    },
    // userForm: (state, action) => {
    //     switch (action.type) {
    //         case 'FORM_SAVE_SUCCESS':
    //             return {
    //                 ...state,
    //                 values: {},
    //                 anyTouched: false,
    //                 fields: {},
    //             }
    //         default:
    //             return state
    //     }
    // }
}
