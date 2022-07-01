import { Center, SimpleGrid, Heading, Link, Box, VStack, Container, Flex, Image, Text, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { VideoDataProps } from "../../types/types";
import EmbedYoutubeVideo from "./embedYTVideo";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { setVideosData } from "../../redux/slices/videosSlice";

import { fetcherVideosData } from "../../api-call/fetchJSONData";

const WatchComponent = () => {
    const videosJSONData = ['/data/video/YT001.json']
    const videosData = useAppSelector((state: RootState) => state.videos.value);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setVideosDataToState();
    }, [])

    const setVideosDataToState = async () => {
        Promise.all(fetcherVideosData(videosJSONData)).then((item) => {
            dispatch(setVideosData(item));
        })
    }

    return (
        <Container maxW={48}>
            <VStack>
                <Link as={ReactRouterLink} to='/watch'><Heading>Watch</Heading></Link>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="1">
                    {videosData !== undefined && videosData.map((item) =>
                        <EmbedYoutubeVideo
                            coverImageURL={item.coverImageURL}
                            embedVideoURL={item.embedVideoURL}
                            name={item.name}
                            id={item.id}
                            author={item.author}
                            description={item.description}
                        />
                    )}
                </SimpleGrid>
            </VStack>
        </Container>
    )
}

export default WatchComponent;