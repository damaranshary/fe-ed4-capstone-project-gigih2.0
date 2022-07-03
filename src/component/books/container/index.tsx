import { Center, Image, Text, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { BookContainerProps } from '../../../types/types';

const BookContainer = ({ content, title }: BookContainerProps) => {
    const [currentPage, setCurrentPage] = useState(0);
    return (
        <>
            <Center><Image src={content[currentPage].imageURL} rounded='xl' w={['80%', '100%']} h={['80%', '100%']} alt={title + ' ' + currentPage.toString()}></Image></Center>
            <Center><Text w='100%' mt={6}>{content[currentPage].description}</Text></Center>
            <Center mt={6}>
                {currentPage > 0 &&
                    <IconButton onClick={() => setCurrentPage(prevPage => prevPage - 1)} aria-label='Next page' icon={<FaAngleLeft />} rounded='full' />
                }
                <Text ms={4} me={4}>{currentPage + 1} dari {content.length}</Text>
                {currentPage + 1 < content.length &&
                    <IconButton onClick={() => setCurrentPage(prevPage => prevPage + 1)} aria-label='Next page' icon={<FaAngleRight />} rounded='full'/>
                }
            </Center>
        </>
    );

}

export default BookContainer;