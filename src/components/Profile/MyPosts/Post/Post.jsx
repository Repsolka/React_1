import React from 'react';
import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.item}>
            <img src='https://forum.pandawow.ru/image.php?u=73164&dateline=1550477738'/>
            <span>{props.message}</span>
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>

    );
}

export default Post;