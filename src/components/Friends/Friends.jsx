import React from 'react';
import style from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendsElements = props.friends.map( f => <Friend name={f.name} imageSrc={f.imageSrc} />);
    return(
        <div className={style.wrapper}>
            { friendsElements }
        </div>
    );
}

export default Friends;