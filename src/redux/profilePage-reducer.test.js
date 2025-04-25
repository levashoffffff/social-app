import profilePageReducer, {addPostAC, deletePostAC} from './profilePage-reducer.js';

const state = {
    postData: [
        { id: 1, message: 'Hi, how are you', count: 15 },
        { id: 2, message: 'It is my first post', count: 15 },
    ]
}

test('testing ADD-POST', () => {
    let action = addPostAC('new str testing');
    let resulting = profilePageReducer(state, action);
    expect(resulting.postData.length).toBe(3);
});

test('testing REMOVE-POST', () => {
    let action = deletePostAC();
    let resulting = profilePageReducer(state, action);
    expect(resulting.postData.length).toBe(2);
})