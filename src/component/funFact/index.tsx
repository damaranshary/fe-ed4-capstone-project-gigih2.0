import { Container, Grid, GridItem, Heading, Link, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import Books from '../books';
import funFactData from '../../data/fun-fact'

const FunFact = () => {
    return (
        <Container maxW='xl' centerContent>
            <Link as={ReactRouterLink} to='/read/fun-fact'><Heading>Fun Fact</Heading></Link>
            <Grid templateColumns='repeat(4, 1fr)' gap={1}>
                {funFactData !== undefined && funFactData.map((item) => {
                    return (
                        <GridItem w='100%'>
                            <Books
                                isNew={item.isNew}
                                imageURL={item.imageURL}
                                name={item.name}
                                id={item.id}
                                category={item.category} />
                        </GridItem>
                    )
                })}
            </Grid>

        </Container>

    )
}

export default FunFact;