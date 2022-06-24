import React from "react";
import { Wrap, WrapItem, Center } from '@chakra-ui/react'
import Animal from "../../imgstock/AN.png";
import Vehicle from "../../imgstock/Vehicle.png";
import Food from "../../imgstock/Food.png";

const Vocab = () => {
    return (
        <div>
            <div className="vocabHeader">
                <h2>DAILY VOCABULARY</h2>
            </div>
            <Wrap spacing='30px' justify='center' className="vocab">
                <WrapItem>
                    <Center>
                        <a href="#"><img width= "200px" src={Animal} alt="Nothing To show"></img></a>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center>
                        <a href="#"><img width= "200px" src={Vehicle} alt="Nothing To show"></img></a>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center>
                        <a href="#"><img width= "200px" src={Food} alt="Nothing To show"></img></a>
                    </Center>
                </WrapItem>
            </Wrap>
        </div>
    )
}

export default Vocab;