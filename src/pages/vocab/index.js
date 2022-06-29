import React from "react";
import { Wrap, WrapItem, Center } from '@chakra-ui/react'
import Animals from "../../imgstock/AN.png";
import Vehicle from "../../imgstock/VH.png";
import Food from "../../imgstock/FD.png";
import Animal from "./animal";
import Hewan from "./animal";

const Vocab = () => {
    return (
        <div>
            <div className="vocabHeader">
                <h2>DAILY VOCABULARY</h2>
            </div>
            <Wrap spacing='30px' justify='center' className="vocab">
                <WrapItem>
                    <Center>
                        <a href="#"><img width= "200px" src={Animals} alt="Nothing To show"></img></a>
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