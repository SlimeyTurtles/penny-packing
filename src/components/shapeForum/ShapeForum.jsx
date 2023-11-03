import "./shapeForum.css"

export default function ShapeForum(props) {
    return (
        <div className="shapeForum">

            <form>
                <label>Container Size:
                <input
                    className="shapeForum--title"
                    type="text" 
                    value={props.turkey}
                    onChange={(e) => props.turkeyHandler(e.target.value)}
                />
                </label>
            </form>

            <form>
            <label>Coin Size:
            <input
                className="shapeForum--title"
                type="text" 
                value={props.stuffing}
                onChange={(e) => props.stuffingHandler(e.target.value)}
            />
            </label>
        </form>
        </div>
    )
}