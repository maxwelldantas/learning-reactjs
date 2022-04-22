import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function soma(a, b) {
    return a + b;
}

function primeiroJSX() {
    return (
        <div>
            Maxwell Dantas - Introdução ao ReactJS
            <h1 className="lazuli">Soma: {soma(5, 3)}</h1>
        </div>
    )
}

const App = () => {

    return (
        <div className="App">
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)