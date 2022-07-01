import { Container, SimpleGrid, Heading, Link, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Books from '../books';
import axios from "axios";
import { useEffect, useState } from "react";
import { fetcherBooksData } from "../../api-call/fetchJSONData";
import { BooksDataProps } from "../../types/types";
import { setAdventureBooksData } from "../../redux/slices/adventureBooksSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

const AdventureBooksComponent = () => {
    const adventuresBook = ['/data/book/A001.json', '/data/book/A002.json', '/data/book/A003.json', '/data/book/A004.json', '/data/book/A005.json', '/data/book/A006.json', '/data/book/A007.json']
    const adventureBookData = useAppSelector((state: RootState) => state.adventureBooks.value);
    const dispatch = useAppDispatch();

    useEffect(() => {
        adventureBookData !== undefined && setLegendsDataToState();
    }, [])

    const setLegendsDataToState = async () => {
        Promise.all(fetcherBooksData(adventuresBook)).then((item) => {
            dispatch(setAdventureBooksData(item));
        })
    }

    return (
        <Container maxW='6xl' centerContent mb={8}>
            <Link as={ReactRouterLink} to='/read/adventure'><Heading>Adventure</Heading></Link>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="1">
                {adventureBookData !== undefined && adventureBookData.map((item) =>
                    <Books
                        coverImageURL={item.coverImageURL}
                        name={item.name}
                        id={item.id}
                        description={item.description}
                        category={item.category}
                        content={item.content}
                        author={item.author}
                    />
                )}
            </SimpleGrid>
        </Container>

    )
}

export default AdventureBooksComponent;