import { PresentationControls } from '@react-three/drei';
import React, { useRef } from 'react'
import MacBookModel16 from '../models/Macbook-16';

const ModelSwitcher = ({scale, isMobile}) => {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();
    const showLargeMacbook = scale===0.08 || scale===0.005;
  return (
    <>
        <PresentationControls>
            <group ref={largeMacbookRef}>
                <MacbookModel16 scale={isMobile ? 0.05 : 0.08}/>
            </group>
        </PresentationControls>
    </>
  )
}

export default ModelSwitcher