let renderEntireTree = () => {
    console.log("Subscribe");
}

let state = {
    profilePage: {
        postData: [
            { id: 1, message: 'Hi, how are you', count: 15 },
            { id: 2, message: 'It is my first post', count: 15 },
        ],
        defaultValueTextarea: 'artur'
    },
    messagesPage: {
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
        ]
    },
    usersPage: {

    },
    newsPage: {

    },
    musicPage: {

    },
    settingsPage: {

    }
}

//Функция dispatch
export const dispatch = (action) => {
    if (action.type === "addPost") {
        let newComment = {
            id: 3,
            message: action.commentMessage,
            count: 15
        }

        state.profilePage.postData.push(newComment);
        renderEntireTree();
    }
    else if (action.type === "updateTextareaProfile") {
        state.profilePage.defaultValueTextarea = action.simbolTextarea;
        renderEntireTree();
    }
}

/* //Функция добавления поста
export let addPost = (commentMessage) => {
    let newComment = {
        id: 3,
        message: commentMessage,
        count: 15
    }

    state.profilePage.postData.push(newComment);
    renderEntireTree();
}

//Функция обновления textarea в profile
export let updateTextareaProfile = (simbolTextarea) => {
    state.profilePage.defaultValueTextarea = simbolTextarea;
    renderEntireTree();
} */

//ActionCreators
export const addPostAC = (str) => {
    return (
        {type: "addPost", commentMessage: str}
    )
}

export const updateTextareaProfileAC = (str) => {
    return (
        {type: "updateTextareaProfile", simbolTextarea: str}
    )
}

//Observer
export const observer = (observer) => {
    renderEntireTree = observer;
}


export default state;