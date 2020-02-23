import * as actionsType from '../actions/actions';


const initialState = {
    result: []
}

const reducer = (state = initialState , action) => {
    switch (action.type) {

        case actionsType.RESULT:
            const data = {
                id: Math.random(),
                value: action.result
            }
            return{
                ...state,
                result: state.result.concat(data)
            }

        case actionsType.REMOVE:
            return{
                ...state,
                result: state.result.filter(item => item.id !== action.id)
            }
    }
    
    return state;
}

export default reducer;