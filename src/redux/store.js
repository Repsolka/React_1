// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
// let store = {
//
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 0, message: 'Hi! How are you?', likeCount: 15},
//                 {id: 1, message: 'It\'s my first post!', likeCount: 20}
//             ],
//
//             newPostText: ''
//
//         },
//         dialogsPage: {
//
//             dialogs: [
//                 {name: 'Misha', id: 1, imageSrc: 'https://forum.chorus.fm/styles/default/xenforo/avatars/avatar_m.png'},
//                 {name: 'Alex', id: 2, imageSrc: 'https://cabconmodding.com/data/avatars/l/25/25893.jpg'},
//                 {
//                     name: 'Max',
//                     id: 3,
//                     imageSrc: 'https://www.benzoshop.by/forum/styles/black_responsive/xenforo/avatars/avatar_male_l.png'
//                 },
//                 {
//                     name: 'Mika',
//                     id: 4,
//                     imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc2pYpCVxDkFjfCDH4_fxv8fM4c9GcG7SUiw&usqp=CAU'
//                 }
//             ],
//
//             messages: [
//                 {message: 'Hello', id: 1},
//                 {message: 'How are you?', id: 2},
//                 {message: 'Bye', id: 3}
//             ],
//
//             newMessageText: ''
//         },
//         sideBar: {
//             friends: [
//                 {name: 'Misha', id: 1, imageSrc: 'https://forum.chorus.fm/styles/default/xenforo/avatars/avatar_m.png'},
//                 {name: 'Alex', id: 2, imageSrc: 'https://cabconmodding.com/data/avatars/l/25/25893.jpg'},
//                 {
//                     name: 'Max',
//                     id: 3,
//                     imageSrc: 'https://www.benzoshop.by/forum/styles/black_responsive/xenforo/avatars/avatar_male_l.png'
//                 },
//                 {
//                     name: 'Mika',
//                     id: 4,
//                     imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc2pYpCVxDkFjfCDH4_fxv8fM4c9GcG7SUiw&usqp=CAU'
//                 }
//
//             ]
//         }
//
//
//     },
//     _CallSubscriber() {
//         console.log('state changed')
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._CallSubscriber = observer;
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sideBar = sidebarReducer(this._state.sideBar, action);
//
//         this._CallSubscriber(this._state);
//     }
// }
//
// export default store;
// window.store = store;