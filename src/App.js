import React, { Component } from 'react';
import './App.css';
import HashInputComponent from './Components/HashInputComponent.js';
import HashOutputComponent from './Components/HashOutputComponent.js';
import FileSelectorComponent from './Components/FileSelectorComponent.js';

class App extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = '#FFFDE4';
    }

    render() {
        return (
            <div className="App">
                <HashInputComponent />
                <FileSelectorComponent />
                <HashOutputComponent />
            </div>
        );
    }
}

export default App;
