import {
    Flex,
    Box,
    Image,
    Button,
    Center,
    Link,
    Heading,
    Text
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'

import { BooksDataProps } from '../../types/types';

const Books = ({ coverImageURL, name, id, category, description, author }: BooksDataProps) => {
    const categoryWithSlug = category.replaceAll(" ", "-")
    const linkToDescription = `/read/${categoryWithSlug}/${id}`
    return (
        <Flex p={2} maxW="6xl" alignItems="center" justifyContent="center" mt={8}>
            <Box
                maxW="xl"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                <Image
                    src={coverImageURL}
                    alt={`Picture of ${name}`}
                    roundedTop="lg"
                />
                <Box p="6">
                    <Center w='full'>
                        <Flex mt="1" justifyContent="space-between" flexDirection="column" alignContent="center">
                            <Box
                                fontSize="xl"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                            >
                                <Heading size='md'>{name}</Heading>
                                <Text color='gray.500' fontSize='sm' mt={1}>{author}</Text>
                                <Text fontSize='xs' mt={2}>{description}</Text>
                            </Box>
                            <Center>
                                <Link as={ReactRouterLink} to={linkToDescription}>
                                    <Button
                                        mt="4"
                                        flex={1}
                                        fontSize={'sm'}
                                        rounded={'full'}
                                        bg={'blue.400'}
                                        color={'white'}
                                        size='lg'
                                        w='300px'
                                        boxShadow={
                                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                        }
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                        _focus={{
                                            bg: 'blue.500',
                                        }}>
                                        Read
                                    </Button>
                                </Link>
                            </Center>

                        </Flex>
                    </Center>

                </Box>
            </Box>
        </Flex>
    )
};


export default Books;