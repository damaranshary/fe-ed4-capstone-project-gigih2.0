import { Container, Center } from "@chakra-ui/react";
import { useEffect } from "react";
import { BreadcrumbForWatchPage } from "../../component/breadcrumb";
import WatchComponent from "../../component/watch";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

const Watch = () => {
    const videosJSONData = useAppSelector((state: RootState) => state.videos.jsonData.json)

    useEffect(() => {
        document.title = 'Watch - Baca Merdeka'
        // eslint-disable-next-line 
    }, [])

    return (
        <Container minH='90vh' maxW='6xl' mb={10}>
            <Center >
                <BreadcrumbForWatchPage currentPage={'Watch'} />
            </Center>
            <WatchComponent videosJSONData={videosJSONData} />
        </Container>
    )
}

export default Watch;
