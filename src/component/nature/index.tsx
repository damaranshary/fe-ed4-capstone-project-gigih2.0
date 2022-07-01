import { Container, SimpleGrid, Heading, Link, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { useEffect } from 'react'
import Books from '../books';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { setNatureBooksData } from "../../redux/slices/natureBooksSlice";
import { fetcherBooksData } from "../../api-call/fetchJSONData";

const NatureBooksComponent = () => {
    const natureBooks = ['/data/book/N001.json', '/data/book/N002.json', '/data/book/N003.json', '/data/book/N004.json', '/data/book/N005.json']
    const natureBooksData = useAppSelector((state: RootState) => state.natureBooks.value)
    const dispatch = useAppDispatch();

    useEffect(() => {
        natureBooksData !== undefined && setFunFactsDataToState();
    }, [])

    const setFunFactsDataToState = async () => {
        Promise.all(fetcherBooksData(natureBooks)).then((item) => {
            dispatch(setNatureBooksData(item));
        })
    }

    return (
        <Container maxW='6xl' centerContent>
            <Link as={ReactRouterLink} to={`/read/nature`}><Heading>Alam</Heading></Link>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
                {natureBooksData !== undefined && natureBooksData.map((item) => {
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

export default NatureBooksComponent;