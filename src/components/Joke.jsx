import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown() {
        setIsShown(prevState => !prevState)
    }

    return (
        <div className="joke">
            {props.setup && <h3 className="setup">{props.setup}</h3>}
            {isShown && <p className="punchline">{props.punchline}</p>}
            <button onClick={toggleShown}>Show punchline</button>
            <hr />
        </div>
    )
}