import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import ComponentA from "./ComponetA";
import ComponentB from "./ComponentB";
import "./styles.css"

function soma(a, b) {
    alert(a + b);
}

function primeiroJSX() {
    return (
        <div>
            Maxwell Dantas - Introdução ao ReactJS
            <h1 className="lazuli">Soma: {5 + 10}</h1>
        </div>
    )
}

const component1 = 'Aprendendo ReacJS'
const component2 = <h2>ReactJS é muito da hora</h2>

function App() {

    return (
        <div className="App">
            {primeiroJSX()}
            {component1}
            {component2}
            <Button onClick={() => soma(15, 15)} name="Maxwell Dantas" />
            <ComponentA>
                <ComponentB>
                    <Button onClick={() => soma(45, 78)} name="Soma nova" />
                </ComponentB>
            </ComponentA>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)