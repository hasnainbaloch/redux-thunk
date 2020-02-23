import * as actionsType from '../actions/actions';


const initialState = {
    users: []
}

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case actionsType.GIT_USER:
            console.log("HIT")
            const data = {
                id: action.data.id,
                name: action.data.name,
                photo: action.data.avatar_url,
                repo: action.data.public_repos,
                following: action.data.following,
                follower: action.data.followers,
            }
            return{
                ...state,
                users: state.users.concat(data)
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