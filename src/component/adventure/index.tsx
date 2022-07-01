import { Container, SimpleGrid, Heading, Link, Box, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Books from '../books';
import axios from "axios";
import { useEffect, useState } from "react";
import { fetcherBooksData } from "../../api-call/fetchJSONData";
import { BooksComponentProps, BooksDataProps } from "../../types/types";
import { setAdventureBooksData } from "../../redux/slices/adventureBooksSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

const AdventureBooksComponent = ({ booksList }: BooksComponentProps) => {
    const adventureBookData = useAppSelector((state: RootState) => state.adventureBooks.value);
    const dispatch = useAppDispatch();

    useEffect(() => {
        adventureBookData !== undefined && setLegendsDataToState();
    }, [])

    const setLegendsDataToState = async () => {
        booksList!== undefined && Promise.all(fetcherBooksData(booksList)).then((item) => {
            dispatch(setAdventureBooksData(item));
        })
    }

    return (
        <Container maxW='6xl'>
            <Heading mt={4}>Petualangan</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="1">
                {adventureBookData !== undefined && adventureBookData.map((item) =>
                    <Books
                        coverImageURL={item.coverImageURL}
                        name={item.name}
                        id={item.id}
                        key={item.id}
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