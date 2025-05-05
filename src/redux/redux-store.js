import {combineReducers, legacy_createStore as  createStore } from 'redux';
import profilePageReducer from './profilePage-reducer.js';
import messagesPageReducer from './messagesPage-reducer.js';
import usersPageReducer from './usersPage-reducer.js';
import newsPageReducer from './newsPage-reducer.js';
import musicPageReducer from './musicPage-reducer.js';
import settingsPageReducer from './settingsPage-reducer.js';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersPageReducer,
    newsPage: newsPageReducer,
    musicPage: musicPageReducer,
    settingsPage: settingsPageReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Сделали переменную глобальной, чтобы обращаться к ней в консоле
window.store = store;

export default store;


