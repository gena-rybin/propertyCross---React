import {ADD_TO_FAVOURITES, DELETE_FAV_FROM_FAVOURITES, DELETE_SEARCH_FROM_HISTORY} from "../constants";

export const addToFavouritesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
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
                        action.payload
                    ];
                }
            } else return [
                ...state,
                action.payload
            ];
        case DELETE_FAV_FROM_FAVOURITES:
            return [...state];
            // return state.slice().filter(item => {
            //     return item.search !== action.payload
            // });
        default:
            return state;
    }
};
