import React from 'react'

export default function Hero(props) {
    if (props.name == "Joker") throw new Error("Not a heroo ");
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}
