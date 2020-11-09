let initialState = {
    friends: [
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

    ]
};

const sideBarReducer = (state = initialState, action) => {

    return state;
}
export default sideBarReducer;
