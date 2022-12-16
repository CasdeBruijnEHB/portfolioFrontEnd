import { useGLTF } from "@react-three/drei";
import { useFBX } from "@react-three/drei";

export default function Model(){
    //const model=useGLTF('v3.glb');
    const model=useGLTF('zelfscenev1.glb');
    //const model=useFBX('try1.fbx');

    //rotation={[Math.PI /40, -0.5, 0]} position={[3, 1, -0.5]} scale={[0.02,0.02,0.02]}
    return (
        <>
        <primitive rotation={[Math.PI /40, -0.3, 0]} position={[3, -2, -0.5]} object={model.scene} scale={[35,35,35]}/>
        </>
    )
}