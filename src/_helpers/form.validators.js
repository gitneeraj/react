export const validateUserForm = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.phone) {
        errors.phone = 'Required'
    }

    if (!values.role) {
        errors.role = 'Required'
    }

    return errors
}

export const validateCompanyForm = values => {
    const errors = {}
    if (!values.company_name) {
        errors.company_name = 'Required'
    }

    if (!values.company_code) {
        errors.company_code = 'Required'
    }

    if (!values.website) {
        errors.website = 'Required'
    }

    return errors
}

export const validateJobSourceForm = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    }

    if (!values.weburl) {
        errors.weburl = 'Required'
    }

    if (!values.website) {
        errors.website = 'Required'
    }

    return errors
}