import { ChakraProvider } from "@chakra-ui/react";
import {render, screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import VocabItems from "../component/vocabItems";


test('Should appear', () => {
    render(
        <ChakraProvider>
            <BrowserRouter>
                <VocabItems coverImageURL={""} content={[]} name={""} id={""} category={""} description={""}/>
            </BrowserRouter>
        </ChakraProvider>
    );
    expect(screen.getByTestId("vocabs")).toBeInTheDocument()
})