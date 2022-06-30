import { Center, SimpleGrid, Heading, Link, Box, VStack, Container } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { VideoDataProps } from "../../types/types";
import EmbedYoutubeVideo from "./embedYTVideo";

const WatchComponent = () => {
    const videosJSON = ['/data/video/YT001.json']
    const [videosData, setVideosData] = useState<VideoDataProps[]>([]);

    useEffect(() => {
        setVideosDataToState();
    }, [])

    const setVideosDataToState = async () => {
        Promise.all(fetcher).then((item) => {
            setVideosData(item);
        })
    }

    const fetchLegendsData = async (pathURL: string): Promise<VideoDataProps> => {
        const data: any =
            await axios
                .get(pathURL)
                .catch(err => console.log(err));
        return data.data;
    }

    const fetcher = videosJSON.map(video => fetchLegendsData(video))

    return (
        <Container maxW={48} mt={24} centerContent>
            <VStack>
                <Link as={ReactRouterLink} to='/read/legends'><Heading>Legends</Heading></Link>
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