import { Container, Center } from "@chakra-ui/react";
import { useEffect } from "react";
import { BreadcrumbForNaturePage } from "../../../component/breadcrumb";
import NatureBooksComponent from "../../../component/nature";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";

const Nature = () => {
    const natureBooksJSONData = useAppSelector((state: RootState) => state.natureBooks.jsonData.json);

    useEffect(() => {
        document.title = 'Read Nature - Baca Merdeka'
        // eslint-disable-next-line 
    }, [])
    
    return (
        <Container minH='90vh' maxW='6xl' mb={10}>
            <Center>
                <BreadcrumbForNaturePage currentPage={'Alam'} />
            </Center>
            <NatureBooksComponent booksList={natureBooksJSONData} />
        </Container>
    )
}

export default Nature;
