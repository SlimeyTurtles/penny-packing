import "./shapeForum.css"

export default function ShapeForum() {
    return (
        <div className="shapeForum">
            <h3>Shape</h3>
            <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <input></input>
        </div>
    )
}