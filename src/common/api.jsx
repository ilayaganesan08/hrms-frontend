// require('dotenv').config();

const LIVE = false;
const LIVEURL = 'http://localhost:5000/';
const ROOTURL = LIVEURL + 'api/v1/';
const FILEURL = LIVEURL;

const API = {
    addtax: ROOTURL + 'taxes/addtax',
    listtax: ROOTURL + 'taxes/listtax',
    viewtax: ROOTURL + 'taxes/viewtax',
    updatetax: ROOTURL + 'taxes/updatetax',

    addemployeesalary: ROOTURL + 'employeesalary/addemployeesalary',
    listemployeesalary: ROOTURL + 'employeesalary/listemployeesalary',
    viewemployeesalary: ROOTURL + 'employeesalary/viewemployeesalary',
    updateemployeesalary: ROOTURL + 'employeesalary/updateemployeesalary',
    getPayrollItems: ROOTURL + 'payroll/items'
}

// const API_EMPSALARY = {
   

// }

const ImportedURL = {
    // API_EMPSALARY: API_EMPSALARY,
    API: API,
    LIVEURL: LIVEURL,
    ROOTURL: ROOTURL,
    FILEURL: FILEURL
}

export default ImportedURL;
