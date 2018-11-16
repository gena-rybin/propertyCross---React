import { combineReducers } from 'redux';
import {
    searchReducer,
    responseReducer,
    addToSearchesReducer, redirectToResultsPageReducer,
} from "./main-page-reducers";

const rootReducer = combineReducers({
    response: responseReducer,
    search: searchReducer,
    searches: addToSearchesReducer,
    redirectToResultsPage: redirectToResultsPageReducer,
});

export default rootReducer
