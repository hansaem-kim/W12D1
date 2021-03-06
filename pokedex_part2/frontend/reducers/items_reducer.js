import { RECEIVE_SINGLE_POKEMON } from "../actions/pokemon_actions"

const itemsReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_SINGLE_POKEMON:
            return Object.assign({}, action.pokemon.items, state);

        default:
            return state;
    }
}

export default itemsReducer;