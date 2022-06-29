import React from "react";
import {Slide} from 'react-slideshow-image';
import {WrapItem, Center } from '@chakra-ui/react'
import Animal from "../../imgstock/AN.png";


const Hewan = () => {
    return(
            <div>
            <div>
                <div style={{
                    padding:20,
                    width: 200,
                    borderBottomRightRadius: '20px',
                    boxShadow:'4px 5px 0 rgba(0, 0, 0, 0.2)',
                    backgroundColor:'rgba(2, 48, 71, 0.8)',
                }}>
                    <img width= "200px" src={Animal} alt="Nothing To show"></img>
                </div>
            </div>
            </div>
    )
}

export default Hewan;