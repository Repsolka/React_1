import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Profile(props) {
    return (
        <div className={s.description}>
            <ProfileInfo/>
            <MyPostsContainer /*posts={props.state.posts}*/
                     store={props.store}
                    /* newPostText={props.state.newPostText}
                     dispatch={props.dispatch}*//>
        </div>
    );
}

export default Profile;