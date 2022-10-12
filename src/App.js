import React, {Component} from "react"

import IndexPage from "./views/index.js"
// import {Profiler, Provider} from "react"
import {Provider} from "react-redux"

import store from "./store"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <IndexPage/>
      </Provider>
    </div>
  )
}

export default App
