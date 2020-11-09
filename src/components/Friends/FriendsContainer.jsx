import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";

/*const FriendsContainer = (props) => {
    let state = props.store.getState();

    return (
        <Friends friends={state.sideBar.friends}/>
    );
}*/

let mapStateToProps= (state) => {
    return{
        friends: state.sideBar.friends
    }
}
let mapDispatchToProps= (dispatch) => {
    return{}

}

const FriendsContainer = connect(mapStateToProps)(Friends);
export default FriendsContainer;