import React from 'react';
import style from './Friend.module.css';

const Friend = (props) => {
    return(
        <div>
           <div className={style.item}>
               <img src={props.imageSrc}/>
               <span>{props.name} </span>
           </div>
        </div>
    );
}

export default Friend;