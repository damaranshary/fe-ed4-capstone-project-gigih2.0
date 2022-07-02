import { Center, Container } from "@chakra-ui/react";
import AdventureBooksComponent from "../../../component/adventure";
import { BreadcrumbForAdventurePage } from "../../../component/breadcrumb";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";

const Adventure = () => {
    const adventureBooksJSONData = useAppSelector((state : RootState) => state.adventureBooks.jsonData.json );
    return (
        <Container minH='90vh' maxW='6xl' mb={10}>
            <Center>
                <BreadcrumbForAdventurePage currentPage={'Petualangan'} />
            </Center>
            <AdventureBooksComponent booksList={adventureBooksJSONData} />
        </Container>
    )
}

export default Adventure;

