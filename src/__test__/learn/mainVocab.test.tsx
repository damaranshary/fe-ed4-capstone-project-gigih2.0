import { ChakraProvider } from "@chakra-ui/react";
import {render, screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Vocab from "../../component/mainVocab";


test('Should appear', () => {
    render(
        <ChakraProvider>
            <BrowserRouter>
                <Vocab/>
            </BrowserRouter>
        </ChakraProvider>
    );
    expect(screen.getByTestId("main-vocab")).toBeInTheDocument()
})