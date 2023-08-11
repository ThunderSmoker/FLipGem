import React,  { useEffect } from 'react';
import NavBar from './Home/NarBar';

const Flipgem = () => {
    return (
        <>
            <NavBar />
            <div>

            <div style={{display:"flex"}}>

            <div >FlipGem Balance 🪙</div>
            <div style={{color:"blue"}}>0</div>
            </div>
            </div>
        </>
    )
}

export default Flipgem;