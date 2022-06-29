import { Container, SimpleGrid, Heading, Link, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { useEffect } from 'react'
import Books from '../books';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { setFunFactsData } from "../../redux/slices/funFactDataSlice";
import { fetcherBooksData } from "../../api-call/fetchBooksData";

const FunFactComponent = () => {
    const funFactBook = ['/data/B004.json']
    const funFactsData = useAppSelector((state: RootState) => state.funFactData.value)
    const dispatch = useAppDispatch();

    useEffect(() => {
        setFunFactsDataToState()
    }, [])

    const setFunFactsDataToState = async () => {
        Promise.all(fetcherBooksData(funFactBook)).then((item) => {
            dispatch(setFunFactsData(item));
        })
    }

    return (
        <Container maxW='6xl' centerContent>
            <Link as={ReactRouterLink} to='/read/fun-fact'><Heading>Fun Fact</Heading></Link>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
                {funFactsData !== undefined && funFactsData.map((item) => {
                    return (
                        <Books
                            coverImageURL={item.coverImageURL}
                            content={item.content}
                            name={item.name}
                            id={item.id}
                            category={item.category}
                            description={item.description}
                            author={item.author} />
                    )
                })}
            </SimpleGrid>

        </Container>

    )
}

export default FunFactComponent;