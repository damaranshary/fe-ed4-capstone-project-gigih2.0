export interface BooksDataProps  {
    coverImageURL: string,
    content: content[],
    name: string,
    id: string,
    category: string
}

export type content = {
    imageURL: string,
    description: string,
}