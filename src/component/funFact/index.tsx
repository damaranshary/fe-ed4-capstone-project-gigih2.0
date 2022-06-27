import { Container, SimpleGrid, Heading, Link, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import Books from '../books';
import funFactData from '../../data/fun-fact'

const FunFact = () => {
    return (
        <Container maxW='6xl' centerContent>
            <Link as={ReactRouterLink} to='/read/fun-fact'><Heading>Fun Fact</Heading></Link>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
                {funFactData !== undefined && funFactData.map((item) => {
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

export default FunFact;