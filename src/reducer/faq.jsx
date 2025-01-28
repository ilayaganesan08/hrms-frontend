const initialState = {
    spinner: false,
    listfaq: [],
    faq: {},
    total: 0,
};

const faqReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIST_FAQ":
            return {
                ...state,
                spinner: action.spinner,
                total: action.total,
                listfaq: action.payload
            };
        case "VIEW_FAQ":
            return {
                ...state,
                spinner: action.spinner,
                faq: action.payload
            };
        case "SPINNER_FAQ":
            return {
                ...state,
                spinner: true
            };
        case "RESET_FAQ":
            return {
                ...state,
                faq: action.payload
            };
        case "HANDLE_INPUT_CHANGE_FAQ":
            return {
                ...state,
                faq: {
                    ...state.faq,
                    [action.name]: action.value
                }
            };

        default:
            return state;
    }
};

export default faqReducer;
