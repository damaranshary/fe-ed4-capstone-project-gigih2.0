import { Container, Center } from "@chakra-ui/react";
import { BreadcrumbForWatchPage } from "../../component/breadcrumb";
import WatchComponent from "../../component/watch";

const Watch = () => {
    const videosJSONData = ['/data/video/YT001.json']
    return (
        <Container minH='90vh' mb={10}>
            <Center>
                <BreadcrumbForWatchPage currentPage={'Watch'} />
            </Center>
            <WatchComponent videosJSONData={videosJSONData} />
        </Container>
    )
}

export default Watch;
