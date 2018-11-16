import {
    RESPONSE,
    SEARCH,
    ADD_TO_SEARCHES,
    DELETE_SEARCH_FROM_HISTORY,
    REDIRECT_TO_RESULTS_PAGE,
    CLEAR_RESPONSE
} from '../constants';

export const responseReducer = (state = '', action) => {
    switch (action.type) {
        case RESPONSE:
            console.log('RESPONSE',action.payload);
            return action.payload;
        case CLEAR_RESPONSE:
            console.log('CLEAR_RESPONSE',action.payload);
            return '';
        default:
            return state;
    }
};

export const searchReducer = (state = '', action) => {
    switch (action.type) {
        case SEARCH:
            // console.log('SEARCH', action.payload);
            return action.payload;

        default:
            return state;
    }
};

export const redirectToResultsPageReducer = (state = false, action) => {
    switch (action.type) {
        case REDIRECT_TO_RESULTS_PAGE:
            // console.log('SEARCH', action.payload);
            return action.payload;

        default:
            return state;
    }
};

export const addToSearchesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_SEARCHES:
            if (state.length) {
                let isInside=false;
                for (let i=0; i<state.length; i++) {
                    if (state[i].search===action.payload.search) {
                        isInside = true;
                    }
                }
                if (isInside) {return [...state]; } else {
                    return [
                        ...state,
                        {
                            'search': action.payload.search,
                            'results': action.payload.results
                        }
                    ];
                }
            } else return [...state];
        case DELETE_SEARCH_FROM_HISTORY:
            return state.slice().filter(item => {
                return item.search !== action.payload
            });
        default:
            return state;
    }
};
