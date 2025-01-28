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


}


const ImportedURL = {
    API: API,
    LIVEURL: LIVEURL,
    ROOTURL: ROOTURL,
    FILEURL: FILEURL
}

export default ImportedURL;
