import { useEffect } from 'react';
import { Center, Button, Heading } from '@chakra-ui/react';
import { BreadcrumbForReadPage } from '../../component/breadcrumb';
import NatureBooksComponent from '../../component/nature';
import AdventureBooksComponent from '../../component/adventure'
import { Link as ReactRouterLink } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

const Read = () => {
    const natureBooks = useAppSelector((state: RootState) => state.natureBooks.jsonData.json)
    const natureBooksWithSlice = natureBooks.slice(0, 3);
    const adventureBooks = useAppSelector((state: RootState) => state.adventureBooks.jsonData.json)
    const adventureBooksWithSlice = adventureBooks.slice(0, 3);

    useEffect(() => {
        document.title = 'Read - Baca Merdeka'
        // eslint-disable-next-line 
    }, [])

    return (
        <>
            <Center>
                <BreadcrumbForReadPage
                    currentPage={'Read'} />

            </Center>
            <Center>
                <Heading size='2xl' as='h1' mt={4} mb={8}>Semua Kategori</Heading>
            </Center>
            <AdventureBooksComponent booksList={adventureBooksWithSlice} />
            <Center>
                <Button
                    as={ReactRouterLink}
                    mt={6}
                    mb={8}
                    flex={1}
                    fontSize={'sm'}
                    rounded={'xl'}
                    bg={'gray.600'}
                    color={'white'}
                    size='lg'
                    maxW='180px'
                    variant='outline'
                    to='adventure'
                    _hover={{
                        bg: 'blue.500',
                    }}
                    _focus={{
                        bg: 'blue.500',
                    }}>
                    Lihat Semua
                </Button>
            </Center>
            <NatureBooksComponent booksList={natureBooksWithSlice} />
            <Center mb={10}>
                <Button
                    as={ReactRouterLink}
                    mt={6}
                    mb={4}
                    flex={1}
                    fontSize={'sm'}
                    rounded={'xl'}
                    bg={'gray.600'}
                    color={'white'}
                    size='lg'
                    maxW='180px'
                    to="nature"
                    _hover={{
                        bg: 'blue.500',
                    }}
                    _focus={{
                        bg: 'blue.500',
                    }}>
                    Lihat semua
                </Button>
            </Center>
        </>

    )
}

export default Read;
