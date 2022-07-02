import { Container, SimpleGrid, Heading} from "@chakra-ui/react";
import Vocabs from '../vocabItems';
import axios from "axios";
import { useEffect, useState } from "react";
import { VocabsDataProps } from "../../types/types";

const Vocab = () => {
    const vocabsDaily = ['/data/vocab/V001.json', '/data/vocab/V002.json', '/data/vocab/V003.json']
    const [vocabsData, setVocabsData] = useState<VocabsDataProps[]>([]);

    useEffect(() => {
        setVocabsDataToState();
        // eslint-disable-next-line 
    }, [])

    const setVocabsDataToState = async () => {
        Promise.all(fetcher).then((item) => {
            setVocabsData(item);
        })
    }

    const fetchVocabsData = async (pathURL: string): Promise<VocabsDataProps> => {
        const data: any =
            await axios
                .get(pathURL)
                .catch(err => console.log(err));
        return data.data;
    }

    const fetcher = vocabsDaily.map(vocab => fetchVocabsData(vocab))

    return (
        <Container maxW='6xl' minH='85vh' centerContent>
            <Heading mt={4}>Vocabulary</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="1">
                {vocabsData !== undefined && vocabsData.map((item) =>
                    <Vocabs
                        coverImageURL={item.coverImageURL}
                        name={item.name}
                        id={item.id}
                        key={item.id}
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