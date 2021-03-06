import { Center, Image, Text, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { BookContainerProps } from '../../../types/types';

const BookContainer = ({ content, title }: BookContainerProps) => {
    const [currentPage, setCurrentPage] = useState(0);
    return (
        <>
            <Center>
                <Image src={content[currentPage].imageURL} rounded='xl' w='600px' h='400px' alt={title + ' ' + currentPage.toString()} />
            </Center>
            <Center>
                <Text maxW='3xl' mt={[6, 8, 10]}>{content[currentPage].description}</Text>
            </Center>

            <Center mt={6}>
                {currentPage > 0 &&
                    <IconButton onClick={() => setCurrentPage(prevPage => prevPage - 1)} aria-label='Previous page' icon={<FaAngleLeft />} rounded='full' />
                }
                <Text ms={4} me={4}>{currentPage + 1} dari {content.length}</Text>
                {currentPage + 1 < content.length &&
                    <IconButton onClick={() => setCurrentPage(prevPage => prevPage + 1)} aria-label='Next page' icon={<FaAngleRight />} rounded='full' />
                }
            </Center>
        </>
    );

}

export default BookContainer;