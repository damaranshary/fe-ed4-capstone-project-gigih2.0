import {
    Flex,
    Box,
    Image,
    Button,
    Center,
    Heading,
    Text
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'

import { BooksDataProps } from '../../types/types';

const Books = ({ coverImageURL, name, id, description, author }: BooksDataProps) => {
    const linkToContent = `/read/${id}`
    return (
        <Flex p={2} maxW="6xl" alignItems="center" justifyContent="center" mt={8}>
            <Box
                maxW="2xl"
                maxH="6xl"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                <Center>
                    <Image
                        src={coverImageURL}
                        alt={`Picture of ${name}`}
                        rounded="lg"
                        maxH='150px'
                        mt={4}
                    />
                </Center>
                <Box p="6">
                    <Center w='full'>
                        <Flex mt="1" justifyContent="space-between" flexDirection="column" alignContent="center">
                            <Box
                                fontSize="xl"
                                fontWeight="semibold"
                                lineHeight="tight"
                            >
                                <Heading size='md'>{name}</Heading>
                                <Text color='gray.500' fontSize='sm' mt={1}>{author}</Text>
                                <Text fontSize='xs' mt={2} noOfLines={[1, 2]}>{description}</Text>
                            </Box>
                            <Center>
                                <Button
                                    as={ReactRouterLink}
                                    to={linkToContent}
                                    mt={6}
                                    mb={4}
                                    flex={1}
                                    fontSize={'sm'}
                                    rounded={'full'}
                                    bg={'blue.400'}
                                    color={'white'}
                                    size='lg'
                                    w='80%'
                                    boxShadow={
                                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                    }
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    _focus={{
                                        bg: 'blue.500',
                                    }}>
                                    Baca
                                </Button>
                            </Center>
                        </Flex>
                    </Center>
                </Box>
            </Box>
        </Flex>
    )
};


export default Books;