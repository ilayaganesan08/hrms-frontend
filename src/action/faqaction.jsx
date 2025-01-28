const sampelist = [
    {
        "_id": "1",
        "question": "What is HRMS?",
        "answer": "HRMS stands for Human Resource Management System, which is used to manage various HR functions like employee records, payroll, recruitment, and more.",
        "isactive": true
    },
    {
        "_id": "2",
        "question": "How do I reset my password?",
        "answer": "To reset your password, go to the login page, click on 'Forgot Password?', and follow the instructions sent to your email.",
        "isactive": true
    },
    {
        "_id": "3",
        "question": "How can I update my personal information?",
        "answer": "You can update your personal information by logging into your account and going to the 'Profile' section. Make sure to save any changes.",
        "isactive": true
    },
    {
        "_id": "4",
        "question": "What is the process for applying for leave?",
        "answer": "To apply for leave, log in to your account, go to the 'Leave' section, select the type of leave, fill in the required dates, and submit for approval.",
        "isactive": false
    },
    {
        "_id": "5",
        "question": "How do I check my attendance?",
        "answer": "You can check your attendance by logging into your account and navigating to the 'Attendance' section, where you will find a calendar view of your attendance.",
        "isactive": true
    },
    {
        "_id": "6",
        "question": "How can I submit an expense report?",
        "answer": "To submit an expense report, go to the 'Expenses' section, click on 'New Report', fill in the details, attach receipts, and submit for approval.",
        "isactive": true
    },
    {
        "_id": "7",
        "question": "Is there a mobile app for HRMS?",
        "answer": "Yes, we have a mobile app available for both iOS and Android. You can download it from the respective app store to access HRMS features on the go.",
        "isactive": false
    },
    {
        "_id": "8",
        "question": "What should I do if I encounter an issue with the HRMS platform?",
        "answer": "If you encounter any issues, you can contact support via the 'Help' section within the platform or reach out to the support team at support@hrms.com.",
        "isactive": true
    }
]

export function listFaq(formData = {}) {
    return function (dispatch) {
        dispatch({ type: "LIST_FAQ", payload: sampelist, spinner: false })
    };
}

export function viewFaq(id = '') {
    return function (dispatch) {
        dispatch({ type: "VIEW_FAQ", payload: sampelist[id - 1], spinner: false })
    };
}

export function handleInptChangeFaq(name, value) {
    return function (dispatch) {
        dispatch({ type: "HANDLE_INPUT_CHANGE_FAQ", name: name, value: value })
    };
}

export function resetFaq(value = {}) {
    return function (dispatch) {
        dispatch({ type: "RESET_FAQ", payload: value })
    };
}

export function spinnerFaq() {
    return function (dispatch) {
        dispatch({ type: "SPINNER_FAQ" })
    };
}