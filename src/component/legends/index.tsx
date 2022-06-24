import { Container, Grid, GridItem, Heading, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Books from '../books';
import legendsData from '../../data/legends'

const Legends = () => {
    return (
        <Container maxW='xl' centerContent>
            <Link as={ReactRouterLink} to='/read/legends'><Heading>Legends</Heading></Link>
            <Grid templateColumns='repeat(4, 1fr)' gap={1}>
                {legendsData !== undefined && legendsData.map((item) => {
                    return (
                        <GridItem w='100%'>
                            <Books
                                isNew={item.isNew}
                                imageURL={item.imageURL}
                                name={item.name}
                                id={item.id} 
                                category={item.category}/>
                        </GridItem>
                    )
                })}
            </Grid>

        </Container>

    )
}

export default Legends;