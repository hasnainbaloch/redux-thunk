import * as actionsType from '../actions/actions';

const initialState = {
    person: []
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionsType.ADD_PERSON:
            const person = {name: action.person.name, age: action.person.age, id: action.person.id };
            return{
                ...state,
                person: state.person.concat(person),
            }
            break;
        case actionsType.REMOVE_PERSON:
            return{
                ...state,
                person: state.person.filter(item => item.id !== action.id),
            }
            break;
    
        default:
            break;
    }
    return state;
}

export default reducer;