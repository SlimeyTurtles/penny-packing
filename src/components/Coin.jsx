function Coin(props) {
    var height = 1
    var radius = 1;
    var x = props.position[0]
    var y = props.position[1]
    var z = props.position[2]

    return (
        <mesh position={[x, y, z]}>
            <cylinderGeometry args={[radius, radius, height, 32]}/>
            <meshStandardMaterial color="brown" />
        </mesh>
    )
}

export default Coin;