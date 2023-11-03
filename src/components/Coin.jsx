import { useState, useRef } from "react";

import { Select } from '@react-three/postprocessing'

function Coin(props) {
    const ref = useRef()
    const [hovered, hover] = useState(null)

    var height = props.size;
    var radius = props.size;
    var x = props.position[0]
    var y = props.position[1]
    var z = props.position[2]

    return (
        <Select enabled={hovered}>
            <mesh ref={ref} {...props} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} position={[x, y, z]}>
                <cylinderGeometry args={[radius/2, radius/2, height, 32]}/>
                <meshPhongMaterial color="orange" opacity={0.3} transparent />
            </mesh>
        </Select>
    )
}

export default Coin;