import { BooksDataProps, VideoDataProps } from "../types/types";
import axios from "axios";


const fetchBooksData = async (pathURL: string): Promise<BooksDataProps> => {
    const data: any =
        await axios
            .get(pathURL)
            .catch(err => console.log(err));
    return data.data;
}

export const fetcherBooksData = (booksData: string[]) => booksData.map(book => fetchBooksData(book));

const fetchVideosData = async (pathURL: string): Promise<VideoDataProps> => {
    const data: any =
        await axios
            .get(pathURL)
            .catch(err => console.log(err));
    return data.data
}

export const fetcherVideosData = (videosData: string[]) => videosData.map(video => fetchVideosData(video));

export const fetchBookContentFromID = async (bookID: string | undefined): Promise<BooksDataProps> => { //will run this if there is no data in redux state
    const data: any =
        await axios
            .get(`/data/book/${bookID}.json`)
            .catch(err => console.log(err));
    return data.data;
}

export const fetchVideoContentFromID = async (videoID: string | undefined): Promise<VideoDataProps> => { //will run this if there is no data in redux state
    const data: any =
        await axios
            .get(`/data/video/${videoID}.json`)
            .catch(err => console.log(err));
    return data.data;
}
