import { Center, Link, Button, Heading } from '@chakra-ui/react';
import { BreadcrumbForReadPage } from '../../component/breadcrumb';
import NatureBooksComponent from '../../component/nature';
import AdventureBooksComponent from '../../component/adventure'
import { Link as ReactRouterLink } from 'react-router-dom';

const Read = () => {
    const natureBooks = ['/data/book/N001.json', '/data/book/N002.json', '/data/book/N003.json', '/data/book/N004.json', '/data/book/N005.json', 'data/book/N006.json'];
    const natureBooksWithSlice = natureBooks.slice(0, 3);
    const adventureBooks = ['/data/book/A001.json', '/data/book/A002.json', '/data/book/A003.json', '/data/book/A004.json', '/data/book/A005.json', '/data/book/A006.json', '/data/book/A007.json'];
    const adventureBooksWithSlice = adventureBooks.slice(0, 3);

    return (
        <>
            <Center>
                <BreadcrumbForReadPage
                    currentPage={'Read'} />

            </Center>
            <Center>
                <Heading size='2xl' as='h1' mt={2} mb={8}>Semua Kategori</Heading>
            </Center>
            <AdventureBooksComponent booksList={adventureBooksWithSlice} />
            <Center>
                <Link as={ReactRouterLink} to='adventure'>
                    <Button mt={6}
                        mb={8}
                        flex={1}
                        fontSize={'sm'}
                        rounded={'xl'}
                        bg={'gray.600'}
                        color={'white'}
                        size='lg'
                        w='180px'
                        variant='outline'

                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}>
                        Lihat Semua
                    </Button>
                </Link>
            </Center>
            <NatureBooksComponent booksList={natureBooksWithSlice} />
            <Center>
                <Link as={ReactRouterLink} to='nature'>
                    <Button mt={6}
                        mb={4}
                        flex={1}
                        fontSize={'sm'}
                        rounded={'xl'}
                        bg={'gray.600'}
                        color={'white'}
                        size='lg'
                        w='180px'
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}>
                        Lihat semua
                    </Button>
                </Link>
            </Center>
        </>

    )
}

export default Read;
