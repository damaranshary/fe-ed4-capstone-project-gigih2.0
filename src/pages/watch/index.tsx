import { Container, Center } from "@chakra-ui/react";
import { BreadcrumbForWatchPage } from "../../component/breadcrumb";
import WatchComponent from "../../component/watch";

const Nature = () => {
    return (
        <Container maxW='6xl' mb={10}>
            <Center>
                <BreadcrumbForWatchPage currentPage={'Watch'} />
            </Center>
            <WatchComponent />
        </Container>
    )
}

export default Nature;
