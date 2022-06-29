import { Container, SimpleGrid, Heading, Link, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Books from '../books';
import legendsData from '../../data/legends'
import axios from "axios";
import { useEffect, useState } from "react";
import { BooksDataProps } from "../../types/types";

const Legends = () => {
    const legendsBook = ['/data/B001.json', '/data/B002.json', '/data/B003.json']
    const [legendsData, setLegendsData] = useState<BooksDataProps[]>([]);

    useEffect(() => {
        legendsBook.map((item) => {
            fetchLegendsData(item).then(res => setLegendsData([...legendsData, res]));
            console.log(item);
        })
    }, [])

    const fetchLegendsData = async (pathURL: string): Promise<BooksDataProps> => {
        const data: any = await axios
            .get(pathURL)
            .catch(err => console.log(err));
        return data.data;
    }

    return (
        <Container maxW='6xl' centerContent>
            <Link as={ReactRouterLink} to='/read/legends'><Heading>Legends</Heading></Link>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="1">
                {legendsData !== undefined && legendsData.map((item) =>
                    <Books
                        coverImageURL={item.coverImageURL}
                        name={item.name}
                        id={item.id}
                        description={item.description}
                        category={item.category}
                        content={item.content}
                    />
                )}
            </SimpleGrid>

        </Container>

    )
}

export default Legends;