import axios from 'axios';

export const ADD  = 'ADD';
export const SUB  = 'SUB';
export const ADD_TEN  = 'ADD_TEN';
export const SUB_FIFTEEN  = 'SUB_FIFTEEN';
export const RESULT  = 'RESULT';
export const REMOVE  = 'REMOVE';
export const ADD_PERSON  = 'ADD_PERSON';
export const REMOVE_PERSON  = 'REMOVE_PERSON';
export const GIT_USER = 'GIT_USER';


const gitUserInfo = (data) => {
    return {
        type: GIT_USER,
        data: data
    }
}

export const getGitUser = (userName) => {
    console.log("hit hit", userName);
    return dispatch => {
        const info = axios.get(`https://api.github.com/users/${userName}`).then(data => {
            dispatch(gitUserInfo(data.data))
        });
    }
}
export const increment = () => {
    return {
        type: ADD
    }
}

export const decrement = () => {
    return {
        type: SUB
    }
}

export const addTen = () => {
    return {
        type: ADD_TEN
    }
}

export const subFifteen = () => {
    return {
        type: SUB_FIFTEEN
    }
}

const saveResult = (data) => {
    return {
        type: RESULT,
        result: data
    }
}

export const result = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res))
        }, 2000);
    }
    
}

export const removeResult = (id) => {
    return {
        type: REMOVE,
        id:id
    }
}

export const addPerson = (name, age, id) => {
    return {
        type: ADD_PERSON,
        person: {name:name, age:age, id: id}
    }
}

export const removePerson = (id) => {
    return {
        type: REMOVE_PERSON,
        id:id
    }
}


