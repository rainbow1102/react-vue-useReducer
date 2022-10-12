import React, {Component} from "react"

import TodoApp from "./components/index.js"
// import {Profiler, Provider} from "react"
// import {Provider} from "react-redux"

// import store from "./store"

function App() {
  return (
    <div className="App">
      {/*<Provider store={store}>
        <IndexPage/>
      </Provider>*/}
      <TodoApp/>
    </div>
  )
}

export default App
