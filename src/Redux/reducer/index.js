import {ADD_FAVORITE, GET_CHARACTER, GET_DETAIL, REMOVE_FAVORITE} from '../actions';

const initialState = {
    characterFavourites: [],
    charactersLoaded: [],
    characterDetail: {}
}


function rootReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                characterFavourites: [...state.characterFavourites, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                characterFavourites: [...state.characterFavourites.filter(char => char.id !== action.payload)]
            }
        case GET_CHARACTER:
            return {
                ...state,
                charactersLoaded: action.payload.results
            }
        case GET_DETAIL:
            return {
                ...state,
                characterDetail: action.payload
            }
            
        default:
            return state
    }
}

export default rootReducer;