import React from 'react';
import {addPostActionCreator, updateNewPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*function MyPostsContainer(props) {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostChangeActionCreator(text));
    }

    return (
        <MyPosts updateMewPostText={onPostChange}
                 addPost={addPost}
                 newPostText={state.profilePage.newPostText}
                 posts={state.profilePage.posts}/>
    );
}*/

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMewPostText: (text) => {
            dispatch(updateNewPostChangeActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;