import React from "react"

function ComponentB(props) {
    return (
        <div>
            ComponentB
            <div>{props.children}</div>
        </div>
    )
}

export default ComponentB;
