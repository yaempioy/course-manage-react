import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import Root from './cores/Root'
import Reducer from './cores/Reducer'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

let store = createStore((state = [], action) => state)

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
registerServiceWorker()
