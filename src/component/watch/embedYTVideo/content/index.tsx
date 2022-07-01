import { VideoDataProps } from "../../../../types/types";
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { BreadcrumbForWatchContent } from "../../../breadcrumb";

const EmbedYoutubeVideoContent = () => {
    const videosData = useAppSelector((state: RootState) => state.videos.value);
    const [videoContentData, setVideoContentData] = useState<VideoDataProps>();
    const params = useParams();
    const videoID = params?.id;

    useEffect(() => {
        getVideoContentFromID();
    }, [])

    const fetchVideoContentFromID = async (): Promise<VideoDataProps> => { //will run this if there is no data in redux state
        const data: any =
            await axios
                .get(`/data/video/${videoID}.json`)
                .catch(err => console.log(err));
        return data.data;
    }

    const getVideoContentFromID = () => {
        const filteredVideoContentData = videosData.filter(content => content.id === videoID);
        filteredVideoContentData !== undefined ? setVideoContentData(filteredVideoContentData[0]) : fetchVideoContentFromID().then(res => setVideoContentData(res));
    }

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