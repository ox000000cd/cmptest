import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './component/Timer.js'
import {Button} from 'antd';
import Cmp from './component/Cmp.js'

function App() {
    const name = <h1>test jsx vriable</h1>



    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*    <img src={logo} className="App-logo" alt="logo"/>*/}
            {/*    <p>*/}
            {/*        Edit <code>src/App.js</code> and save to reload.*/}
            {/*    </p>*/}
            {/*    <a*/}
            {/*        className="App-link"*/}
            {/*        href="https://reactjs.org"*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*        Learn React*/}
            {/*    </a>*/}
            {/*    <p> test2</p>*/}
            {/*    {name}*/}
            {/*    <Timer name={'test string'}></Timer>*/}
            {/*    <Button type="primary">antdButton</Button>*/}
            {/*</header>*/}
            <Cmp/>
        </div>
    );
}

export default App;
