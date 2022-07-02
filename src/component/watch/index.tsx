import { SimpleGrid, Heading, Center, Container } from "@chakra-ui/react";
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
            videosJSONData !== undefined && Promise.all(fetcherVideosData(videosJSONData)).then((item) => {
                dispatch(setVideosData(item));
            })
        }
        videosData !== undefined && setVideosDataToState();
        // eslint-disable-next-line 
    }, [])

    return (
        <Container maxW='8xl'>
            <Center mt={4} mb={4}><Heading>Watch</Heading></Center>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
                {videosData !== undefined && videosData.map((item) => {
                    return (
                        <EmbedYoutubeVideo
                            coverImageURL={item.coverImageURL}
                            embedVideoURL={item.embedVideoURL}
                            name={item.name}
                            id={item.id}
                            key={item.id}
                            author={item.author}
                            description={item.description}
                        />
                    )
                })}
            </SimpleGrid>
        </Container>
    )
}

export default WatchComponent;