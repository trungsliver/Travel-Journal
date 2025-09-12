export default function Joke(props) {
    return (
        <div className="joke">
            <h3 className="setup">{props.setup}</h3>
            <p className="punchline">{props.punchline}</p>
            <hr />
        </div>
    )
}