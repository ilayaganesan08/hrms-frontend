import { combineReducers } from 'redux';

import faqReducer from './faq';

const rootReducer = combineReducers({
    faq: faqReducer,
});

export default rootReducer;