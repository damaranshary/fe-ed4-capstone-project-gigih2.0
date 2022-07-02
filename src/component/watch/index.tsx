import { SimpleGrid, Heading, Link, VStack, Container } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useEffect } from "react";
import EmbedYoutubeVideo from "./embedYTVideo";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { setVideosData } from "../../redux/slices/videosSlice";
import { fetcherVideosData } from "../../api-call/fetchJSONData";
import { WatchComponentProps } from "../../types/types";

const WatchComponent = ({ videosJSONData }: WatchComponentProps) => {
    const videosData = useAppSelector((state: RootState) => state.videos.value);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const setVideosDataToState = async () => {
            Promise.all(fetcherVideosData(videosJSONData)).then((item) => {
                dispatch(setVideosData(item));
            })
        }
        videosData !== undefined && setVideosDataToState();
        // eslint-disable-next-line 
    }, [])

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