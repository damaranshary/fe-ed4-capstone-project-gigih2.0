import { Container, SimpleGrid, Heading, Link, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Vocabs from '../vocabItems';
import vocabsData from '../../data/vocabOne';
import axios from "axios";
import { useEffect, useState } from "react";
import { VocabsDataProps } from "../../types/types";

const Vocab = () => {
    const vocabsDaily = ['/data/V001.json', '/data/V002.json', '/data/V003.json']
    const [vocabsData, setVocabsData] = useState<VocabsDataProps[]>([]);

    useEffect(() => {
        vocabsDaily.map((item) => {
            fetchVocabsData(item).then(res => setVocabsData([...vocabsData, res]));
            console.log(item);
        })
    }, [])

    const fetchVocabsData = async (pathURL: string): Promise<VocabsDataProps> => {
        const data: any = await axios
            .get(pathURL)
            .catch(err => console.log(err));
        return data.data;
    }

    return (
        <Container maxW='6xl' centerContent>
            <Link as={ReactRouterLink} to='/learn/mainVocab'><Heading>Vocabulary</Heading></Link>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="1">
                {vocabsData !== undefined && vocabsData.map((item) =>
                    <Vocabs
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

export default Vocab;