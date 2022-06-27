import { Container, SimpleGrid, Heading, Link, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Books from '../books';
import legendsData from '../../data/legends'

const Legends = () => {
    return (
        <Container maxW='6xl' centerContent>
            <Link as={ReactRouterLink} to='/read/legends'><Heading>Legends</Heading></Link>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="1">
                {legendsData !== undefined && legendsData.map((item) => {
                    return (
                        <Books
                            coverImageURL={item.coverImageURL}
                            content={item.content}
                            name={item.name}
                            id={item.id}
                            category={item.category} />
                    )
                })}
            </SimpleGrid>

        </Container>

    )
}

export default Legends;