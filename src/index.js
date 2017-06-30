import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import Root from './cores/Root'
import Reducer from './cores/Reducer'
import registerServiceWorker from './registerServiceWorker'

let store = createStore(Reducer)

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
registerServiceWorker()
