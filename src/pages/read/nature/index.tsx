import { Container, Center } from "@chakra-ui/react";
import { BreadcrumbForNaturePage } from "../../../component/breadcrumb";
import NatureBooksComponent from "../../../component/nature";

const Nature = () => {
    const natureBooksJSONData = ['/data/book/N001.json', '/data/book/N002.json', '/data/book/N003.json', '/data/book/N004.json', '/data/book/N005.json', 'data/book/N006.json'];
    return (
        <Container maxW='6xl' mb={10}>
            <Center>
                <BreadcrumbForNaturePage currentPage={'Alam'} />
            </Center>
            <NatureBooksComponent booksList={natureBooksJSONData} />
        </Container>
    )
}

export default Nature;
