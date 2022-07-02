export interface BooksDataProps  {
    coverImageURL: string,
    content: content[],
    name: string,
    id: string,
    category: string,
    description: string,
    author: string
}

export type content = {
    imageURL: string,
    description: string,
}

export type BreadcrumbProps = {
    currentPage: string;
}

export interface VocabsDataProps  {
    coverImageURL: string,
    content: content[],
    name: string,
    id: string,
    category: string,
    description: string,
}

export interface VideoDataProps { 
    coverImageURL: string,
    embedVideoURL: string,
    name: string,
    id: string,
    description: string,
    author: string
}

export interface BooksComponentProps {
    booksList: string[]
}

export interface WatchComponentProps {
    videosJSONData: string[]
}
