import { Container, SimpleGrid, Heading, Link, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Books from '../books';
import axios from "axios";
import { useEffect, useState } from "react";
import { fetcherBooksData } from "../../api-call/fetchJSONData";
import { BooksDataProps } from "../../types/types";
import { setLegendsData } from "../../redux/slices/legendsDataSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

const LegendsComponent = () => {
    const legendsBook = ['/data/B001.json', '/data/B002.json', '/data/B003.json']
    const legendsData = useAppSelector((state: RootState) => state.legendsData.value);
    const dispatch = useAppDispatch();

    useEffect(() => {
        legendsData !== undefined && setLegendsDataToState();
    }, [])

    const setLegendsDataToState = async () => {
        Promise.all(fetcherBooksData(legendsBook)).then((item) => {
            dispatch(setLegendsData(item));
        })
    }

    return (
        <Container maxW='6xl' centerContent mb={8}>
            <Link as={ReactRouterLink} to='/read/legends'><Heading>Legends</Heading></Link>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="1">
                {legendsData !== undefined && legendsData.map((item) =>
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

export default LegendsComponent;