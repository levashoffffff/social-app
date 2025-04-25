const ADD_POST = "addPost";
const UPDATE_TEXTAREA_PROFILE = "updateTextareaProfile";
const DELETE_POST = "deletePost";
const SET_USER_PROFILE = "setUserProfile";

const initialState = {
    postData: [
        { id: 1, message: 'Hi, how are you', count: 15 },
        { id: 2, message: 'It is my first post', count: 15 },
    ],
    defaultValueTextarea: 'artur',
    profile: null
}

const profilePageReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    if (action.type === "addPost") {
        //Проверка на пустую строку
        if(action.commentMessage.length !== 0) {
            let newComment = {
                id: 3,
                message: action.commentMessage,
                count: 15
            }
            
            stateCopy.postData.push(newComment);
            stateCopy.defaultValueTextarea = '';
            /* state.postData.push(newComment); */
            return stateCopy;
        }
        
        return stateCopy;
    }
    else if (action.type === "updateTextareaProfile") {
        stateCopy.defaultValueTextarea = action.simbolTextarea;
        /* state.defaultValueTextarea = action.simbolTextarea; */
        return stateCopy;
    }
    else if (action.type === "deletePost") {
        stateCopy.postData.pop();
        return stateCopy;
    }
    else if(action.type === "setUserProfile") {
        stateCopy.profile = action.profile;
        return stateCopy;
    }
    return stateCopy;
}

//ActionCreators
export const addPostAC = (str) => {
    return (
        {type: ADD_POST, commentMessage: str}
    )
}

export const updateTextareaProfileAC = (str) => {
    return (
        {type: UPDATE_TEXTAREA_PROFILE, simbolTextarea: str}
    )
}

export const deletePostAC = () => {
    return (
        {type: DELETE_POST}
    )
}

//Профиль пользователя
export const setUserProfileAC = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}



export default profilePageReducer;

