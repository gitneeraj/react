export const urlConstants = {
    getBaseurl: () => {
        if (window.location.hostname === "localhost") {
            return 'http://192.168.9.217/screenscrapmanwebapp/production/ssmapi/public/';
        }else{
            return 'http://192.168.9.217/screenscrapmanwebapp/production/ssmapi/public/';
        }
    },
    // Login URL
    LOGIN_URL: 'users/login',
    // Change Password URL
    CHANGE_PASSWORD_URL: 'users/setpassword',
    // Company URLs
    COMPANIES_LIST_URL: 'companies/index',
    ADD_COMPANY_URL: 'companies/add',
    GET_COMPANY_URL: 'companies/view/',
    UPDATE_COMPANY_URL: 'companies/edit/',
    // Job Details URLs
    JOB_SOURCE_LIST_URL: 'sources/index',
    ADD_JOB_SOURCE_URL: 'sources/add',
    GET_JOB_SOURCE_URL: 'sources/view/',
    UPDATE_JOB_SOURCE_URL: 'sources/edit/',
    // Schedule Urls
    JOB_SCHEDULE_DETAILS_LIST_URL: 'job_schedules/index/',
    ADD_SCHEDULE_DETAILS_URL: 'job_schedules/add',
    GET_SCHEDULE_DETAILS_URL: 'job_schedules/view/',
    UPDATE_SCHEDULE_DETAILS_URL: 'job_schedules/edit/',
    // Company Users URLs
    COMPANIES_USERS_LIST_URL: 'users/index/',
    ADD_COMPANY_USERS_URL: 'users/add',
    GET_COMPANY_USERS_URL: 'users/view/',
    UPDATE_COMPANY_USERS_URL: 'users/edit/',
    // Jobs URLs
    JOBS_LIST_URL: 'running_jobs/index/'
};