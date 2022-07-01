import { Breadcrumb, Center, Container } from "@chakra-ui/react";
import AdventureBooksComponent from "../../../component/adventure";
import { BreadcrumbForAdventurePage } from "../../../component/breadcrumb";

const Adventure = () => {
    const adventureBooksJSONData = ['/data/book/A001.json', '/data/book/A002.json', '/data/book/A003.json', '/data/book/A004.json', '/data/book/A005.json', '/data/book/A006.json', '/data/book/A007.json'];
    return (
        <Container maxW='6xl' mb={10}>
            <Center>
                <BreadcrumbForAdventurePage currentPage={'Petualangan'} />
            </Center>
            <AdventureBooksComponent booksList={adventureBooksJSONData} />
        </Container>
    )
}

export default Adventure;

