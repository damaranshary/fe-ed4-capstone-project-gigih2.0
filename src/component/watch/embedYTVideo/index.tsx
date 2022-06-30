import { VideoDataProps } from "../../../types/types";
import { Center } from "@chakra-ui/react";

const EmbedYoutubeVideo = ({coverImageURL, embedVideoURL, name, author, description} : VideoDataProps) => {
    return (
        <Center>
            <iframe
                width="500px"
                height="500px"
                title='naruto'
                src={embedVideoURL}
                allowFullScreen
            />
            <iframe
                width="500px"
                height="500px"
                title='naruto'
                src={embedVideoURL}
                allowFullScreen
            />
            <iframe
                width="500px"
                height="500px"
                title='naruto'
                src={embedVideoURL}
                allowFullScreen
            />
        </Center>
    )
}

export default EmbedYoutubeVideo;