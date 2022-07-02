import { VideoDataProps } from "../../../../types/types";
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { BreadcrumbForWatchContent } from "../../../breadcrumb";
import { fetchVideoContentFromID } from "../../../../api-call/fetchJSONData";

const EmbedYoutubeVideoContent = () => {
    const videosData = useAppSelector((state: RootState) => state.videos.value);
    const [videoContentData, setVideoContentData] = useState<VideoDataProps>();
    const params = useParams();
    const videoID = params?.id;
    
    useEffect(() => {
        const getVideoContentFromID = () => {
            const filteredVideoContentData = videosData.filter(content => content.id === videoID);
            filteredVideoContentData !== undefined ? setVideoContentData(filteredVideoContentData[0]) : fetchVideoContentFromID(videoID).then(res => setVideoContentData(res));
        }
        videoID !== undefined && getVideoContentFromID();
    // eslint-disable-next-line 
    }, [])

    return (
        <>
            {videoContentData !== undefined &&
                <Center>
                    <BreadcrumbForWatchContent currentPage={videoContentData.name} />
                </Center>
            }
            <Center>
                <iframe
                    width="1280px"
                    height="720px"
                    title='naruto'
                    src={videoContentData?.embedVideoURL}
                    allowFullScreen
                />
            </Center>
        </>
    )
}

export default EmbedYoutubeVideoContent;