const SET_USER = 'set_user';
const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_CURRENT_PAGE = 'set_current_page';
const SET_TOTAL_USERS_COUNT = 'set_total_users_count';
const TOGGLE_IS_FETCHING = 'toggle_is_fetching';

let initialState = {
    /* usersData: [
        { id: 1, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' }, photoUrl: 'https://cdn-icons-png.flaticon.com/512/219/219983.png' },
        { id: 2, followed: true, fullName: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' }, photoUrl: 'https://cdn-icons-png.flaticon.com/512/219/219983.png' },
        { id: 3, followed: false, fullName: 'Andrew', status: 'I am a boss again', location: { city: 'Ufa', country: 'Russia' }, photoUrl: 'https://cdn-icons-png.flaticon.com/512/219/219983.png' },
    ] */
    //Массив объектов 
    usersData: [],
    //Число постов на странице
    pageSize: 5,
    //Общее количество элементов
    totalUsersCount: 0,
    //Текущая страница
    currentPage: 1,
    //Для loader
    isFetching: false
}

const usersPageReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case 'follow': {
            stateCopy = {
                ...state,
                usersData: state.usersData.map((user) => {
                    if (user.id === action.userId) {
                        //Возвращаем копию
                        return { ...user, followed: true }
                    }
                    //Возвращаем тот же объект
                    return user;
                })
            };
            return stateCopy;
        }
        case 'unfollow': {
            stateCopy = {
                ...state,
                /* usersData: [...state.usersData] */
                usersData: state.usersData.map((user) => {
                    if (user.id === action.userId) {
                        //Возвращаем копию
                        return { ...user, followed: false }
                    }
                    //Возвращаем тот же объект
                    return user;
                })
            };
            return stateCopy;
        }
        case 'set_user': {
            stateCopy = {...state, usersData: action.userData};
            return stateCopy;
        }
        case 'set_current_page': {
            return { ...state, currentPage: action.currentPage }
        }
        case 'set_total_users_count': {
            return { ...state, totalUsersCount: action.count }
        }
        case 'toggle_is_fetching': {
            return {...state, isFetching: action.isFetching}
        }
        default: {
            return stateCopy = {...state};
        }
    }

}

//Подписка
export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

//Отписка
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

//Получение массива объектов users
export const setUserAC = (arr) => {
    return (
        { type: SET_USER, userData: arr }
    )
}

//Получаем текущую страницу
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

//Общее количество элементов
export const setUsersTotalCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}


export default usersPageReducer;