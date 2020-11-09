import React from "react";
import s from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <Dialog name={d.name} id={d.id} src={d.imageSrc}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.dialogsAddMessage}>
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
                <button onClick={addMessage}> Add message</button>
            </div>

        </div>
    );
}


export default Dialogs;