import { BooksDataProps } from "../types/types";
import axios from "axios";


const fetchBooksData = async (pathURL: string): Promise<BooksDataProps> => {
        const data: any =
            await axios
                .get(pathURL)
                .catch(err => console.log(err));
        return data.data;
}

export const fetcherBooksData = (booksData: string[]) => booksData.map(book => fetchBooksData(book));