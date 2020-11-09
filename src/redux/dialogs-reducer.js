const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
        dialogs: [
            {name: 'Misha', id: 1, imageSrc: 'https://forum.chorus.fm/styles/default/xenforo/avatars/avatar_m.png'},
            {name: 'Alex', id: 2, imageSrc: 'https://cabconmodding.com/data/avatars/l/25/25893.jpg'},
            {
                name: 'Max',
                id: 3,
                imageSrc: 'https://www.benzoshop.by/forum/styles/black_responsive/xenforo/avatars/avatar_male_l.png'
            },
            {
                name: 'Mika',
                id: 4,
                imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc2pYpCVxDkFjfCDH4_fxv8fM4c9GcG7SUiw&usqp=CAU'
            }
        ],

        messages: [
            {message: 'Hello', id: 1},
            {message: 'How are you?', id: 2},
            {message: 'Bye', id: 3}
        ],

        newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessageText,
                id: undefined
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;
