const UPDATE_MESSAGE = 'updateMessage';
const ADD_MESSAGE = 'addMessage';

const initialState = {
    messageUserData: [
        { id: 1, name: 'Артем' },
        { id: 2, name: 'Олег' },
        { id: 3, name: 'Анастасия' },
        { id: 4, name: 'Ольга' },
        { id: 5, name: 'Кирилл' }
    ],
    messageListData: [
        { message: "Hi" },
        { message: "How are you?" },
        { message: "Hello" }
    ],
    strTextarea: ''
}

const messagesPageReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch(action.type) {
        case 'addMessage': {
            let obj = {
                message: action.str
            }
            stateCopy.messageListData.push(obj);
            stateCopy.strTextarea = '';
            return stateCopy;
        }
        case 'updateMessage': {
            stateCopy.strTextarea = action.letter;
            return stateCopy;
        }
        default: {
            return stateCopy;
        }
    }
}

export const updateMessageAC = (letter) => {
    return (
        {type: UPDATE_MESSAGE, letter}
    )
}

export const addMessageAC = (str) => {
    return (
        {type: ADD_MESSAGE, str}
    )
}



export default messagesPageReducer;