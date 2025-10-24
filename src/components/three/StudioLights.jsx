import { Environment, Lightformer } from '@react-three/drei'
import React from 'react'

const StudioLights = () => {
  return (
    // canvas can't read div. it can read group tag
    <group name='lights'>
        {/* 
        Env will wrap the scene with lighting. Resolution will
        add reflections to metallic surfaces. 256 is balanced for
        performance and details
         */}
         {/* lightFormer simulate large soft rectangular studio light . 
            It highlight product edges without harsh shadows */}
        <Environment resolution={256}>
            
            <Lightformer 
                intensity={10}
                position={[-10, 5,-5]}
                scale={10}
                rotation-y={Math.PI/2}
            /> 
            <Lightformer 
                intensity={10}
                position={[10, 5,-5]}
                scale={10}
                rotation-y={Math.PI/2}
            /> 

        </Environment>
        {/* <spotLight position={[-2,10,5]} angle={0.15} decay={0} intensity={Math.PI *0.2} />
        <spotLight position={[0,-25,0]} angle={0.15} decay={0} intensity={Math.PI *0.2} />
        <spotLight position={[0,15,5]} angle={0.15} decay={0} intensity={Math.PI *1} /> */}

    </group>
  )
}

export default StudioLights