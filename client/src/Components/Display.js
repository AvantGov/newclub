// * DEPENDS 
import React, {useState} from 'react';

// * CSS 
import "../CSS/Display.css"

// * COMPS 
import Home from '../Components/Home'

const Display = () => {
    // const [showDisplay, setShowDisplay] = useState(true);

    // const displayStyle = () => {
    //     if (showDisplay === false) {
    //         console.log(showDisplay)
    //         return 'none'
    //     }
    //     if (showDisplay === true) {
    //         console.log(showDisplay)
    //         return 'block'
    //     }
    // }

    return(
        <div className='Display'>
            {/* <button className='Display__button' onClick={() => {setShowDisplay(false)}}>X</button> */}
            <Home />
        </div>
    );
};

export default Display;