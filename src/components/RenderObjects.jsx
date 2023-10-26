import Coin from "./Coin";

function RenderObjects(props) {

    props.map(x => <Coin height="1" radius="1" position={[1, 1, 1]}/>)

}

export default RenderObjects;