import {
    RESPONSE,
    SEARCH,
    ADD_TO_SEARCHES,
    DELETE_SEARCH_FROM_HISTORY,
    REDIRECT_TO_RESULTS_PAGE,
    CLEAR_RESPONSE
} from '../constants';
import { HttpFetch } from "../../services/http";
import { apiEndpoints } from "../../services/api-endpoints";
import { store } from "../../redux/store";

export function searchResponseAction(searchResults) {
    return {
        type: RESPONSE,
        payload: searchResults
    };
}

export function clearSearchResponseAction() {
    return {
        type: CLEAR_RESPONSE
    };
}

export function fetchSearchByPlaceNameAction(_page) {
    return dispatch => {
        const placeName = store.getState().search;
        const page = _page ? _page : '1';
        const url = `${apiEndpoints.buy}&page=${page}&place_name=${placeName}`;
        // console.log('url',url);
        HttpFetch.get(url)
            .then(res => {
                console.log('fetchSearchByPlaceNameAction', res);
                dispatch(searchResponseAction(res.response));

                dispatch(addToSearchesAction({
                    'search': placeName,
                    'results': (res.response && res.response.total_results) ? res.response.total_results : 0
                }));
                const isReadyForRedirect = !!(res.response && res.response.listings && res.response.listings.length);
                console.log('isReadyForRedirect',isReadyForRedirect);
                dispatch(redirectToResultsPageAction(isReadyForRedirect));
            });
    };
}

export function redirectToResultsPageAction(payload) {
    console.log(payload);
    return {
        type: REDIRECT_TO_RESULTS_PAGE,
        payload: payload
    };
}

export function setSearchFieldAction(searchData) {
    return {
        type: SEARCH,
        payload: searchData
    };
}

export function addToSearchesAction(searchData) {
    return {
        type: ADD_TO_SEARCHES,
        payload: searchData
    };
}

export function deleteSearchFromHistoryAction(searchData) {
    return {
        type: DELETE_SEARCH_FROM_HISTORY,
        payload: searchData
    };
}
