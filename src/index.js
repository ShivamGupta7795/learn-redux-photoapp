import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import MainApp from './Components/App'

const store = createStore(rootReducer);

ReactDOM.render(
<Provider store = {store}>
    <BrowserRouter>
        <MainApp/>
    </BrowserRouter>
</Provider>, document.getElementById('root'));