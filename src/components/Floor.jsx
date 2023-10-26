const { useRef } = require("react")
const { Mesh } = require("three")

function Floor() {
    const meshRef = useRef(Mesh);

    return (
        <mesh rotation={[-Math.PI/2, 0, 0]} position={[0,0,0]} ref={meshRef}>
            <planeGeometry args={[20, 20]} />
            <meshBasicMaterial color="#ffae6b"/>
        </mesh>
    )
}

export default Floor;