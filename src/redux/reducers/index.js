import { combineReducers } from 'redux';
import {
    searchReducer,
    responseReducer,
    addToSearchesReducer, redirectToResultsPageReducer,
} from "./search-page-reducers";
import {favouritesReducer} from "./favs-page-reducers";

const rootReducer = combineReducers({
    response: responseReducer,
    search: searchReducer,
    searches: addToSearchesReducer,
    redirectToResultsPage: redirectToResultsPageReducer,
    favouritesReducer,
});

export default rootReducer
