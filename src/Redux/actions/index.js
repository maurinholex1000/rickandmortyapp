export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const GET_DETAIL = "GET_DETAIL";
export const GET_CHARACTER = "GET_CHARACTER";


export function addFavorite(payload) {
    return {
        type: ADD_FAVORITE,
        payload
    }
}

export function removeFavorite(payload) {
    return {
        type: REMOVE_FAVORITE,
        payload
    }
}

export function getDetail(id) {
    return function(dispatch) {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(resp => resp.json())
            .then(json => {
                dispatch({
                    type: GET_DETAIL,
                    payload: json
                })
            })
    }
}

// Page: Home | SearchBar
export function getCharacter(personaje) {
    return function(dispatch) {
        return fetch(`https://rickandmortyapi.com/api/character/?name=${personaje}`)
            .then(resp => resp.json())
            .then(json => {
                dispatch({
                    type: GET_CHARACTER,
                    payload: json
                })
            })
    }
}