import React from "react";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text));
    }

    return (
        <Dialogs dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 addMessage={addMessage}
                 updateNewMessageText={onMessageChange}
                 newMessageText={state.dialogsPage.newMessageText}/>
    );
}*/
let mapStateToProps = (state) =>{
    return{
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewMessageText: (text) => {
            dispatch(onMessageChangeActionCreator(text));
        },
        addMessage: ()=>{
            dispatch(addMessageActionCreator());
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps )(Dialogs);


export default DialogsContainer;