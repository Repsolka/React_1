import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import store from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";


function App(props) {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                {/* <Navbar state={props.store.getState().sideBar}/>*/}
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer store={store}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/friends' render={() => <FriendsContainer store={store}/>}/>
                </div>
            </div>
    );
}

export default App;
