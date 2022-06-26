export interface BooksDataProps  {
    isNew: boolean,
    imageURL: imageURL,
    name: any,
    id: string,
    category: string
}

export type imageURL = {
    cover: string,
    content: string[],
}