const clearForm = (state, action) => {
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
}

export const Form = {
    companyForm: clearForm,
    userForm: clearForm,
    jobSourceForm: clearForm,
}
