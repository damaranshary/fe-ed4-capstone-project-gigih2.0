import { Center, Text, Stack, Container, Heading, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BooksDataProps } from '../../../types/types';
import { BreadcrumbForAdventureBookContent, BreadcrumbForNatureBookContent } from '../../breadcrumb';
import BookContainer from "../container";
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { fetchBookContentFromID } from '../../../api-call/fetchJSONData';

const BookContent = () => {
    const params = useParams();
    const bookID = params?.id;
    const [contentData, setContentData] = useState<BooksDataProps>();
    const natureBooksData = useAppSelector((state: RootState) => state.natureBooks.value);
    const adventureBooksData = useAppSelector((state: RootState) => state.adventureBooks.value);
    const natureBooksDataID = useAppSelector((state: RootState) => state.natureBooks.jsonData.id);
    const adventureBooksDataID = useAppSelector((state: RootState) => state.adventureBooks.jsonData.id);
    const mergedID = natureBooksDataID.concat(adventureBooksDataID);
    const mergedData = natureBooksData.concat(adventureBooksData);

    useEffect(() => {
        const getBookContentFromID = () => {
            const filteredContentData = mergedData.filter(content => content.id === bookID);
            if (filteredContentData.length !== 0) {
                setContentData(filteredContentData[0]);
            }
            else {
                if (mergedID.includes(bookID!)) {
                    fetchBookContentFromID(bookID).then(res => setContentData(res));
                }
                else {
                    return (
                        <Center mt={24}><Text size='xl'>Konten Tidak Ditemukan</Text></Center>
                    );
                }
            }
        }
        mergedData !== undefined && getBookContentFromID();
        // eslint-disable-next-line 
    }, [bookID])

    useEffect(() => {
        contentData !== undefined && (document.title = contentData?.name + ' - Read Baca Merdeka')
        // eslint-disable-next-line 
    }, [contentData, bookID])

    return (
        <Container minH='90vh' maxW='6xl' mb={10}>
            {contentData !== undefined &&
                <>
                    <Center>
                        {contentData.category === 'adventure' &&
                            <BreadcrumbForAdventureBookContent
                                currentPage={contentData.name} />}
                        {contentData.category === 'nature' &&
                            <BreadcrumbForNatureBookContent
                                currentPage={contentData.name} />}
                    </Center>
                    <Center mt={8}>
                        <Stack direction='column' >
                            <Flex flexDirection='column' mb={6}>
                                <Center>
                                    <Heading fontSize='3xl' as='h2' mb={1}>{contentData?.name}</Heading>
                                </Center>
                                <Center>
                                    <Text color='gray.600'>Karya {contentData?.author}</Text>
                                </Center>
                            </Flex>
                        </Stack>
                    </Center>
                    <BookContainer
                        content={contentData.content}
                        title={contentData.name} />
                </>
            }
        </Container >
    );

}

export default BookContent;