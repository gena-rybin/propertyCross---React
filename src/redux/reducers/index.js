import { combineReducers } from 'redux';
import {
    searchReducer,
    responseReducer,
    addToSearchesReducer, redirectToResultsPageReducer,
} from "./search-page-reducers";
import {addToFavouritesReducer} from "./favs-page-reducers";

const rootReducer = combineReducers({
    response: responseReducer,
    search: searchReducer,
    searches: addToSearchesReducer,
    redirectToResultsPage: redirectToResultsPageReducer,
    addToFavouritesReducer,
});

export default rootReducer
